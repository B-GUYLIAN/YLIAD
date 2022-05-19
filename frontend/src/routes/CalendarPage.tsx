import { NavigateFunction, useNavigate } from "react-router-dom";
import base from "./Base.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { BrowserView, MobileView } from "react-device-detect";
import { useEffect, useState } from "react";
import moment from "moment";
import Modal from "@mui/material/Modal";
import Read from "../assets/images/read.png";
import Write from "../assets/images/write.png";
import Stars2 from "../components/layout/Stars2";
import Navbar from "../components/layout/Navbar";
import axios from "axios";
import blue from "../assets/images/blue.png";
import green from "../assets/images/green.png";
import pink from "../assets/images/pink.png";
import purple from "../assets/images/purple.png";
import red from "../assets/images/red.png";
import yellow from "../assets/images/yellow.png";

function CalendarPage() {
  const emotionFireMatch: any = {
    anger: red,
    fear: purple,
    sad: blue,
    love: pink,
    joy: yellow,
    disgust: green,
  };
  // 세션 스토리지에 저장되는 모든 값은 문자열 타입
  const token: string | null = sessionStorage.getItem("token");
  const id: string | null = sessionStorage.getItem("userid");

  const today: string = moment(new Date()).format("YYYYMMDD");
  // date -> 사용자가 클릭한 날짜 할당(초기값: 오늘 날짜)
  const [date, setDate] = useState<Date>(new Date());
  const [toggleBoal, setToggleBoal] = useState<Boolean>(false);

  const [month, setMonth] = useState<Number>(
    parseInt(moment(date).format("YYYYMM").slice(-2))
  );
  const [year, setYear] = useState<Number>(
    parseInt(moment(date).format("YYYYMM").slice(0, 4))
  );

  type EmotionObject = {
    day: string;
    emotion: string;
  };
  const [dailyEmotion, setDailyEmotion] = useState<EmotionObject[]>([]);

  useEffect(() => {
    axios
      .post(
        "https://k6a308.p.ssafy.io/api-diary/api/diary/calendar",
        {
          // month: month 의 축약형
          month,
          userID: id,
          year,
        },
        {
          headers: {
            // string | number | boolean 타입인 Authorization에 string | null 할당하는 법
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setDailyEmotion(res.data);
      });
  }, [month]);

  // view -> 현재 화면에 보이는 달의 첫 날(activeStartDate)을 포함한 객체(Object)
  // view의 타입 alias 설정
  type ViewObject = {
    action: string;
    activeStartDate: string;
    value: string;
    view: string;
  };

  function giveMeDate(view: ViewObject) {
    setToggleBoal(!toggleBoal);
    setMonth(parseInt(moment(view.activeStartDate).format("YYYYMM").slice(-2)));
    setYear(
      parseInt(moment(view.activeStartDate).format("YYYYMM").slice(0, 4))
    );
  }

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  function onClickDay(value: Date) {
    setModalOpen(true);
    setDate(value);
  }

  function handleClose() {
    setModalOpen(false);
  }

  function writeDiary() {
    const selectdate: number = Number(moment(date).format("YYYYMMDD"));
    navigate(`/emotion/${selectdate}`);
  }

  function readDiary() {
    const selectdate: number = Number(moment(date).format("YYYYMMDD"));
    navigate(`/dayDiary/${selectdate}`);
  }

  return (
    <>
      <Navbar />
      <Stars2 />
      <BrowserView>
        <div className={base.container}>
          <div className="P_container">
            <Calendar
              value={date}
              formatDay={(locale: string, date: Date): string =>
                moment(date).format("DD")
              }
              showNeighboringMonth={false}
              next2Label=""
              prev2Label=""
              nextLabel=">"
              prevLabel="<"
              onClickDay={(value: Date) => onClickDay(value)}
              // 좌우 화살표로 이동했을 때만 giveMeDate 호출
              onActiveStartDateChange={(view: any) => giveMeDate(view)}
              // 달을 직접 선택했을 때만 giveMeDate 호출
              onViewChange={(view: any) => giveMeDate(view)}
              tileContent={({ date }: any): any => {
                const oneDay: EmotionObject[] = dailyEmotion.filter(
                  (x) => x.day === moment(date).format("DD")
                );
                if (
                  dailyEmotion.find(
                    (x: EmotionObject) => x.day === moment(date).format("DD")
                  )
                ) {
                  return (
                    <div>
                      <img
                        src={
                          emotionFireMatch[oneDay[oneDay.length - 1].emotion]
                        }
                        alt="joy"
                        className="dot"
                      />
                    </div>
                  );
                }
              }}
            ></Calendar>
          </div>

          <Modal open={modalOpen} onClose={handleClose}>
            <div id="modalbox">
              <div className="modaldate">
                {moment(date).format("YYYY년 MM월 DD일")}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "30px",
                }}
              >
                <div className="readDiary" onClick={readDiary}>
                  <img id="readimg" src={Read} alt="read" />
                  <span>일기 읽기</span>
                </div>

                {moment(date).format("YYYYMMDD") === today ? (
                  <div className="writeDiary" onClick={writeDiary}>
                    <img id="writeimg" src={Write} alt="write" />
                    <span>일기 쓰기</span>
                  </div>
                ) : null}
              </div>
            </div>
          </Modal>
        </div>
      </BrowserView>

      <MobileView>
        <div className={base.container}>
          <div className="M_container">
            <Calendar
              locale="ko"
              value={date}
              formatDay={(locale: string, date: Date): string =>
                moment(date).format("DD")
              }
              showNeighboringMonth={false}
              next2Label=""
              prev2Label=""
              nextLabel=">"
              prevLabel="<"
              onClickDay={(value: Date) => onClickDay(value)}
              onActiveStartDateChange={(view: any) => giveMeDate(view)}
              onViewChange={(view: any) => giveMeDate(view)}
              tileContent={({ date }: any): any => {
                const oneDay: EmotionObject[] = dailyEmotion.filter(
                  (x) => x.day === moment(date).format("DD")
                );
                if (
                  dailyEmotion.find(
                    (x: EmotionObject) => x.day === moment(date).format("DD")
                  )
                ) {
                  return (
                    <div>
                      <img
                        src={
                          emotionFireMatch[oneDay[oneDay.length - 1].emotion]
                        }
                        alt="joy"
                        className="dot"
                      />
                    </div>
                  );
                }
              }}
            ></Calendar>
          </div>

          <Modal open={modalOpen} onClose={handleClose}>
            <div id="modalbox">
              <div className="modaldate">
                {moment(date).format("YYYY년 MM월 DD일")}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "30px",
                }}
              >
                <div className="readDiary" onClick={readDiary}>
                  <img id="readimg" src={Read} alt="read" />
                  <span>일기 읽기</span>
                </div>

                {moment(date).format("YYYYMMDD") === today ? (
                  <div className="writeDiary" onClick={writeDiary}>
                    <img id="writeimg" src={Write} alt="write" />
                    <span>일기 쓰기</span>
                  </div>
                ) : null}
              </div>
            </div>
          </Modal>
        </div>
      </MobileView>
    </>
  );
}

export default CalendarPage;

import { useNavigate } from "react-router-dom";
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

function CalendarPage() {
  // 세션 스토리지에 저장되는 모든 값은 문자열 타입
  const token: string | null = sessionStorage.getItem("token");
  const id: string | null = sessionStorage.getItem("userid");
  // date -> 사용자가 클릭한 날짜 할당
  const [date, setDate] = useState(new Date());
  const [toggleBoal, setToggleBoal] = useState<Boolean>(false);

  const [month, setMonth] = useState<Number>(0);
  const [year, setYear] = useState<Number>(0);
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
      .then((res) =>
        console.log("리스폰스:", res, `올해는: ${year}`, `이번달은: ${month}`)
      );
  }, [toggleBoal]);

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
  const navigate = useNavigate();

  function onClickDay() {
    setModalOpen(true);
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
              onChange={setDate}
              value={date}
              formatDay={(locale, date) => moment(date).format("DD")}
              showNeighboringMonth={false}
              next2Label=""
              prev2Label=""
              nextLabel=">"
              prevLabel="<"
              onClickDay={onClickDay}
              // 좌우 화살표로 이동했을 때만 giveMeDate 호출
              onActiveStartDateChange={(view: any) => giveMeDate(view)}
              // 달을 직접 선택했을 때만 giveMeDate 호출
              onViewChange={(view: any) => giveMeDate(view)}
            ></Calendar>
          </div>

          <Modal open={modalOpen} onClose={handleClose}>
            <div id="modalbox">
              <div className="modaldate">
                {moment(date).format("YYYY년 MM월 DD일")}
              </div>
              <div className="modalimgbox">
                <img onClick={readDiary} id="readimg" src={Read} alt="read" />
                <img
                  onClick={writeDiary}
                  id="writeimg"
                  src={Write}
                  alt="write"
                />
              </div>
              <div className="modaltextbox">
                <span>일기 읽기</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>일기 쓰기 </span>
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
              onChange={setDate}
              value={date}
              formatDay={(locale, date) => moment(date).format("DD")}
              showNeighboringMonth={false}
              next2Label=""
              prev2Label=""
              nextLabel=">"
              prevLabel="<"
              onClickDay={onClickDay}
            ></Calendar>

            <Modal open={modalOpen} onClose={handleClose}>
              <div id="modalbox">
                <div className="modaldate">
                  {moment(date).format("YYYY년 MM월 DD일")}
                </div>
                <div className="modalimgbox">
                  <img onClick={readDiary} id="readimg" src={Read} alt="read" />
                  <img
                    onClick={writeDiary}
                    id="writeimg"
                    src={Write}
                    alt="write"
                  />
                </div>
                <div className="modaltextbox">
                  <span>일기 읽기</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>일기 쓰기 </span>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </MobileView>
    </>
  );
}

export default CalendarPage;

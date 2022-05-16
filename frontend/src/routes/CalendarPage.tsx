import { useNavigate } from "react-router-dom";
import base from "./Base.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { BrowserView, MobileView } from "react-device-detect";
import { useState } from "react";
import moment from "moment";
import Modal from "@mui/material/Modal";
import Read from "../assets/images/read.png";
import Write from "../assets/images/write.png";
import Stars2 from "../components/layout/Stars2";
import Navbar from "../components/layout/Navbar";

function CalendarPage() {
  const [date, setDate] = useState(new Date());
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

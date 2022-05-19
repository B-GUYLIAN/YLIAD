import styles from "./Intro.module.css";
import moon from "../assets/images/night.png";
import apk from "../assets/images/downloadapk.png";
import ipa from "../assets/images/downloadipa.png";
import moving from "../assets/images/movingad.gif";
import read from "../assets/images/read.png";
import web from "../assets/images/chrome.png";
import ucc from "../assets/videos/YLIAD2.mp4";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { BrowserView, MobileView } from "react-device-detect";
import { useNavigate } from "react-router-dom";

function Intro() {
  const [email, setEmail] = useState<string>("");

  function getEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function subscribe() {
    if (email === "") {
      toast.error("이메일 주소를 입력하세요.", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    } else if (!email.includes("@")) {
      toast.error("올바른 형식의 이메일을 입력하세요.", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    } else {
      toast.success("구독 신청이 완료되었습니다!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      setEmail("");
    }
  }

  const navigate = useNavigate();

  const goWebVersion = () => {
    navigate("/home");
  };

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 17,
    },
  }));

  return (
    <>
      <BrowserView>
        {/* 섹션 1 - 내브바 & 다운링크 & 구독 */}
        <section className={styles.section1}>
          <div className={styles.wrapper_intro}>
            <ToastContainer className={styles.toast} />
            {/* 네비게이션 바 */}
            <div className={styles.navbar}>
              <div className={styles.icon}>
                <img src={moon} alt="moon" />
                YLIAD
              </div>
              <ul className={styles.menu}>
                <li>INTRO VIDEO</li>
                <li>FEATURES</li>
              </ul>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {/* 아드를 옆에 일정 간격으로 배치하기 위한 flex 설정 */}
              <div>
                {/* 서비스 소개 - 제목 */}
                <div className={styles.header}>
                  <p>
                    AI Voice Diary App for Web, Android
                    <br />
                  </p>
                  <span>
                    인공지능 음성 다이어리 YLIAD로 하루를 아름답게 마무리하세요!
                  </span>
                </div>
                {/* 서비스 다운로드 / 구독 */}
                <div className={styles.downsubs}>
                  <LightTooltip
                    placement="top"
                    title="WEB으로 시작하기"
                    arrow
                    TransitionComponent={Zoom}
                  >
                    <img
                      src={web}
                      alt="webVersion"
                      id={styles.web_available}
                      onClick={goWebVersion}
                    />
                  </LightTooltip>
                  <a
                    href="https://bit.ly/DownloadYLIAD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={apk}
                      alt="apkLink"
                      id={styles.android_available}
                    />
                  </a>
                  <LightTooltip
                    placement="top"
                    title="iOS 버전도 곧 출시될 예정이에요!"
                    arrow
                    TransitionComponent={Zoom}
                  >
                    <img src={ipa} alt="ipaDisabled" id={styles.ios_NA} />
                  </LightTooltip>
                  <div className={styles.subscribe}>
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={getEmail}
                    />
                    <button onClick={subscribe}>Subscribe</button>
                    <p style={{ fontSize: "20px" }}>
                      구독하시면 YLIAD의 최신 업데이트 내용, 이벤트 소식을
                      누구보다 빨리 받아보실 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <img src={moving} alt="movingad" />
            </div>
          </div>
        </section>

        {/* 섹션 2 - UCC */}
        <section className={styles.section2}>
          <div className={styles.wrapper_video}>
            <p>Welcome to YLIAD</p>
            <video
              src={ucc}
              itemType="video/mp4"
              preload="none"
              controls
              loop
            ></video>
          </div>
        </section>

        {/* 섹션 3 - 서비스 기능 */}
        <section className={styles.section3}>
          <div className={styles.wrapper_body}>
            <div className={styles.feature1}>
              <img src={read} alt="YLIAD1" />
              <div className={styles.feature_text}>
                <p>YLIAD는 인공지능입니다.</p>
                <span>
                  인공지능 챗봇을 통해 힘든 마음을 치유할 수 있고,
                  <br />
                  감정분석도 해줍니다.
                </span>
              </div>
            </div>
            <div className={styles.feature2}>
              <img src={read} alt="YLIAD2" />
              <div className={styles.feature_text}>
                <p>YLIAD는 감정쓰레기통입니다.</p>
                <span>
                  감정쓰레기통에서는
                  <br />
                  잊고 싶은 오늘의 기억을 버려두고 가세요.
                </span>
              </div>
            </div>
            <div className={styles.feature3}>
              <img src={read} alt="YLIAD3" />
              <div className={styles.feature_text}>
                <p>
                  아드는 당신보다
                  <br />
                  당신을 더 잘 알아요.
                </p>
                <span>
                  인공지능 아드는
                  <br />
                  당신의 일기를 분석해 감정을 알려줍니다.
                </span>
              </div>
            </div>
            <div className={styles.feature4}>
              <img src={read} alt="YLIAD4" />
              <div className={styles.feature_text}>
                <p>YLIAD는 감정쓰레기통입니다.</p>
                <span>
                  감정쓰레기통에서는
                  <br />
                  잊고 싶은 오늘의 기억을 버려두고 가세요.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 섹션 4 - 푸터 */}
        <section className={styles.section4}>
          <div className={styles.wrapper_footer}>
            <p>Copyright © 2022 YLIAD. All Rights Reserved.</p>
          </div>
        </section>
      </BrowserView>

      <MobileView>
        {/* 섹션 1 - 내브바 & 다운링크 & 구독 */}
        <section className={styles.section1M}>
          <ToastContainer className={styles.toastM} />
          {/* 네비게이션 바 */}
          <div className={styles.navbarM}>
            <div className={styles.iconM}>
              <img src={moon} alt="moon" />
              YLIAD
            </div>
            <ul className={styles.menuM}>
              <li>INTRO</li>
              <li>FEATURES</li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* 아드를 옆에 일정 간격으로 배치하기 위한 flex 설정 */}
            <div>
              {/* 서비스 소개 - 제목 */}
              <div className={styles.headerM}>
                <p>
                  AI Voice Diary App
                  <br />
                  for Web, Android
                  <br />
                </p>
                <span>
                  인공지능 음성 다이어리 YLIAD로
                  <br />
                  하루를 아름답게 마무리하세요!
                </span>
              </div>
              {/* 서비스 다운로드 / 구독 */}
              <div className={styles.downsubsM}>
                <div className={styles.mobileWeb}>
                  <a
                    href="https://bit.ly/DownloadYLIAD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={apk}
                      alt="apkLink"
                      id={styles.android_availableM}
                    />
                  </a>

                  <img
                    src={web}
                    alt="webVersion"
                    id={styles.web_availableM}
                    onClick={goWebVersion}
                  />
                </div>

                <div className={styles.subscribeM}>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={getEmail}
                  />
                  <button onClick={subscribe}>Subscribe</button>
                  <p style={{ fontSize: "22px" }}>
                    구독하시면 YLIAD의 최신 업데이트 내용,
                    <br /> 이벤트 소식을 누구보다 빨리 받아보실 수<br />{" "}
                    있습니다.
                  </p>
                </div>
              </div>
            </div>
            <img src={moving} alt="movingad" id={styles.movingAd} />
          </div>
        </section>

        {/* 섹션 2 - UCC */}
        <section className={styles.section2M}>
          <div className={styles.wrapper_videoM}>
            <p>Welcome to YLIAD</p>
            <video
              src={ucc}
              itemType="video/mp4"
              preload="none"
              controls
              loop
            ></video>
          </div>
        </section>

        {/* 섹션 3 - 서비스 기능 */}
        <section className={styles.section3M}>
          <div className={styles.feature1M}>
            <img src={read} alt="YLIAD1" />
            <div className={styles.feature_textM}>
              <p>
                YLIAD는
                <br />
                인공지능입니다.
              </p>
              <span>
                인공지능 챗봇을 통해 힘든 마음을 치유하고,
                <br />
                감정분석도 받아보세요.
              </span>
            </div>
          </div>
          <div className={styles.feature2M}>
            <img src={read} alt="YLIAD2" />
            <div className={styles.feature_textM}>
              <p>
                YLIAD는
                <br />
                감정쓰레기통입니다.
              </p>
              <span>
                감정쓰레기통에서는
                <br />
                잊고 싶은 오늘의 기억을 버려두고 가세요.
              </span>
            </div>
          </div>
          <div className={styles.feature3M}>
            <img src={read} alt="YLIAD3" />
            <div className={styles.feature_textM}>
              <p>
                아드는 당신보다
                <br />
                당신을 더 잘 알아요.
              </p>
              <span>
                인공지능 아드는
                <br />
                당신의 일기를 분석해 감정을 알려줍니다.
              </span>
            </div>
          </div>
          <div className={styles.feature4M}>
            <img src={read} alt="YLIAD4" />
            <div className={styles.feature_textM}>
              <p>
                YLIAD는
                <br />
                앵무새입니다.
              </p>
              <span>
                당신이 하는 말을 듣고
                <br />
                대신 일기를 적어줄 거예요.
              </span>
            </div>
          </div>
        </section>

        {/* 섹션 4 - 푸터 */}
        <section className={styles.section4M}>
          <div className={styles.wrapper_footerM}>
            <p>
              Copyright © 2022 YLIAD.
              <br />
              All Rights Reserved.
            </p>
          </div>
        </section>
      </MobileView>
    </>
  );
}

export default Intro;

import { Link } from "react-router-dom";
import base from "./Base.module.css";
import styles from "./Setting.module.css";
import { BrowserView, MobileView } from "react-device-detect";
import Stars2 from "../components/layout/Stars2";
import Navbar from "../components/layout/Navbar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AudioProps {
  setChangeBGM: (BGM: string) => void; // Function;
  setbgmOn: (On: boolean) => void; // Function;
}

function BGM(props: AudioProps) {
  const token: any = sessionStorage.getItem("token");
  const userid = sessionStorage.getItem("userid");

  function changeBGM1() {
    props.setbgmOn(false);
    props.setChangeBGM("MyStar");
    axios
      .patch(
        `https://k6a308.p.ssafy.io/user-service/api/users/bgm/${userid}`,
        {
          bgmName: "MyStar",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
            Accept: "*/*",
          },
        }
      )
      .then(() => {
        toast.success("BGM 변경완료", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        console.log("error", error.response);
      });
  }
  function changeBGM2() {
    props.setbgmOn(false);
    props.setChangeBGM("Summer");
    axios
      .patch(
        `https://k6a308.p.ssafy.io/user-service/api/users/bgm/${userid}`,
        {
          bgmName: "Summer",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
            Accept: "*/*",
          },
        }
      )
      .then(() => {
        toast.success("BGM 변경완료", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        console.log("error", error.response);
      });
  }
  function changeBGM3() {
    props.setbgmOn(false);
    props.setChangeBGM("Paesaggio");
    axios
      .patch(
        `https://k6a308.p.ssafy.io/user-service/api/users/bgm/${userid}`,
        {
          bgmName: "Paesaggio",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
            Accept: "*/*",
          },
        }
      )
      .then(() => {
        toast.success("BGM 변경완료", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        console.log("error", error.response);
      });
  }

  return (
    <>
      <Navbar />
      <Stars2 />
      <ToastContainer />
      <BrowserView>
        <div className={base.container}>
          <div className={styles.P_container2}>
            <h1 id={styles.title_P}>BGM</h1>

            <button id={styles.btn2_P} onClick={changeBGM1}>
              {" "}
              MyStar{" "}
            </button>
            <button id={styles.btn2_P} onClick={changeBGM2}>
              {" "}
              Summer Night's Dream{" "}
            </button>
            <button id={styles.btn2_P} onClick={changeBGM3}>
              {" "}
              Paesaggio Italiano{" "}
            </button>
            <Link to="/setting">
              <button id={styles.btn1_P}> 돌아가기 </button>
            </Link>
          </div>
        </div>
      </BrowserView>

      <MobileView>
        <div className={styles.M_container2}>
          <h1 id={styles.title_M}>BGM</h1>

          <button id={styles.btn2_M} onClick={changeBGM1}>
            {" "}
            MyStar{" "}
          </button>
          <button id={styles.btn2_M} onClick={changeBGM2}>
            {" "}
            Summer Night's Dream{" "}
          </button>
          <button id={styles.btn2_M} onClick={changeBGM3}>
            {" "}
            Paesaggio Italiano{" "}
          </button>
          <Link to="/setting">
            <button id={styles.btn1_M}> 돌아가기 </button>
          </Link>
        </div>
      </MobileView>
    </>
  );
}

export default BGM;

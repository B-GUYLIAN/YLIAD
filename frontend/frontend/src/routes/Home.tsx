import { Link } from "react-router-dom";
import base from "./Base.module.css";
import styles from "./Home.module.css";
// import ard from "../assets/images/ardCape.png"
import ard from "../assets/images/adCape_move_left2.gif";
import { BrowserView, MobileView } from "react-device-detect";
import Campfire from "../components/Campfire";
import Stars2 from "../components/layout/Stars2";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cute from "../assets/images/cute.png";
import Heart from "../assets/images/heart.png";

function Home() {
  const [userID, setuserID] = useState("");
  const [userIDCheck, setuserIDCheck] = useState(false);
  const [userPassword, setuserPassword] = useState("");
  const [userPassword2, setuserPassword2] = useState("");
  const [userNickname, setuserNickname] = useState("");
  const [loginID, setLoginID] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalOpen2, setModalOpen2] = useState<boolean>(false);
  const navigate = useNavigate();

  function onClickSignin() {
    setModalOpen(true);
  }

  function handleClose() {
    setModalOpen(false);
    setuserID("");
    setuserPassword("");
    setuserPassword2("");
    setuserNickname("");
    setuserIDCheck(false);
  }

  function onClickLogin() {
    setModalOpen2(true);
  }

  function handleClose2() {
    setModalOpen2(false);
    setLoginID("");
    setLoginPassword("");
  }

  function onSubmitSignin(e: any) {
    e.preventDefault();

    if (
      userID === "" ||
      userPassword === "" ||
      userNickname === "" ||
      userPassword2 === ""
    ) {
      toast.error("입력하지 않은 값이 있습니다.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (userIDCheck === false) {
      toast.error("ID 중복확인을 해주세요.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (userPassword !== userPassword2) {
      toast.error("비밀번호가 일치하지 않습니다.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (userIDCheck && userPassword === userPassword2) {
      axios
        .post(
          //   "http://k6a308.p.ssafy.io/user-service/api/users",
          "https://k6a308.p.ssafy.io/user-service/api/users",
          {
            loginId: userID,
            nickname: userNickname,
            password: userPassword,
          }
        )
        .then(() => {
          toast.success("회원가입 완료!!", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          handleClose();
        })
        .catch((error) => {
          console.log("error", error.response);
        });
    }
  }

  function onSubmitLogin(e: any) {
    e.preventDefault();
    if (loginID === "" || loginPassword === "") {
      toast.error("입력하지 않은 값이 있습니다.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      axios
        .post(
          //   "http://k6a308.p.ssafy.io/user-service/api/auth",
          "https://k6a308.p.ssafy.io/user-service/api/auth",
          {
            loginId: loginID,
            password: loginPassword,
          }
        )
        .then((res) => {
          console.log(res);
          sessionStorage.setItem("userid", res.data.id);
          sessionStorage.setItem("token", res.data.jwtToken);
          sessionStorage.setItem("Font", res.data.font);
          sessionStorage.setItem("nickname", res.data.nickname);
          sessionStorage.setItem("theme", res.data.theme);

          toast.success("로그인", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("로그인 성공!");
          navigate("/lobby");
        })
        .catch((error) => {
          console.log("error", error.response);
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    }
  }

  const changeInputID = (e: any) => {
    setuserID(e.target.value);
  };

  const changeInputPassword = (e: any) => {
    setuserPassword(e.target.value);
  };
  const changeInputPassword2 = (e: any) => {
    setuserPassword2(e.target.value);
  };

  const changeInputNickname = (e: any) => {
    setuserNickname(e.target.value);
  };

  function idcheck() {
    if (userID === "") {
      toast.error("아이디를 입력해주세요.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      axios
        .get(
          `https://k6a308.p.ssafy.io/user-service/api/users/loginId/${userID}`
        )
        .then((res) => {
          console.log(res);
          if (res.statusText === "OK") {
            toast.success("사용가능한 아이디입니다.", {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setuserIDCheck(true);
          }
        })
        .catch((error) => {
          console.log("error", error.response);
          toast.error("사용할 수 없는 아이디입니다.", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    }
  }
  function loginInputID(e: any) {
    setLoginID(e.target.value);
  }

  function loginInputPassword(e: any) {
    setLoginPassword(e.target.value);
  }

  return (
    <>
      <Stars2 />
      <ToastContainer />
      <div className={base.container}>
        <BrowserView>
          <div className={styles.P_container}>
            <div>
              <span className={styles.title_P}>Y</span>
              <span className={styles.title_P}>L</span>
              <span className={styles.title_P}>I</span>
              <span className={styles.title_P}>A</span>
              <span className={styles.title_P}>D</span>
            </div>

            <span className={styles.subtitle_P}>나의 하루, 나의 이야기</span>
            <div id={styles.centerimage}>
              <Campfire></Campfire>
              <img id={styles.prince_P} src={ard} alt="man" />
            </div>
            <button onClick={onClickLogin} id={styles.btn1_P}>
              로그인
            </button>
            <button onClick={onClickSignin} id={styles.btn1_P}>
              회원가입
            </button>

            {/* 회원가입 */}
            <Modal open={modalOpen} onClose={handleClose}>
              <div id={styles.modalbox}>
                <img id={styles.cute} src={Cute} alt="cute" />
                <img id={styles.cute2} src={Cute} alt="cute" />
                <form onSubmit={onSubmitSignin}></form>
                <div id={styles.formTitle}> 회원가입 </div>
                <p id={styles.formInput}>
                  <label> 아이디 </label>
                  <input
                    id={styles.form_input}
                    type="text"
                    onChange={changeInputID}
                    name="ID"
                    placeholder="아이디"
                  />
                  <button onClick={idcheck} id={styles.btn3_P}>
                    {" "}
                    중복확인
                  </button>
                </p>
                <p id={styles.formInput}>
                  <label>비밀번호 </label>
                  <input
                    id={styles.form_input1}
                    type="password"
                    onChange={changeInputPassword}
                    name="Password"
                    placeholder="비밀번호"
                  />{" "}
                </p>
                <p id={styles.formInput}>
                  <label>번호확인 </label>
                  <input
                    id={styles.form_input8}
                    type="password"
                    onChange={changeInputPassword2}
                    name="Password"
                    placeholder="비밀번호 확인"
                  />{" "}
                </p>
                {userPassword !== "" && userPassword === userPassword2 ? (
                  <div id={styles.confirm}>비밀번호 일치</div>
                ) : userPassword === "" ? (
                  <div id={styles.confirm3}></div>
                ) : (
                  <div id={styles.confirm2}>비밀번호 불일치</div>
                )}
                <p id={styles.formInput}>
                  <label>닉네임 </label>
                  <input
                    id={styles.form_input2}
                    type="text"
                    onChange={changeInputNickname}
                    name="Nickname"
                    placeholder="닉네임"
                  />{" "}
                </p>
                <button onClick={onSubmitSignin} id={styles.btn2_P}>
                  {" "}
                  회원가입{" "}
                </button>
              </div>
            </Modal>
            {/* 로그인 */}
            <Modal open={modalOpen2} onClose={handleClose2}>
              <div id={styles.modalbox_L}>
                <img id={styles.heart_P} src={Heart} alt="heart" />
                <form onSubmit={onSubmitLogin}></form>
                <div id={styles.formTitle2}> 로그인 </div>
                <p id={styles.formInput}>
                  <label> 아이디 </label>
                  <input
                    id={styles.form_input4}
                    type="text"
                    onChange={loginInputID}
                    name="ID"
                    placeholder="아이디"
                  />
                </p>
                <p id={styles.formInput}>
                  <label>비밀번호 </label>
                  <input
                    id={styles.form_input1}
                    type="password"
                    onChange={loginInputPassword}
                    name="Password"
                    placeholder="비밀번호"
                  />{" "}
                </p>
                <button onClick={onSubmitLogin} id={styles.btn7_P}>
                  {" "}
                  로그인{" "}
                </button>
              </div>
            </Modal>
          </div>
        </BrowserView>
        <MobileView>
          <div className={styles.M_container}>
            <div>
              <span className={styles.title_M}>Y</span>
              <span className={styles.title_M}>L</span>
              <span className={styles.title_M}>I</span>
              <span className={styles.title_M}>A</span>
              <span className={styles.title_M}>D</span>
            </div>
            <span className={styles.subtitle_M}>나의 하루, 나의 이야기</span>
            <div>
              <Campfire></Campfire>
              {/* <img id={styles.prince_M} src={man} alt="man" /> */}
              <img id={styles.prince_M} src={ard} alt="man" />
            </div>
            <button onClick={onClickLogin} id={styles.btn1_M}>
              로그인
            </button>
            <button onClick={onClickSignin} id={styles.btn1_M}>
              회원가입
            </button>
          </div>

          {/* 회원가입 */}
          <Modal open={modalOpen} onClose={handleClose}>
            <div id={styles.modalbox_M}>
              <img id={styles.cute_M} src={Cute} alt="cute" />
              <img id={styles.cute2_M} src={Cute} alt="cute" />
              <form onSubmit={onSubmitSignin}></form>
              <div id={styles.formTitle_M}> 회원가입 </div>
              <p id={styles.formInput_M}>
                <label> 아이디 </label>
                <input
                  id={styles.form_input_M}
                  type="text"
                  onChange={changeInputID}
                  name="ID"
                  placeholder="아이디"
                />
                <button onClick={idcheck} id={styles.btn3_M}>
                  {" "}
                  중복확인
                </button>
              </p>
              <p id={styles.formInput_M}>
                <label>비밀번호 </label>
                <input
                  id={styles.form_input1_M}
                  type="password"
                  onChange={changeInputPassword}
                  name="Password"
                  placeholder="비밀번호"
                />{" "}
              </p>
              <p id={styles.formInput_M}>
                <label>번호확인 </label>
                <input
                  id={styles.form_input8_M}
                  type="password"
                  onChange={changeInputPassword2}
                  name="Password"
                  placeholder="비밀번호 확인"
                />{" "}
              </p>
              {userPassword !== "" && userPassword === userPassword2 ? (
                <div id={styles.confirm_M}>비밀번호 일치</div>
              ) : userPassword === "" ? (
                <div id={styles.confirm3_M}></div>
              ) : (
                <div id={styles.confirm2_M}>비밀번호 불일치</div>
              )}
              <p id={styles.formInput_M}>
                <label>닉네임 </label>
                <input
                  id={styles.form_input2_M}
                  type="text"
                  onChange={changeInputNickname}
                  name="Nickname"
                  placeholder="닉네임"
                />{" "}
              </p>
              <button onClick={onSubmitSignin} id={styles.btn2_M}>
                {" "}
                회원가입{" "}
              </button>
            </div>
          </Modal>

          {/* 로그인 */}
          <Modal open={modalOpen2} onClose={handleClose2}>
            <div id={styles.modalbox_LM}>
              <img id={styles.heart} src={Heart} alt="heart" />
              <form onSubmit={onSubmitLogin}></form>
              <div id={styles.formTitle_M}> 로그인 </div>
              <p id={styles.formInput_M2}>
                <label> 아이디 </label>
                <input
                  id={styles.form_input4_M}
                  type="text"
                  onChange={loginInputID}
                  name="ID"
                  placeholder="아이디"
                />
              </p>
              <p id={styles.formInput_M2}>
                <label>비밀번호 </label>
                <input
                  id={styles.form_input1_M2}
                  type="password"
                  onChange={loginInputPassword}
                  name="Password"
                  placeholder="비밀번호"
                />{" "}
              </p>
              <button onClick={onSubmitLogin} id={styles.btn7_M}>
                {" "}
                로그인{" "}
              </button>
            </div>
          </Modal>
        </MobileView>
      </div>
    </>
  );
}

export default Home;

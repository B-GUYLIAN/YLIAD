import { Link } from "react-router-dom";
import base from "./Base.module.css"
import styles from "./Home.module.css"
import man from "../assets/images/man.png"
import { BrowserView, MobileView } from 'react-device-detect';
import Campfire from "../components/Campfire";
import Stars2 from "../components/layout/Stars2"
import Modal from "@mui/material/Modal";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Cute from "../assets/images/cute.png"




function Home(){

    const [userID, setuserID] = useState('')
    const [userIDCheck, setuserIDCheck] = useState(false)
    const [userPassword, setuserPassword] = useState('')
    const [userPassword2, setuserPassword2] = useState('')
    const [userNickname, setuserNickname] = useState('')
    const [loginID, setLoginID] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [modalOpen2, setModalOpen2] = useState<boolean>(false);
    const navigate = useNavigate();


    function onClickSignin(){
        setModalOpen(true);
    }

    function handleClose(){
        setModalOpen(false);
        setuserID('')
        setuserPassword('')
        setuserPassword2('')
        setuserNickname('')
    }


    function onClickLogin(){
        setModalOpen2(true);
    }

    function handleClose2(){
        setModalOpen2(false);
    }

    function onSubmitSignin(e: any){
        e.preventDefault()

        console.log(userID)
        console.log(userPassword)
        console.log(userNickname)
        // axios
        // .post(
        //   "https://j6a304.p.ssafy.io/api/members",
        //   {
        //     loginID: {userID},
        //     nickname: {userNickname},
        //     Password: {userPassword}
        //   }
        // )
        // .then((res) => {
        //   handleClose()
        //   alert('회원가입완료')
        // })
        // .catch((error) => {
        //   console.log("error", error.response);
        // });


        toast.success('회원가입 완료!!', {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
        handleClose();

    }

    function onSubmitLogin(e: any){
        e.preventDefault()
        console.log(loginID)
        console.log(loginPassword)
        navigate('/lobby')
    }

    const changeInputID=(e: any)=>{
        setuserID(e.target.value)
    }

    const changeInputPassword=(e: any)=>{
        setuserPassword(e.target.value)
    }
    const changeInputPassword2=(e: any)=>{
        setuserPassword2(e.target.value)
    }

    const changeInputNickname=(e: any)=>{
        setuserNickname(e.target.value)
    }

    function idcheck(){
        // if (nickname === "") {
        //     alert('닉네임을 입력하세요.')
        //   } else {
        //     axios
        //       .get(
        //         `https://j6a304.p.ssafy.io/api/members/nickname/${nickname}`,
        //         {
        //           n: nickname,
        //         }
        //       )
        //       .then((res) => {
        //         usenick();
        //         setChecknick(true);
        //       })
        //       .catch((error) => {
        //         if (error.code === 409) {
        //           samenick();
        //         }
        //         setNickname("");
        //       });
        //   }
        // };
    }

    function loginInputID(e: any){
        setLoginID(e.target.value)
    }

    function loginInputPassword(e: any){
        setLoginPassword(e.target.value)
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

                    <span className={styles.subtitle_P}>  
                        나의 하루, 나의 이야기
                    </span>
                    <div>
                        <Campfire ></Campfire>
                        <img id={styles.prince_P} src={man} alt="man" />
                    </div>
                    <button onClick={onClickLogin} id={styles.btn1_P}>로그인</button>
                    <button onClick={onClickSignin} id={styles.btn1_P}>회원가입</button>
                    
                {/* 회원가입 */}
                    <Modal open={modalOpen} onClose={handleClose}>
                        <div id={styles.modalbox}> 
                            <img id={styles.cute} src={Cute} alt="cute" />
                            <img id={styles.cute2} src={Cute} alt="cute" />
                            <form onSubmit={onSubmitSignin}></form>
                                <div id={styles.formTitle}> 회원가입 </div>
                                <p id={styles.formInput}><label> 아이디 </label> 
                                 <input id={styles.form_input} type="text" onChange={changeInputID} name="ID"  placeholder="아이디"/> 
                                 <button onClick={idcheck} id={styles.btn3_P}> 중복확인</button>
                                 </p>
                                <p id={styles.formInput}><label>비밀번호 </label> 
                                <input id={styles.form_input1} type="password" onChange={changeInputPassword} name="Password" placeholder="비밀번호"/> </p>
                                <p id={styles.formInput}><label>번호확인 </label> 
                                <input id={styles.form_input1} type="password" onChange={changeInputPassword2} name="Password" placeholder="비밀번호 확인"/> </p>
                                { userPassword !== '' && userPassword === userPassword2 ? 
                                <div id={styles.confirm}>비밀번호 일치</div> : 
                                userPassword === ''? <div> </div> :
                                <div id={styles.confirm2}>비밀번호 불일치</div>} 
                                <p id={styles.formInput}><label>닉네임 </label> 
                                 <input id={styles.form_input2} type="text" onChange={changeInputNickname} name="Nickname"  placeholder="닉네임"/> </p>
                                <button onClick={onSubmitSignin} id={styles.btn2_P}> 회원가입 </button>
                        </div>
                    </Modal>
                 {/* 로그인 */}
                    <Modal open={modalOpen2} onClose={handleClose2}>
                        <div id={styles.modalbox_L}> 
                        <form onSubmit={onSubmitLogin}></form>
                          <div id={styles.formTitle}> 로그인 </div>
                          <p id={styles.formInput}><label> 아이디 </label> 
                                <input id={styles.form_input4} type="text" onChange={loginInputID} name="ID"  placeholder="아이디"/> 
                                </p>
                                <p id={styles.formInput}><label>비밀번호 </label> 
                                <input id={styles.form_input1} type="password" onChange={loginInputPassword} name="Password" placeholder="비밀번호"/> </p>
                                <button onClick={onSubmitLogin} id={styles.btn7_P}> 로그인 </button>
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
                    <span className={styles.subtitle_M}>  
                        나의 하루, 나의 이야기
                    </span>
                    <div>
                        <Campfire ></Campfire>
                        <img id={styles.prince_M} src={man} alt="man" />
                    </div>
                    <Link to="/lobby"><button id={styles.btn1_M}> 로비로 이동 </button></Link>
                    <button id={styles.btn1_M}>로그인</button>
                    <button onClick={onClickSignin} id={styles.btn1_M}>회원가입</button>
                </div>

                {/* 회원가입 */}
                <Modal open={modalOpen} onClose={handleClose}>
                        <div id={styles.modalbox_M}> 
                             <img id={styles.cute_M} src={Cute} alt="cute" />
                            <img id={styles.cute2_M} src={Cute} alt="cute" />
                            <form onSubmit={onSubmitSignin}></form>
                                <div id={styles.formTitle_M}> 회원가입 </div>
                                <p id={styles.formInput_M}><label> 아이디 </label> 
                                 <input id={styles.form_input_M} type="text" onChange={changeInputID} name="ID"  placeholder="아이디"/> 
                                 <button onClick={idcheck} id={styles.btn3_M}> 중복확인</button>
                                 </p>
                                <p id={styles.formInput_M}><label>비밀번호 </label> 
                                <input id={styles.form_input1_M} type="password" onChange={changeInputPassword} name="Password" placeholder="비밀번호"/> </p>
                                <p id={styles.formInput_M}><label>번호확인 </label> 
                                <input id={styles.form_input1_M} type="password" onChange={changeInputPassword2} name="Password" placeholder="비밀번호 확인"/> </p>
                                { userPassword !== '' && userPassword === userPassword2 ? 
                                <div id={styles.confirm_M}>비밀번호 일치</div> : 
                                userPassword === ''? <div> </div> :
                                <div id={styles.confirm2_M}>비밀번호 불일치</div>} 
                                <p id={styles.formInput_M}><label>닉네임 </label> 
                                 <input onClick={onClickLogin} id={styles.form_input2_M} type="text" onChange={changeInputNickname} name="Nickname"  placeholder="닉네임"/> </p>
                                <button onClick={onSubmitSignin} id={styles.btn2_M}> 회원가입 </button>
                        </div>
                    </Modal>

            </MobileView>
        </div>
        </>
    );
}

export default Home;
import { Link } from "react-router-dom";
import base from "./Base.module.css"
import styles from "./Setting.module.css"
import { BrowserView, MobileView } from 'react-device-detect';
import Stars2 from "../components/layout/Stars2"
import Navbar from "../components/layout/Navbar";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function InfoChange(){

    const [userNickname, setuserNickname] = useState('')
    const [NewPassword, setNewPassword] = useState('')
    const [NewPassword2, setNewPassword2] = useState('')

    const token = sessionStorage.getItem("token");

    function onchangeNick(e: any){
        setuserNickname(e.target.value)
    }
    function onchangePassword(e: any){
        setNewPassword(e.target.value)
    }
    function onchangePassword2(e: any){
        setNewPassword2(e.target.value)
    }

    function onsubmitNick(){
        if (userNickname===''){
            toast.error('닉네임을 입력해주세요.', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
                });
        } else {
        axios
        .patch(
          `http://k6a308.p.ssafy.io:8001/user-service/api/users/nickname/update/${token}`,
          {
            "nickname": userNickname,
          })
        .then(() => {
            console.log('닉네임 변경 성공!')
            toast.success('닉네임이 변경되었습니다.', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
                });
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
                theme: "colored"
                });
          });   
        
        }
        
    }

    function onsubmitPassword(){

        if (NewPassword === ''){
            toast.error('비밀번호를 입력해주세요.', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
                });
        } else if ( NewPassword !== NewPassword2){
            toast.error('비밀번호가 일치하지 않습니다.', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
                });
        } else {
            axios
            .patch(
              `http://k6a308.p.ssafy.io:8001/user-service/api/users/password/update/${token}`,
              {
                "password": NewPassword
              })
            .then(() => {
                console.log('비밀번호 변경 성공!')
                toast.success('비밀번호가 변경되었습니다.', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                    });
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
                    theme: "colored"
                    });
              });   
        
        }
       
    }

    return (
        <>
        <Navbar />
        <Stars2 />
        <ToastContainer />
        <BrowserView>
        <div className={base.container}> 
         <div className={styles.P_container2}>
            <h1 id={styles.title_P2}>Information</h1>
            <p id={styles.info_box}> 
            <label > Nickname </label><input 
            id={styles.info_input}
            onChange={onchangeNick}
            type="text" placeholder="닉네임"/>
            <button onClick={onsubmitNick} id={styles.btn2_P2}> 변경하기 </button>
            </p>      
            <p id={styles.info_box}> 
            <label> Password </label><input 
            id={styles.info_input1}
            onChange={onchangePassword}
            type="password" placeholder="비밀번호"/>
            <button onClick={onsubmitPassword} id={styles.btn2_P2}> 변경하기 </button>
            <br/>
            <input 
            id={styles.info_input2}
            onChange={onchangePassword2}
            type="password" placeholder="비밀번호 확인"/>
             { NewPassword !== '' && NewPassword === NewPassword2 ? 
                                <div id={styles.confirm}>비밀번호 일치</div> : 
                                NewPassword === ''? <div> </div> :
                                <div id={styles.confirm2}>비밀번호 불일치</div>} 
            </p>      
  

            <Link to="/setting"><button id={styles.btn1_P2}> 돌아가기 </button></Link>
        </div>
        </div>
        </BrowserView>

        <MobileView>
        <div className={styles.M_container2}>
            <h2 id={styles.title_M2}>Information</h2>
            <div id={styles.info_box_M}> 
            <label > Nickname </label>
            <br/>
            <input 
            id={styles.info_input_M}
            onChange={onchangeNick}
            type="text" placeholder="닉네임"/>
            <button onClick={onsubmitNick} id={styles.btn2_M2}> 변경하기 </button>
            </div>      
            <div id={styles.info_box_M}> 
            <label> Password </label>
            <br/>
            <input 
            id={styles.info_input_M3}
            onChange={onchangePassword}
            type="password" placeholder="비밀번호"/>
            <button onClick={onsubmitPassword} id={styles.btn2_M3}> 변경하기 </button>
            <br/>
            <input 
            id={styles.info_input_M2}
            onChange={onchangePassword2}
            type="password" placeholder="비밀번호 확인"/>
             { NewPassword !== '' && NewPassword === NewPassword2 ? 
                                <div id={styles.confirm_M}>비밀번호 일치</div> : 
                                NewPassword === ''? <div> </div> :
                                <div id={styles.confirm2_M}>비밀번호 불일치</div>} 
            </div>      
            
            <Link to="/setting"><button id={styles.btn1_M}> 돌아가기 </button></Link>
        </div>
        </MobileView>
        
        </>
    );
}

export default InfoChange;
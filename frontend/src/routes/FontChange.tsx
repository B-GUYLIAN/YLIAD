import { Link } from "react-router-dom";
import base from "./Base.module.css"
import styles from "./Setting.module.css"
import { BrowserView, MobileView } from 'react-device-detect';
import Stars2 from "../components/layout/Stars2"
import Navbar from "../components/layout/Navbar";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function FontChange(){

    const token = sessionStorage.getItem("token");

    function changeFont1(){
        sessionStorage.setItem("Font", "Font1");
        axios
        .patch(
            "http://k6a308.p.ssafy.io:8001/user-service/api/users/font",
            {
                "fontName": "Font1"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": token,
                    "Accept" : "*/*",
                } 
            }
            )
          .then(() => {
            toast.success('Font 변경완료', {
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
          });     
    }

    function changeFont2(){
        sessionStorage.setItem("Font", "Font2");
        axios
        .patch(
            "http://k6a308.p.ssafy.io:8001/user-service/api/users/font",
            {
                "fontName": "Font2"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": token,
                    "Accept" : "*/*",
                } 
            }
            )
          .then(() => {
            toast.success('Font 변경완료', {
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
          });     
    }

    function changeFont3(){
        sessionStorage.setItem("Font", "Font3");
        axios
        .patch(
            "http://k6a308.p.ssafy.io:8001/user-service/api/users/font",
            {
                "fontName": "Font3"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": token,
                    "Accept" : "*/*",
                } 
            }
            )
          .then(() => {
            toast.success('Font 변경완료', {
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
          });     
    }

    function changeFont4(){
        sessionStorage.setItem("Font", "Font4");
        axios
        .patch(
            "http://k6a308.p.ssafy.io:8001/user-service/api/users/font",
            {
                "fontName": "Font4"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": token,
                    "Accept" : "*/*",
                } 
            }
            )
          .then(() => {
            toast.success('Font 변경완료', {
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
          });     
    }

    function changeFont5(){
        sessionStorage.setItem("Font", "Font5");
        axios
        .patch(
            "http://k6a308.p.ssafy.io:8001/user-service/api/users/font",
            {
                "fontName": "Font5"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": token,
                    "Accept" : "*/*",
                } 
            }
            )
          .then(() => {
            toast.success('Font 변경완료', {
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
          });     
    }

    function changeFont6(){
        sessionStorage.setItem("Font", "Font6");
        axios
        .patch(
            "http://k6a308.p.ssafy.io:8001/user-service/api/users/font",
            {
                "fontName": "Font6"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": token,
                    "Accept" : "*/*",
                } 
            }
            )
          .then(() => {
            toast.success('Font 변경완료', {
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
            <h1 id={styles.title_P}>Font</h1>

            <button onClick={changeFont1} id={styles.btn2_P} > <span id={styles.fontchange1}>두넌체</span> </button>
            <button onClick={changeFont2} id={styles.btn2_P} > <span id={styles.fontchange2}>강원교육모두체</span> </button>
            <button onClick={changeFont3} id={styles.btn2_P} > <span id={styles.fontchange3}>프리텐다드</span> </button>
            <button onClick={changeFont4} id={styles.btn2_P} > <span id={styles.fontchange4}>쿠키런</span> </button>
            <button onClick={changeFont5} id={styles.btn2_P} > <span id={styles.fontchange5}>미생체</span> </button>
            <button onClick={changeFont6} id={styles.btn2_P} > <span id={styles.fontchange6}>코트라 희망체</span> </button>
            
            
            <Link to="/setting"><button id={styles.btn1_P}> 돌아가기 </button></Link>
        </div>
        </div>
        </BrowserView>

        <MobileView>
        <div className={styles.M_container2}>
            <h1 id={styles.title_M}>Font</h1>

            <button onClick={changeFont1} id={styles.btn2_M} > <span id={styles.fontchange1}>두넌체</span> </button>
            <button onClick={changeFont2} id={styles.btn2_M} > <span id={styles.fontchange2}>강원교육모두체</span> </button>
            <button onClick={changeFont3} id={styles.btn2_M} > <span id={styles.fontchange3}>프리텐다드</span> </button>
            <button onClick={changeFont4} id={styles.btn2_M} > <span id={styles.fontchange4}>쿠키런</span> </button>
            <button onClick={changeFont5} id={styles.btn2_M} > <span id={styles.fontchange5}>미생체</span> </button>
            <button onClick={changeFont6} id={styles.btn2_M} > <span id={styles.fontchange6}>코트라 희망체</span> </button>
            
            <Link to="/setting"><button id={styles.btn1_M}> 돌아가기 </button></Link>
        </div>
        </MobileView>
        
        </>
    );
}

export default FontChange;
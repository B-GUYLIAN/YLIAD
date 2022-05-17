import { Link } from "react-router-dom";
import base from "./Base.module.css"
import styles from "./Theme.module.css"
import { BrowserView, MobileView } from 'react-device-detect';
import Stars2 from "../components/layout/Stars2"
import Navbar from "../components/layout/Navbar";
import Modak from "../assets/images/modak.gif"
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function Theme(){

    const token: any = sessionStorage.getItem("token");
    const userid = sessionStorage.getItem("userid");

    function changeModak(){

        sessionStorage.setItem("theme", "modak");
        axios
        .patch(
            `http://k6a308.p.ssafy.io:8001/user-service/api/users/theme/${userid}`,
            {
                "themeName": "modak"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                    "Accept" : "*/*",
                } 
            }
            )
          .then(() => {
            toast.success('테마 변경완료', {
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


        function changeBandi(){

            sessionStorage.setItem("theme", "bandi");
            axios
            .patch(
                `http://k6a308.p.ssafy.io:8001/user-service/api/users/theme/${userid}`,
                {
                    "themeName": "bandi"
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token,
                        "Accept" : "*/*",
                    } 
                }
                )
              .then(() => {
                toast.success('테마 변경완료', {
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
        
            function changeSuper(){

                sessionStorage.setItem("theme", "super");
                axios
                .patch(
                    `http://k6a308.p.ssafy.io:8001/user-service/api/users/theme/${userid}`,
                    {
                        "themeName": "super"
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": token,
                            "Accept" : "*/*",
                        } 
                    }
                    )
                  .then(() => {
                    toast.success('테마 변경완료', {
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
            <h1 id={styles.title_P}>Theme</h1>
            <div id={styles.themebox}>
                <div id={styles.themebox1}>
                    <button  onClick={changeModak} id={styles.btn2_P} > 모닥불</button>
                    <img id={styles.modak} src={Modak} alt="modak" />
                </div>
                <div id={styles.themebox2}>
                    <button  onClick={changeBandi} id={styles.btn2_P} > 반딧불</button>
                    <img id={styles.modak} src={Modak} alt="modak" />
                </div>
                <div id={styles.themebox3}>
                    <button  onClick={changeSuper} id={styles.btn2_P} > 슈퍼맨</button>
                    <img id={styles.modak} src={Modak} alt="modak" />
                </div>
            </div>
            <Link to="/setting"><button id={styles.btn1_P}> 돌아가기 </button></Link>
        </div>
        </div>
        </BrowserView>

        <MobileView>
        <div className={styles.M_container2}>
            <h1 id={styles.title_M}>Theme</h1>
            
            <Link to="/setting"><button id={styles.btn1_M}> 돌아가기 </button></Link>
        </div>
        </MobileView>
       
        </>
    );
}

export default Theme;
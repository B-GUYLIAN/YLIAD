import { Link } from "react-router-dom";
import base from "./Base.module.css"
import styles from "./Home.module.css"
import ard from "../assets/images/ardCape.png"
import { BrowserView, MobileView } from 'react-device-detect';
import Campfire from "../components/Campfire";
import Stars2 from "../components/layout/Stars2"





function Home(){


    return (
        <>
        <Stars2 />  
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
                        <img id={styles.prince_P} src={ard} alt="man" />
                    </div>
                    <Link to="/lobby"><button id={styles.btn1_P}> 로비로 이동 </button></Link>
                    <button id={styles.btn1_P}>로그인</button>
                    <button id={styles.btn1_P}>회원가입</button>
                    
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
                        {/* <img id={styles.prince_M} src={man} alt="man" /> */}
                        <img id={styles.prince_M} src={ard} alt="man" />
                    </div>
                    <Link to="/lobby"><button id={styles.btn1_M}> 로비로 이동 </button></Link>
                    <button id={styles.btn1_M}>로그인</button>
                    <button id={styles.btn1_M}>회원가입</button>
                </div>
            </MobileView>
        </div>
        </>
    );
}

export default Home;
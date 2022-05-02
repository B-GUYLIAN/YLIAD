import { Link } from "react-router-dom";
import base from "./Base.module.css"
import styles from "./Home.module.css"
import man from "../assets/images/man.png"
import fire from "../assets/images/fire.png"
import { BrowserView, MobileView } from 'react-device-detect';




function Home(){


    return (
        <div className={base.container}> 
            <BrowserView>
                <div className={styles.P_container}>
                    <span className={styles.title_P}>YLIAD</span>
                    <span className={styles.subtitle_P}>  
                        나의 하루 나의 이야기
                    </span>
                    <div>
                        <img id={styles.fire_P} src={fire} alt="fire" />
                        <img id={styles.prince_P} src={man} alt="man" />
                    </div>
                    <Link to="/lobby"><button> 로비로 이동 </button></Link>
                    <button id={styles.btn1_P}>로그인</button>
                    <button id={styles.btn1_P}>회원가입</button>
                </div>
            </BrowserView>
            <MobileView>
                <div className={styles.M_container}>
                    <span className={styles.title_M}>YLIAD</span>
                    <span className={styles.subtitle_M}>  
                        나의 하루 나의 이야기
                    </span>
                    <div>
                        <img id={styles.fire_M} src={fire} alt="fire" />
                        <img id={styles.prince_M} src={man} alt="man" />
                    </div>
                    <Link to="/lobby"><button> 로비로 이동 </button></Link>
                    <button id={styles.btn1_M}>로그인</button>
                    <button id={styles.btn1_M}>회원가입</button>
                </div>
            </MobileView>
        </div>
    );
}

export default Home;
import { Link } from "react-router-dom";
import base from "./Base.module.css"
import styles from "./Setting.module.css"
import { BrowserView, MobileView } from 'react-device-detect';
import Stars2 from "../components/layout/Stars2"
import Navbar from "../components/layout/Navbar";

function Theme(){

    return (
        <>
        <Navbar />
        <Stars2 />
        <div className={base.container}> 
        <BrowserView>
         <div className={styles.P_container2}>
            <h1 id={styles.title_P}>Theme</h1>
            
            <Link to="/setting"><button id={styles.btn1_P}> 돌아가기 </button></Link>
        </div>
        </BrowserView>

        <MobileView>
        <div className={styles.M_container2}>
            <h1 id={styles.title_M}>Theme</h1>
            
            <Link to="/setting"><button id={styles.btn1_M}> 돌아가기 </button></Link>
        </div>
        </MobileView>
        </div>
        </>
    );
}

export default Theme;
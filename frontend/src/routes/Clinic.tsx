import { Link } from "react-router-dom";
import base from "./Base.module.css"
import Stars2 from "../components/layout/Stars2"
import Navbar from "../components/layout/Navbar";
import styles from "./Clinic.module.css"
import { BrowserView, MobileView } from 'react-device-detect';


function Clinic(){

    return (
        <>
        <Navbar />
        <Stars2 />
        <div className={base.container}> 
        <BrowserView>
            <div className={styles.title_P}> 아드 심리 상담소</div>
            <div className={styles.massenger_P}> 
                <h1>클리닉 </h1>
            </div>
        
        
        
        </BrowserView>
        <MobileView>
            
        </MobileView>
        </div>
        </>
    );
}

export default Clinic;
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import base from "./Base.module.css"
import Styles from "./Voice.module.css"


function VoiceDiary(){

    //recode
    const [recoding, setRecoding] = useState<boolean>(false);
    const getRecoding = () => {
        setRecoding(!recoding);
    }



    return (
        <>
            <Navbar />
            <div className={base.container}> 
                {/* <h1>음성 일기</h1> */}

                {/* <Link to="/lobby"><button> 로비로 이동 </button></Link> */}

                <div className={Styles.time}>
                    10 : 00
                </div>
                {/* <button className={Styles.recode} > </button> */}
                {/* <button className={Styles.recode} id="recode" onClick={getRecoding} > </button> */}
                <button className={ recoding? Styles.recoding : Styles.recode} onClick={getRecoding} > </button>
                <div className={Styles.button}>
                    <img className={Styles.save} src="https://img.icons8.com/ios-filled/32/FFFFFF/installing-updates--v1.png"/>
                    <Link to="/selectdiary"><img className={Styles.back} src="https://img.icons8.com/office/30/FFFFFF/undo.png"/></Link>
                </div>
                <div className={Styles.info}> 녹음 시간은 최대 10분입니다. </div>
            </div>
        </>
    );
}

export default VoiceDiary;
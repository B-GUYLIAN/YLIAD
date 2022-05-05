import { Link } from "react-router-dom";
import base from "./Base.module.css"
import styles from "./Setting.module.css"
import { BrowserView, MobileView } from 'react-device-detect';
import Stars2 from "../components/layout/Stars2"
import Navbar from "../components/layout/Navbar";

interface AudioProps {
    setChangeBGM: (BGM: string) => void;  // Function;
    setbgmOn: (On: boolean) => void;  // Function;
  }

function BGM(props: AudioProps){
    function changeBGM1(){
        props.setbgmOn(false)
        props.setChangeBGM('MyStar')
    }
    function changeBGM2(){
        props.setbgmOn(false)
        props.setChangeBGM('Summer')
    }
    function changeBGM3(){
        props.setbgmOn(false)
        props.setChangeBGM('Paesaggio')
    }

   

    return (
        <>
        <Navbar />
        <Stars2 />
        <div className={base.container}> 
        <BrowserView>
         <div className={styles.P_container2}>
            <h1 id={styles.title_P}>BGM</h1>
            
            <button id={styles.btn2_P} onClick={changeBGM1}> MyStar </button>
            <button id={styles.btn2_P} onClick={changeBGM2}> Summer Night's Dream </button>
            <button id={styles.btn2_P} onClick={changeBGM3}> Paesaggio Italiano </button>
            <Link to="/setting"><button id={styles.btn1_P}> 돌아가기 </button></Link>
        </div>
        </BrowserView>

        <MobileView>
        <div className={styles.M_container2}>
            <h1 id={styles.title_M}>BGM</h1>
            
            <button id={styles.btn2_M} onClick={changeBGM1}> MyStar </button>
            <button id={styles.btn2_M} onClick={changeBGM2}> Summer Night's Dream </button>
            <button id={styles.btn2_M} onClick={changeBGM3}> Paesaggio Italiano </button>
            <Link to="/setting"><button id={styles.btn1_M}> 돌아가기 </button></Link>
        </div>

        </MobileView>

        </div>

        </>
    );
}

export default BGM;
import { Link } from "react-router-dom";
import base from "./Base.module.css"
import { BrowserView, MobileView } from 'react-device-detect';
import styles from "./SelectDiary.module.css"
import Voice from "../assets/images/voice.png"
import Text from "../assets/images/text.png"
import { useNavigate, useParams } from "react-router-dom";
import Stars from "../components/layout/Stars"
import Navbar from "../components/layout/Navbar";

function SelectDiary(){
    
    const params = useParams();
    const navigate = useNavigate();

    function moveVoiceDiary(){
        const date = params.date
        const color = params.color
        navigate(`/voicediary/${date}/${color}`)
    }

    function moveTextDiary(){
        const date = params.date
        const color = params.color
        navigate(`/textdiary/${date}/${color}`)
    }

    return (
        <>
        <Stars />
        <Navbar />
        <div className={base.container}> 
             <BrowserView>
                <div className={styles.P_container}>
                <div id={styles.voicebox_P}>
                    <div id={styles.voicetext_P}>Voice
                    <img onClick={moveVoiceDiary} id={styles.voice_P} src={Voice} alt="voice" /></div>
                </div>
                <div id={styles.textbox_P}>
                    <div id={styles.texttext_P}>Text
                    <img onClick={moveTextDiary} id={styles.text_P} src={Text} alt="text" /></div>
                </div>
                </div>
            </BrowserView>


            <MobileView>
            <div className={styles.M_container}>
                <div id={styles.voicebox_M}>
                    <div id={styles.voicetext_M}>Voice
                    <img onClick={moveVoiceDiary} id={styles.voice_M} src={Voice} alt="voice" /></div>
                </div>
                <div id={styles.textbox_M}>
                    <div id={styles.texttext_M}>Text
                    <img onClick={moveTextDiary} id={styles.text_M} src={Text} alt="text" /></div>
                </div>
            </div>
            </MobileView>
        </div>
        </>
    );
}

export default SelectDiary;
import { Link } from "react-router-dom";
import base from "./Base.module.css"
import { BrowserView, MobileView } from 'react-device-detect';
import styles from "./SelectDiary.module.css"
import Voice from "../assets/images/voice.png"
import Text from "../assets/images/text.png"
import { useNavigate, useParams } from "react-router-dom";

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
        <div className={base.container}> 
             <BrowserView>
                <div className={styles.P_container}>
                    <p> 일기 작성 방법 선택</p>
                    <img onClick={moveVoiceDiary} id={styles.voice} src={Voice} alt="voice" />
                    <img onClick={moveTextDiary}id={styles.text} src={Text} alt="text" />
                    <div id={styles.voicetext}>음성 녹음</div>
                    <div id={styles.texttext}>문자 작성</div>
                </div>
            </BrowserView>


            <MobileView>
            <div className={styles.M_container}>
                <p> 일기 작성 방법 선택</p>
                <img onClick={moveVoiceDiary} id={styles.voice_M} src={Voice} alt="voice" />
                <img onClick={moveTextDiary}id={styles.text_M} src={Text} alt="text" />
                <div id={styles.voicetext_M}>음성 녹음</div>
                <div id={styles.texttext_M}>문자 작성</div>         
            </div>
            </MobileView>



        </div>
    );
}

export default SelectDiary;
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import base from "./Base.module.css"
import Styles from "./Voice.module.css"
import { useNavigate, useParams } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';
import Stars2 from "../components/layout/Stars2";


function VoiceDiary(){
    const params = useParams();
    const navigate = useNavigate();
    const color = params.color

    //뒤로가기 버튼
    function moveselectDiary(){
        const date = params.date
        navigate(`/selectdiary/${date}/${color}`)
    }

    //recode
    const [recoding, setRecoding] = useState<boolean>(false);
    const getRecoding = () => {
        setRecoding(!recoding);
    }

    //replay
    const [replay, setReplay] = useState<boolean>(false);
    const getReplay = () => {
        setReplay(true);
    }
    //replay
    const getStop = () => {
        setReplay(false)
    }



    return (
        <>
            <Navbar />
            <Stars2 />
            <BrowserView >
                <div className={base.container}> 
                    {/* <h1>음성 일기</h1> */}
                    <div className={Styles.timeP}>
                        10 : 00
                    </div>
                    <div className={Styles.recodeGroupP}>
                        <button className={ recoding? Styles.recodingP : Styles.recodeP} onClick={getRecoding} > </button>
                        {replay?
                            <div className={Styles.stopP} onClick={getStop}></div>
                        :
                            <div id="replay" className={Styles.replayP} onClick={getReplay}></div>
                        }
                    </div>
                    <div className={Styles.buttonP}>
                        <img className={Styles.saveP} src="https://img.icons8.com/ios-filled/32/FFFFFF/installing-updates--v1.png" alt="SavaDiary"/>
                        <img onClick={moveselectDiary} className={Styles.backP} src="https://img.icons8.com/office/30/FFFFFF/undo.png" alt="selectDiary"/>
                    </div>
                    <div className={Styles.infoP}> 녹음 시간은 최대 10분입니다. </div>
                </div>
            </BrowserView>
            <MobileView>
                {/* <div style={{backgroundImage:"linear-gradient(#F2789F, #FEE3EC)"}}>     */}
                    <div className={base.container} > 
                        {/* <h1>음성 일기</h1> */}
                        <div className={Styles.time}>
                            10 : 00
                        </div>
                        <div className={Styles.recodeGroup}>
                            <button id="recode" className={ recoding? Styles.recoding : Styles.recode} onClick={getRecoding} > </button>
                            {replay?
                                <div className={Styles.stop} onClick={getStop}></div>
                            :
                                <div id="replay" className={Styles.replay} onClick={getReplay}></div>
                            }
                        </div>
                        <div className={Styles.button}>
                            <img className={Styles.save} src="https://img.icons8.com/ios-filled/32/FFFFFF/installing-updates--v1.png" alt="SavaDiary"/>
                            <img onClick={moveselectDiary} className={Styles.back} src="https://img.icons8.com/office/30/FFFFFF/undo.png" alt="selectDiary"/>
                        </div>
                        <div className={Styles.info}> 녹음 시간은 최대 10분입니다. </div>
                    </div>
                {/* </div> */}
            </MobileView>
        </>
    );
}

export default VoiceDiary;
// import { useState, useCallback } from "react";
import { useState} from "react";
import Navbar from "../components/layout/Navbar";
import base from "./Base.module.css"
import Styles from "./Voice.module.css"
import { useNavigate, useParams } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';
import Stars2 from "../components/layout/Stars2";
// import { render } from "react-dom";
import useRecorder from "./VoiceRecoder";
import moment from "moment";


function VoiceDiary4(){
    const params = useParams();
    const navigate = useNavigate();
    const color = params.color

    //뒤로가기 버튼
    function moveselectDiary(){
        const date = params.date
        navigate(`/selectdiary/${date}/${color}`)
    }

    //recode css 바꾸기
    // const [recoding, setRecoding] = useState<boolean>(false);
    const [recoding, setRecoding] = useState(false);
    const getRecoding = () => {
        setRecoding(!recoding);
    }

    //***녹음 관련 함수 시작
    // type audioRecording = {
    //     audioURL: string | boolean;
    //     isRecording: string | boolean;
    //     startRecording: string | boolean;
    //     stopRecording: string | boolean;
    // }

    // let [audioURL, isRecording, startRecording, stopRecording] = useRecorder<audioRecording>();
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    const audio = new Audio(audioURL);
    //녹음 내용 재생 && replay css 바꾸기1
    // const [replay, setReplay] = useState<boolean>(false);
    const [replay, setReplay] = useState(false);
    //재생
    const getReplay = () => {
        audio.play();
        setReplay(true);
    }
    //멈춤
    // const getStop = () => {
    function getStop() {
        audio.pause();
        setReplay(false);
    }

    //재생
    const start = () => {
            audio.play();
    };

    //녹음 내용 정지
    const stop = () => {
            audio.pause();
    };

    //녹음 시간 표시
    let recordlang = moment(audio.duration * 1000).format("mm:ss");

    //녹음 내용 저장


    return (
        <>
            <Navbar />
            <Stars2 />
            <BrowserView >
                <div className={base.container}> 
                    {/* <h1>음성 일기</h1> */}
                    <div className={Styles.timeP}>
                        {/* 00:00 */}
                        {
                            audioURL?
                            // `${recordlang}`
                            `${moment(audioURL.duration * 1000).format("mm:ss")}`
                            :
                            `00:00`
                        }
                    </div>
                    {/* <div className={Styles.recodeGroupP}>
                        {isRecording?
                            <button className={Styles.recodingP} onClick={stopRecording} disabled={isRecording} > </button>
                            :
                            <button className={Styles.recodeP} onClick={startRecording} disabled={!isRecording}> </button>
                        }
                        {replay?
                            <div className={Styles.stopP} onClick={getStop}></div>
                        :
                            <div id="replay" className={Styles.replayP} onClick={getReplay}></div>
                        }
                    </div> */}
                    <div className={Styles.recodeGroupP}>
                        {isRecording?
                            <button className={Styles.recodingP} onClick={stopRecording} style={{backgroundColor:`${color}`}}> </button>
                            :
                            <button className={Styles.recodeP} onClick={startRecording} style={{backgroundColor:`${color}`}}> </button>
                        }
                        {/* <div className={start.inactive? Styles.stopP: Styles.replayP} onClick={start}></div> */}
                        {/* <div className={audioURL? Styles.replayP: Styles.stopP} onClick={start}></div> */}
                        {/* {audioURL?
                            (replay?
                                <div className={Styles.stopP} onClick={stop}></div>
                                :
                                <div className={Styles.replayP} onClick={getReplay}></div>
                            )   
                            :
                            <div className={Styles.replayP}></div>
                        } */}
                        {/* <div className={replay? Styles.stopP: Styles.replayP} onClick={start}></div> */}
                    </div>
                    <div className={Styles.buttonP}>
                        <div className={Styles.audioP}>
                            <img onClick={start} className={Styles.playP} src="https://img.icons8.com/ios-glyphs/35/FFFFFF/play--v1.png" alt="play"/>
                            <img onClick={stop} className={Styles.stop2P} src="https://img.icons8.com/ios-glyphs/35/FFFFFF/stop.png" alt="stop"/>
                        </div>
                        <div className={Styles.fileP}>
                            <img className={Styles.saveP} src="https://img.icons8.com/ios-filled/32/FFFFFF/installing-updates--v1.png" alt="SavaDiary"/>
                            <img onClick={moveselectDiary} className={Styles.backP} src="https://img.icons8.com/office/30/FFFFFF/undo.png" alt="selectDiary"/>
                        </div>
                    </div>
                    {/* <div className={Styles.infoP}> 녹음 시간은 최대 10분입니다. </div> */}
                </div>
            </BrowserView>
            <MobileView>
                {/* <div style={{backgroundImage:"linear-gradient(#F2789F, #FEE3EC)"}}>     */}
                    <div className={base.container} > 
                        {/* <h1>음성 일기</h1> */}
                        <div className={Styles.time}>
                            00 : 00
                        </div>
                        <div className={Styles.recodeGroup}>
                            {/* <button id="recode" className={ recoding? Styles.recoding : Styles.recode} onClick={getRecoding} > </button>
                            {replay?
                                <div className={Styles.stop} onClick={getStop}></div>
                            :
                                <div id="replay" className={Styles.replay} onClick={getReplay}></div>
                            } */}
                            {isRecording?
                                <button className={Styles.recoding} onClick={stopRecording} style={{backgroundColor:`${color}`}}> </button>
                            :
                                <button className={Styles.recode} onClick={startRecording} style={{backgroundColor:`${color}`}}> </button>
                            }
                            {/* <div className={start.inactive? Styles.stopP: Styles.replayP} onClick={start}></div> */}
                            {/* <div className={audioURL? Styles.replayP: Styles.stopP} onClick={start}></div> */}
                            {/* {audioURL?
                                <div className={replay? Styles.stop: Styles.replay} onClick={start}></div>
                                
                                :
                                <div className={Styles.replay}></div>
                            } */}
                        </div>
                        <div className={Styles.button}>
                            <div className={Styles.audio}>
                                <img onClick={start} className={Styles.play} src="https://img.icons8.com/ios-glyphs/35/FFFFFF/play--v1.png" alt="play"/>
                                <img onClick={stop} className={Styles.stop2} src="https://img.icons8.com/ios-glyphs/35/FFFFFF/stop.png" alt="stop"/>
                            </div>
                            <div className={Styles.file}>
                                <img className={Styles.save} src="https://img.icons8.com/ios-filled/32/FFFFFF/installing-updates--v1.png" alt="SavaDiary"/>
                                <img onClick={moveselectDiary} className={Styles.back} src="https://img.icons8.com/office/30/FFFFFF/undo.png" alt="selectDiary"/>
                            </div>
                            {/* <img className={Styles.save} src="https://img.icons8.com/ios-filled/32/FFFFFF/installing-updates--v1.png" alt="SavaDiary"/> */}
                            {/* <img onClick={moveselectDiary} className={Styles.back} src="https://img.icons8.com/office/30/FFFFFF/undo.png" alt="selectDiary"/> */}
                        </div>
                        {/* <div className={Styles.info}> 녹음 시간은 최대 10분입니다. </div> */}
                    </div>
                {/* </div> */}
            </MobileView>
        </>
    );
}

export default VoiceDiary4;
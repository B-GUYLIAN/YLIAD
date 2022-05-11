// import { useState, useCallback } from "react";
import { ClassAttributes, HTMLAttributes, MediaHTMLAttributes, useState} from "react";
import Navbar from "../components/layout/Navbar";
import base from "./Base.module.css"
import Styles from "./Voice.module.css"
import { useNavigate, useParams } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';
import Stars2 from "../components/layout/Stars2";
import { useVoiceRecorder } from "use-voice-recorder";
// import {Recorder} from "react-voice-recorder";
import {ReactMediaRecorder, useReactMediaRecorder} from 'react-media-recorder';

// interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {
interface AudioHTMLAttributes<DetailedHTMLProps> extends MediaHTMLAttributes<DetailedHTMLProps> {
    src?: string | undefined,
}

type DetailedHTMLProps<E extends AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement> = ClassAttributes<HTMLAudioElement> & E;

function VoiceDiary2(){
    const params = useParams();
    const navigate = useNavigate();
    const color = params.color
    // React.MediaHTMLAttributes<HTMLAudioElement>.src?: string | undefined

    //뒤로가기 버튼
    function moveselectDiary(){
        const date = params.date
        navigate(`/selectdiary/${date}/${color}`)
    }

    //recode css 바꾸기
    const [recoding, setRecoding] = useState<boolean>(false);
    const getRecoding = () => {
        setRecoding(!recoding);
    }

    //replay css 바꾸기1
    const [replay, setReplay] = useState<boolean>(false);
    const getReplay = () => {
        setReplay(true);
    }
    //replay css 바꾸기2
    const getStop = () => {
        setReplay(false)
    }

    //녹음 관련 함수 시작
    //방법 3
    const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({audio:true});


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
                        {/* {isRecording?
                            <button className={Styles.recodingP} onClick={stop} > </button>
                            :
                            <button className={Styles.recodeP} onClick={start} > </button>
                        } */}
                        {/* <ReactMediaRecorder  */}
                            {/* audio */}
                            {/* render={({status, startRecording, stopRecording, mediaBlobUrl}) => ( */}
                                <div>
                                    <button className={Styles.recodeP} onClick={startRecording} > </button>
                                    <button className={Styles.recodingP} onClick={stopRecording} > </button>
                                    {/* src type 에러 발생 */}
                                    {/* <audio src={mediaBlobUrl} controls autoPlay loop></audio> */}
                                </div>
                            {/* )} */}
                        {/* /> */}
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

export default VoiceDiary2;
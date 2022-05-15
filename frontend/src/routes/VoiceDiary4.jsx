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
// import spring from "../assets/images/spring.png"
import spring2 from "../assets/images/spring2.png"
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import { v1, v3, v4, v5} from 'uuid';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';

function VoiceDiary4(){
    const params = useParams();
    const navigate = useNavigate();
    const color = params.color;
    let bgcolor = color;

    //뒤로가기 버튼
    function moveselectDiary(){
        const date = params.date
        navigate(`/selectdiary/${date}/${color}`)
    }

    //color 바꾸기
    if(bgcolor === 'red'){
        bgcolor = '#FB5E3B95'
    } else if(bgcolor === 'pink'){
        bgcolor = '#FFB7EB95'
    } else if(bgcolor === 'purple'){
        // bgcolor = '#DCA3FF95'
        bgcolor = '#CA77FE95'
    } else if(bgcolor === 'yellow'){
        bgcolor = '#FFE69295'
    } else if(bgcolor === 'blue'){
        bgcolor = '#6AA6FF95'
    } else if(bgcolor === 'green'){
        bgcolor = '#D3FFB095'
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
    let [resetTranscript, dailytext, transcript, audioURL, isRecording, startRecording, stopRecording] = useRecorder();
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

    //녹음 내용 s3에 저장. 
    //s3 정보
    //process.env~가 붙은 것은 환경변수. 개발자 도구를 통하여 보여지는 js 코드에서 고유 s3 정보 노출안하기 위함
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_DEFAULT_REGION,
    });

    //어떤 파일 업로드할것인지.
    const uploadParams = {
        Bucket: process.env.AWS_BUCKET,
        Body: audioURL,
        Key: `image/${v1().toString().replace("-", "")}.${
            audioURL.type.split("/")[1]
        }`,
        ContentType: audioURL.type,
        ACL: "public-read",
    };
    //전송 성공
    function send() {
        toast.success("저장 완료!", {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable:true,
        });
    };

    //전송 실패
    function fail() {
        toast.error("저장 실패!", {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable:true,
        });
    };

    //text 백엔드에 전송
    const uploadStt = () => {
        axios.post("",
                {
                    
                },
                {
                    headers: {
                    //   "Authorization":
                    },
                }
            )
            .then((res) => {
                console.log("저장 완료!")
                send();
            })
            .catch(error => {
                console.log("저장 실패!")
                fail();
            })
    }

    function confirm(){
        console.log(dailytext);
        uploadParams();
        uploadStt();
    }


    return (
        <>
            <Navbar />
            <ToastContainer />
            <Stars2 />
            <BrowserView >
                <div className={base.container}> 
                    {/* <h1>음성 일기</h1> */}
                    {/* <div className={Styles.cylinderP} style={{left:'31.34vw'}}></div> */}
                    {/* <div className={Styles.cylinderP} style={{left:'30vw'}}></div> */}
                    {/* <img src={spring} alt="spring" style={{width: '35vw', top:'15.5vh', position:'absolute', zIndex:'2'}} /> */}
                    <img src={spring2} alt="spring" style={{width: '5.5vw', top:'19.5vh', position:'absolute', zIndex:'2', left:'29.2vw'}} />
                    <div className={Styles.timeP} style={{backgroundColor:`${bgcolor}`}}>
                        <p>{transcript}</p>
                        {/* <p>{dailytext}</p> */}
                        {/* {
                            audioURL?
                            // `${recordlang}`
                            `${moment(audioURL.duration * 1000).format("mm:ss")}`
                            :
                            `00:00`
                        } */}
                    </div>
                    {/* <div className={Styles.cylinderP} style={{right:'31.34vw'}}></div> */}
                    {/* <div className={Styles.cylinderP} style={{right:'30vw'}}></div> */}
                    <div className={Styles.recodeGroupP}>
                        {isRecording?
                            // <button className={Styles.recodingP} onClick={stopRecording} style={{backgroundColor:`${color}`}}> </button>
                            <button className={Styles.recodingP} onClick={stopRecording}> </button>
                            :
                            <button className={Styles.recodeP} onClick={startRecording}> </button>
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
                            <img onClick={start} className={Styles.playP} src="https://img.icons8.com/ios-glyphs/33/FFFFFF/play--v1.png" alt="play"/>
                            <img onClick={stop} className={Styles.stop2P} src="https://img.icons8.com/ios-glyphs/35/FFFFFF/stop.png" alt="stop"/>
                            <img onClick={resetTranscript} className={Styles.resetP} src="https://img.icons8.com/ios-filled/28/FFFFFF/recurring-appointment.png" alt="reset"/>
                        </div>
                        <div className={Styles.fileP}>
                            <img onClick={confirm} className={Styles.saveP} src="https://img.icons8.com/ios-filled/32/FFFFFF/installing-updates--v1.png" alt="SavaDiary"/>
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
                        <div className={Styles.cylinder}></div>
                        <div className={Styles.time} style={{backgroundColor:`${bgcolor}`}}>
                            <p>{transcript}</p>
                        </div>
                        <div className={Styles.recodeGroup}>
                            {isRecording?
                                <button className={Styles.recoding} onClick={stopRecording} > </button>
                                :
                                <button className={Styles.recode} onClick={startRecording} > </button>
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
                                <img onClick={resetTranscript} className={Styles.reset} src="https://img.icons8.com/ios-filled/28/FFFFFF/recurring-appointment.png" alt="reset"/>
                            </div>
                            <div className={Styles.file}>
                                <img onClick={confirm} className={Styles.save} src="https://img.icons8.com/ios-filled/32/FFFFFF/installing-updates--v1.png" alt="SavaDiary"/>
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
// import { useState, useCallback } from "react";
import { useState} from "react";
import Navbar from "../components/layout/Navbar";
import base from "./Base.module.css"
import Styles from "./Voice.module.css"
import { useNavigate, useParams } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';
import Stars2 from "../components/layout/Stars2";
import { useVoiceRecorder } from "use-voice-recorder";
// import {Recorder} from "react-voice-recorder";
import {ReactMediaRecorder, useReactMediaRecorder} from 'react-media-recorder';

function VoiceDiary3(){
    const params = useParams();
    const navigate = useNavigate();
    const color = params.color

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
    //방법 2 - 통 JS
    // const [stream, setStream] = useState<MediaStream>();
    // // const [media, setMedia] = useState<MediaRecorder>();
    // const [media, setMedia] = useState< MediaRecorder | undefined>();
    // const [onRec, setOnRec] = useState<boolean>(true);
    // const [source, setSource] = useState<MediaStreamAudioSourceNode>();
    // // const [analyser, setAnalyser] = useState<ScriptProcessorNode>();
    // // const [analyser, setAnalyser] = useState<AudioWorklet>();
    // const [analyser, setAnalyser] = useState<AudioWorklet | undefined>();
    // const [audioUrl, setAudioUrl] = useState<Blob | MediaSource>();
    // const [disabled, setDisabled] = useState<boolean>(true); // 😀😀😀

    // const onRecAudio = () => {

    //     setDisabled(true) // 😀😀😀
        
    //     // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    //     // const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    //     const audioCtx = new (window.AudioContext)();
    //     // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    //     const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    //     setAnalyser(analyser);

    //     function makeSound(stream: MediaStream) {
    //     // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
    //     const source = audioCtx.createMediaStreamSource(stream);
    //     setSource(source);
    //     source.connect(analyser);
    //     analyser.connect(audioCtx.destination);
    //     }
    //     // 마이크 사용 권한 획득
    //     navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    //     const mediaRecorder = new MediaRecorder(stream);
    //     mediaRecorder.start();
    //     setStream(stream);
    //     setMedia(mediaRecorder);
    //     makeSound(stream);

    //     analyser.onaudioprocess = function (e) {
    //         // 3분(180초) 지나면 자동으로 음성 저장 및 녹음 중지
    //         if (e.playbackTime > 180) {
    //         stream.getAudioTracks().forEach(function (track) {
    //             track.stop();
    //         });
    //         mediaRecorder.stop();
    //         // 메서드가 호출 된 노드 연결 해제
    //         analyser.disconnect();
    //         audioCtx.createMediaStreamSource(stream).disconnect();

    //         mediaRecorder.ondataavailable = function (e) {
    //             setAudioUrl(e.data);
    //             setOnRec(true);
    //         };
    //         } else {
    //         setOnRec(false);
    //         }
    //     };
    //     });
    // };

    // // 사용자가 음성 녹음을 중지 했을 때
    // const offRecAudio = () => {
    // // const offRecAudio: () => void{
    // // const offRecAudio = () => {
    //     // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    //     media.ondataavailable = function (e) {
    //     setAudioUrl(e.data);
    //     setOnRec(true);
    //     };

    //     // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    //     stream.getAudioTracks().forEach(function (track) {
    //     track.stop();
    //     });

    //     // 미디어 캡처 중지
    //     media.stop();

    //     // 메서드가 호출 된 노드 연결 해제
    //     analyser.disconnect();
    //     source.disconnect();
        
    //     if (audioUrl) {
    //     URL.createObjectURL(audioUrl); // 출력된 링크에서 녹음된 오디오 확인 가능
    //     }
        
    //     // File 생성자를 사용해 파일로 변환
    //     const sound = new File([audioUrl], "soundBlob", {
    //     lastModified: new Date().getTime(),
    //     type: "audio",
    //     });
        
    //     // 😀😀😀
    //     setDisabled(false);
    //     console.log(sound); // File 정보 출력
    // };

    // // const play: () => void {
    // const play = () => { 
    //     const audio = new Audio(URL.createObjectURL(audioUrl)); // 😀😀😀
    //     audio.loop = false;
    //     audio.volume = 1;
    //     audio.play();
    // };

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

export default VoiceDiary3;
import { useEffect, useState } from "react";
//stt
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const useRecorder = () => {
  const [audioURL, setAudioURL] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);

  useEffect(() => {
    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder, console.error);
      }
      return;
    }

    // Manage recorder state.
    if (isRecording) {
      recorder.start();
    } else {
      recorder.stop();
    }

    // Obtain the audio when ready.
    const handleData = e => {
      setAudioURL(URL.createObjectURL(e.data));
    };

    recorder.addEventListener("dataavailable", handleData);
    return () => recorder.removeEventListener("dataavailable", handleData);
  }, [recorder, isRecording]);

  //stt
  //받아 적히는 글 저장하기 위한 변수
  const [dailytext, setDailyText] = useState('')

  //듣고, 들은 값을 출력
  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  //받아적히는 글 저장하는 함수
  function saveDailyText(){
    setDailyText({transcript});
  };
  
  //저정되었는지 확인
  function confirm(){
    console.log(dailytext)
  }

  //녹음시작
  const startRecording = () => {
    setIsRecording(true);
    SpeechRecognition.startListening({ continuous: true, language:'ko'});
  };

  const stopRecording = () => {
    setIsRecording(false);
    SpeechRecognition.stopListening();
    saveDailyText();
  };

  return [resetTranscript, dailytext, transcript, audioURL, isRecording, setDailyText,startRecording, stopRecording];
};

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  return new MediaRecorder(stream);
}
export default useRecorder;

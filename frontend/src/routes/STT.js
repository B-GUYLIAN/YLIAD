import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function STT(){

  const [dailytext, setDailyText] = useState('')

  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  
  function saveDailyText(){
    setDailyText({transcript})
  }

  function confirm(){
    console.log(dailytext)
  }

  
  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={()=> {
        SpeechRecognition.startListening({ continuous: true, language:'ko'})}}>Start</button>
      <button onClick={()=>{SpeechRecognition.stopListening()
      saveDailyText() }}>Stop</button>
      <button onClick={()=>{resetTranscript()
      confirm()}}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default STT;
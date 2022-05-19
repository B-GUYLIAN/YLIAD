import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Lobby from "./routes/Lobby";
import CalendarPage from "./routes/CalendarPage";
import Clinic from "./routes/Clinic";
import Trash from "./routes/Trash2";
import Setting from "./routes/Setting";
import Emotion from "./routes/Emotion";
import SelectDiary from "./routes/SelectDiary";
import TextDiary from "./routes/TextDiary";
import DayDiary from "./routes/DayDiary";
import Mypage from "./routes/Mypage";
import Theme from "./routes/Theme";
import BGM from "./routes/BGM";
import FontChange from "./routes/FontChange";
import InfoChange from "./routes/InfoChange";
import MyStar from "./assets/audio/MyStar.mp3";
import Paesaggio from "./assets/audio/Paesaggio.mp3";
import Summer from "./assets/audio/Summer.mp3";
import Music from "./assets/images/music6.png";
import Musicoff from "./assets/images/mute7.png";
import "./App.css";
import { BrowserView, MobileView } from "react-device-detect";
import VoiceDiary4 from "./routes/VoiceDiary4";
import STT from "./routes/STT";
import Sentiment from "./routes/Sentiment";
import Intro from "./routes/Intro";
import DayList from "./routes/DayList";

function App() {
  const [bgmOn, setbgmOn] = useState<boolean>(false);
  const [audio, setAudio] = useState(new Audio(MyStar));
  const [changeBGM, setChangeBGM] = useState<string>("MyStar");

  useEffect(() => {
    if (changeBGM === "MyStar") {
      setAudio(new Audio(MyStar));
      audio.pause();
    } else if (changeBGM === "Summer") {
      setAudio(new Audio(Summer));
      audio.pause();
    } else {
      setAudio(new Audio(Paesaggio));
      audio.pause();
    }
  }, [changeBGM]);

  function BackgroundMusic() {
    if (bgmOn) {
      setbgmOn(false);
      audio.pause();
    } else {
      setbgmOn(true);
      audio.volume = 0.5;
      audio.play();
      audio.loop = true;
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/lobby" element={<Lobby />}></Route>
          <Route path="/calendar" element={<CalendarPage />}></Route>
          <Route path="/clinic" element={<Clinic />}></Route>
          <Route path="/trash" element={<Trash />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/emotion/:date" element={<Emotion />}></Route>
          <Route
            path="/selectdiary/:date/:color"
            element={<SelectDiary />}
          ></Route>
          {/* <Route path="/voicediary/:date/:color" element={<VoiceDiary />}></Route> */}
          <Route
            path="/voicediary/:date/:color"
            element={<VoiceDiary4 />}
          ></Route>
          <Route path="/textdiary/:date/:color" element={<TextDiary />}></Route>
          <Route path="/daydiary/:date" element={<DayDiary />}></Route>
          <Route path="/dayList/:date" element={<DayList />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/theme" element={<Theme />}></Route>
          <Route
            path="/bgm"
            element={<BGM setChangeBGM={setChangeBGM} setbgmOn={setbgmOn} />}
          ></Route>
          <Route path="/fontchange" element={<FontChange />}></Route>
          <Route path="/infochange" element={<InfoChange />}></Route>
          <Route path="/stt" element={<STT />}></Route>
          <Route path="/sentiment" element={<Sentiment />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <ReactAudioPlayer src={MyStar} 
      autoPlay controls volume={0.2} loop={true}></ReactAudioPlayer> */}
      <BrowserView>
        {bgmOn ? (
          <img
            className="Bgm"
            src={Music}
            alt="music"
            onClick={() => {
              BackgroundMusic();
              audio.pause();
            }}
          />
        ) : (
          <img
            className="Bgm"
            src={Musicoff}
            alt="music"
            onClick={BackgroundMusic}
          />
        )}
      </BrowserView>
      <MobileView>
        {bgmOn ? (
          <img
            className="Bgm_M"
            src={Music}
            alt="music"
            onClick={() => {
              BackgroundMusic();
              audio.pause();
            }}
          />
        ) : (
          <img
            className="Bgm_M"
            src={Musicoff}
            alt="music"
            onClick={BackgroundMusic}
          />
        )}
      </MobileView>
    </div>
  );
}

export default App;

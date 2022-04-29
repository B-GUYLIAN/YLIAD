import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Lobby from "./routes/Lobby";
import Calendar from "./routes/Calendar";
import Clinic from "./routes/Clinic";
import Trash from "./routes/Trash";
import Setting from "./routes/Setting";
import Emotion from "./routes/Emotion";
import SelectDiary from "./routes/SelectDiary";
import VoiceDiary from "./routes/VoiceDiary";
import TextDiary from "./routes/TextDiary";
import DayDiary from "./routes/DayDiary";
import Mypage from "./routes/Mypage";
import Theme from "./routes/Theme";
import BGM from "./routes/BGM";
import FontChange from "./routes/FontChange";
import PasswordChange from "./routes/PasswordChange";
import Alarm from "./routes/Alarm";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lobby" element={<Lobby />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/clinic" element={<Clinic />}></Route>
          <Route path="/trash" element={<Trash />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/emotion" element={<Emotion />}></Route>
          <Route path="/selectdiary" element={<SelectDiary />}></Route>
          <Route path="/voicediary" element={<VoiceDiary />}></Route>
          <Route path="/textdiary" element={<TextDiary />}></Route>
          <Route path="/daydiary" element={<DayDiary />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/theme" element={<Theme />}></Route>
          <Route path="/bgm" element={<BGM />}></Route>
          <Route path="/fontchange" element={<FontChange />}></Route>
          <Route path="/passwordchange" element={<PasswordChange />}></Route>
          <Route path="/alarm" element={<Alarm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

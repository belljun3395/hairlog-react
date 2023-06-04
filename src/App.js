import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/signUp";
import Welcome from "./pages/welcome";
import RecordWrite from "./pages/record/write";
import RecordRead from "./pages/record/read";
import Designers from "./pages/designers";
import MyPage from "./pages/myPage";
import Health from "./pages/health";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<Register />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/record" element={<RecordWrite />} />
      <Route path="/records" element={<RecordRead />} />
      <Route path="/designers" element={<Designers />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/health" element= {<Health/>} />
    </Routes>
  );
}

export default App;

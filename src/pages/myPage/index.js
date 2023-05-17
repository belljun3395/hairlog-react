import React from "react";
import HairLogHead from "../../component/common/head/HairLogHead";
import Navbar from "../../component/common/navbar/Navbar";
import Profile from "../../component/myPage/Profile";
function MyPage() {
  return (
    <div className="myPage">
      <HairLogHead />
      <Profile />
      <Navbar />
    </div>
  );
}

export default MyPage;

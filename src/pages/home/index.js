import React from "react";
import Navbar from "../../component/common/navbar/Navbar";
import Content from "../../component/home/Content";
import HairlogHead from "../../component/common/head/HairLogHead";

function Home() {
  return (
    <>
      <HairlogHead />
      <Content />
      <Navbar />
    </>
  );
}

export default Home;

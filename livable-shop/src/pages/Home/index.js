import React from "react";
import Header from "../../components/Header";
import Swiper from "../../components/Swiper";
import HotList from "./HotList";
import './index.scss'

function Home () {
  return (
    <div className="home__wrapper">
      <Header />
      <Swiper />
      <HotList />
    </div>
  )
}

export default Home

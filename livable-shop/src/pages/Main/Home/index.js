import React from "react";
import { useSelector } from "react-redux";
import Header from "../../../components/HomeHeader";
import Swiper from "../../../components/Swiper";
import HotList from "./HotList";
import './index.scss'

function Home () {
  const city = useSelector(state => state.city)
  return (
    <div className="home__wrapper">
      <Header cityName={ city.cityName } />
      <Swiper />
      <HotList cityName={ city.cityName } />
    </div>
  )
}

export default Home

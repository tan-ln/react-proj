import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import LifeService from "../pages/LifeService";
import Shop from "../pages/Shop";
import User from "../pages/User";
import Nav from "../components/Nav";

const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/life" element={ <LifeService /> }></Route>
        <Route path="/shop" element={ <Shop /> }></Route>
        <Route path="/user" element={ <User /> }></Route>
      </Routes>
    </Router>
  )
}

export default AppRouter

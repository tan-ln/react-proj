import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Layout from "../pages/Main/Layout";
import Home from "../pages/Main/Home";
import LifeService from "../pages/Main/LifeService";
import Shop from "../pages/Main/Shop";
import User from "../pages/Main/User";
import City from "../pages/City";
import Nav from "../components/Nav";
import Search from "../pages/Search";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/city" component={ City }></Route>
        <Route path="/search" component={ Search }></Route>
        <Layout path="/">
        {/* 4 导航页面共享组件 */}
          <Nav />
          <Switch>
            <Route path="/" component={ Home }></Route>
            <Route path="/life" component={ LifeService }></Route>
            <Route path="/shop" component={ Shop }></Route>
            <Route path="/user" component={ User }></Route>
          </Switch>
        </Layout>
      </Switch>
    </Router>
  )
}

export default AppRouter

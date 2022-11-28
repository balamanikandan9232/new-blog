import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/home/Home";
import "./index.css";
import Header from "./components/header/Header";
import Account from "./pages/account/Account";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Create from "./components/create/Create";
import Footer from "./components/Footer/Footer";
import { DetailsPages } from "./pages/details/Detailspages";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id" component={DetailsPages} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/create" component={Create} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

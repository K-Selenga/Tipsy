import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Search from "./searchpage";
import Fav from "./favlistpage";
import New from "./newcocktailpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Search from "./components/DrinkSearch";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/search" component={Search} exact />
        <Route path="/favlist" component={Fav} exact />
        <Route path="/addSignature" component={New} exact />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import CocktailDetails from "./components/CocktailDetails";
import NewCocktail from "./components/NewCocktail";
import FavList from "./components/FavList";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/addSignature" component={NewCocktail} exact />
        <Route path="/drink/:id" component={CocktailDetails} exact />
        <Route path="/favlist" component={FavList} exact />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

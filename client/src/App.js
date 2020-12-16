import "./style/main.css";
import React from "react";
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner";
import Nav from "./components/NavBar";
import FavList from "./components/FavList";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Popular Drinks" fetchUrl={requests.fetchTrend} />
      <FavList />
    </div>
  );
}

export default App;

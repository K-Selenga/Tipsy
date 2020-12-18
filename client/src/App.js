import "./style/main.css";
import React from "react";
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner";
import Nav from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Popular Drinks" fetchUrl={requests.fetchTrend} />
    </div>
  );
}

export default App;

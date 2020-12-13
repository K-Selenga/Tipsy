import "./style/main.css";
import React from "react";
import Row from "./components/Row";
import requests from "./request";
function App() {
  return (
    <div className="App">
      <h1>5 de uyu</h1>
      <Row title="Popular Drinks" fetchUrl={requests.fetchTrend} />
      <Row title="Random Drinks" fetchUrl={requests.fetchRandom} />
    </div>
  );
}

export default App;

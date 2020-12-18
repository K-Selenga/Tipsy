import React from "react";
import "./style/main.css";
import Nav from "./components/NavBar";
import FavList from "./components/FavList";

function FavListPage() {
  return (
    <div className="App">
      <Nav />
      <FavList />
    </div>
  );
}

export default FavListPage;

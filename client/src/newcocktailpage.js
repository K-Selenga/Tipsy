import "./style/main.css";
import React from "react";
import requests from "./request";
import Nav from "./components/NavBar";
import CocktailDetails from "./components/CocktailDetails";
import Search from "./components/Search";
import NewCocktail from "./components/NewCocktail";

function NewCocktailPage() {
  return (
    <div className="App">
      <Nav />
      <NewCocktail />
    </div>
  );
}

export default NewCocktailPage;

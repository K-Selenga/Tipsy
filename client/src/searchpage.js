import React from "react";
import Nav from "./components/NavBar";
import Cards from "./components/Card";
import Search from "./components/Search";

function SearchPage() {
  return (
    <div className="App">
      <Nav />
      <Search />
      <Cards />
    </div>
  );
}

export default SearchPage;

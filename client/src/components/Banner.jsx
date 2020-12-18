import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";
import BannerMov from "./video/shaker.mp4";

function Banner() {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchRandom);
      //random: Math.floor(Math.random()*request.data.lenght-1)
      setCocktails(request.data.drinks[0]);
      // setCocktails(request.data.drinks);
      return request;
    }
    fetchData();
    //if you have any var which pulls data from outside you HAVE TO add it in []. exp: fetchURL
  }, []);
  console.log(cocktails);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header className="banner">
      <div className="banner__contents">
        <h2 className="banner__contents--title">{cocktails.strDrink}</h2>

        <p className="banner__contents--inst-i">
          Ingredients:
          <br />
          {cocktails.strMeasure1} {cocktails.strIngredient1} <br />
          {cocktails.strMeasure2} {cocktails.strIngredient2}
          <br />
          {cocktails.strMeasure3} {cocktails.strIngredient3}
          <br />
          {cocktails.strMeasure4} {cocktails.strIngredient4}
          <br />
          {cocktails.strMeasure5} {cocktails.strIngredient5}
          <br />
          {cocktails.strMeasure6} {cocktails.strIngredient6}
        </p>
        <p className="banner__contents--inst">
          {truncate(cocktails.strInstructions, 180)}
        </p>
      </div>
      <div className="try">
        <div className="banner__fadeBottom" />
        <video
          className="banner__video"
          autoPlay
          loop
          muted
          // style={{
          //   backgroundSize: "cover",
          //   backgroundPosition: "center center",
          // }}
        >
          <source src={BannerMov} type="video/mp4" />
        </video>
      </div>
    </header>
  );
}

export default Banner;

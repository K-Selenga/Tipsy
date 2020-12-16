import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";
// import "../style/partials/Row.css";
//rfce shortcut
//title and container are props
function Row({ title, fetchUrl, isLargeThumb }) {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setCocktails(request.data.drinks);
      return request;
    }
    fetchData();
    //if you have any var which pulls data from outside you HAVE TO add it in []. exp: fetchURL
  }, [fetchUrl]);
  console.log(cocktails);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__thumb">
        <div className="row__thumbs">
          {cocktails.map((drinkmix) => (
            //key att. makes faster

            <ul className="row__thumb--list">
              <li className="row__posters">
                <img
                  key={drinkmix.idDrink}
                  className="row__poster"
                  src={drinkmix.strDrinkThumb}
                  alt={drinkmix.strDrink}
                />
              </li>
              <li className="row__thumb--list1">{drinkmix.strDrink}</li>
              <li className="row__thumb--list-itm">
                {drinkmix.strMeasure1},{drinkmix.strIngredient1}
              </li>
              <li className="row__thumb--list-itm">
                {drinkmix.strMeasure2},{drinkmix.strIngredient2}
              </li>
              <li className="row__thumb--list-itm">
                {drinkmix.strMeasure3},{drinkmix.strIngredient3}
              </li>
              <li className="row__thumb--list-itm">
                {drinkmix.strMeasure4} {drinkmix.strIngredient4}
              </li>
              <li className="row__thumb--list-inst">
                {drinkmix.strInstructions}
              </li>
            </ul>
          ))}
        </div>
        {/* several coctail thumbs */}
      </div>

      {/* {name} */}
    </div>
  );
}

export default Row;

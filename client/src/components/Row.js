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
  // console.table(cocktails);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__thumb">
        {/* several coctail thumbs */}
        {cocktails.map((mixdrink) => (
          //key att. makes faster
          <img
            key={mixdrink.idDrink}
            className={isLargeThumb ? "row__thumb--img-l" : "row__thumb--img"}
            src={mixdrink.strDrinkThumb}
            alt={mixdrink.strDrink}
          />
        ))}
      </div>

      {/* {name} */}
    </div>
  );
}

export default Row;

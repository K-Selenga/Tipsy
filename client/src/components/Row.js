import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../request";
import "../style/main.css";
//rfce shortcut
//title and container are props
function Row({ title, fetchUrl }) {
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
  console.table(cocktails);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__thumb">
        {/* several coctail thumbs */}
        {cocktails.map((mixdrink) => (
          <img
            classNamwe="row__thumb--img"
            src={mixdrink.strDrinkThumb}
            alt={mixdrink.strDrink}
          />
          //         {/* <a src={mixdrink.strDrink}></a> */}
        ))}
      </div>

      {/* {name} */}
    </div>
  );
}

export default Row;

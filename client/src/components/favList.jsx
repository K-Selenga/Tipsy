import React, { Component } from "react";
import FavData from "./Data/favorites.json";

class FavList extends Component {
  render() {
    return (
      <div className="favlist">
        {FavData.map((drink, index) => {
          return (
            <div className="fav">
              <img
                key={drink.idDrink}
                className="fav__poster"
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
              />
              <h1 className="fav__name">{drink.strDrink}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FavList;

import Axios from "axios";
import React, { Component } from "react";
import axios from "axios";

var url = "http://localhost:5000/favlist";

class FavList extends Component {
  state = { FavData: [] };
  componentDidMount() {
    axios
      .get(`${url}`)

      .then((response) => {
        console.log(response.data);
        this.setState({ FavData: response.data });
      })
      .catch((error) => console.error("ERROR:", error));
  }
  render() {
    return (
      this.state.FavData.length > 0 &&
      this.state.FavData.map((drink, index) => {
        return (
          <div className="favlist" key={drink.idDrink}>
            <div className="fav">
              <img
                className="fav__poster"
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
              />
              <h1 className="fav__name">{drink.strDrink}</h1>
              <button className="fav_delete"></button>
            </div>
          </div>
        );
      })
    );
  }
}

export default FavList;

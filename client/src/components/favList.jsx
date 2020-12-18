// import Axios from "axios";
import React, { Component } from "react";
import axios from "axios";
import Logo from "../Assets/LogoB.png";
import { useHistory } from "react-router-dom";

var url = "http://localhost:5000/favlist";

class FavList extends Component {
  state = { FavData: [] };

  // constructor(props) {
  //   super(props);
  //   this.props.history.push("/");
  //   this.props.history.push(this.props.match.url);
  // }
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
          <div>
            <div className="back"></div>
            <div className="favlist" key={drink.idDrink}>
              <div className="fav">
                {/* <button onClick={() => history.goBack()}>Back</button> */}
                <img
                  className="fav__poster"
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                />
                <h1 className="fav__name">{drink.strDrink}</h1>
                <div className="fav__ing">
                  <p className="fav__content">
                    <br />
                    {drink.strMeasure1} {drink.strIngredient1} <br />
                    {drink.strMeasure2} {drink.strIngredient2}
                    <br />
                    {drink.strMeasure3} {drink.strIngredient3}
                    <br />
                    {drink.strMeasure4} {drink.strIngredient4}
                    <br />
                    {drink.strMeasure5} {drink.strIngredient5}
                    {drink.strMeasure6} {drink.strIngredient6}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );
  }
}

export default FavList;

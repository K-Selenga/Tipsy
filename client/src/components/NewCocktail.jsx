import React, { Component } from "react";
import BG from "../Assets/bcaesar.jpeg";
import axios from "../axios";

class NewCocktail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idDrink: null,
      strDrink: "",
      strDrinkThumb: "",
      strIngredient1: "",
      strIngredient2: "",
      strIngredient3: "",
      strIngredient4: "",
      strIngredient5: "",
      strInstructions: "",
      strMeasure1: " ",
      strMeasure2: " ",
      strMeasure3: null,
      strMeasure4: null,
      strMeasure5: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("New Cocktail has been added");
    axios
      .post("http://localhost:5000/addCocktail", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  render() {
    return (
      <div className="new">
        <img src={BG} alt="Background img" className="new__bg" />
        <br />
        <div className="new">
          <h3 className="new__form--title">Create Your Signature Cocktail</h3>
          <form onSubmit={this.handleSubmit} className="new__form">
            <label htmlFor="strDrink" className="new__form--name">
              Name
              <br />
              <input
                name="strDrink"
                placeholder="Bloody Caesar"
                type="text"
                onChange={this.handleChange}
                value={this.state.strDrink}
                className="new__form--name-i"
              />
            </label>
            <br />

            <label htmlFor="strIngredient1" className="new__form--name">
              1st Ingredient
              <br />
              <input
                name="strIngredient1"
                onChange={this.handleChange}
                value={this.state.strIngredient1}
                placeholder="Vodka"
                type="text"
                className="new__form--ing-1"
              />
              <br />
            </label>

            <label htmlFor="strIngredient2" className="new__form--name">
              2nd Ingredient
            </label>
            <br />
            <input
              name="strIngredient2"
              onChange={this.handleChange}
              value={this.state.strIngredient2}
              placeholder="Tabasco"
              type="text"
              className="new__form--ing-2"
            />
            <br />
            <label htmlFor="strIngredient3" className="new__form--name">
              3rd Ingredient
            </label>
            <br />
            <input
              name="strIngredient3"
              onChange={this.handleChange}
              value={this.state.strIngredient3}
              placeholder="Horseradish"
              type="text"
              className="new__form--ing-3"
            />
            <br />
            <label htmlFor="strIngredient4" className="new__form--name">
              4th Ingredient
            </label>
            <br />
            <input
              name="strIngredient4"
              placeholder="Clamato Juice"
              onChange={this.handleChange}
              value={this.state.strIngredient4}
              type="text"
              className="new__form--ing-4"
            />
            <br />
            <label htmlFor="strIngredient5" className="new__form--name">
              5th Ingredient
            </label>
            <br />
            <input
              name="strIngredient5"
              placeholder="Worcestershire Sauce"
              onChange={this.handleChange}
              value={this.state.strIngredient5}
              type="text"
              className="new__form--ing-5"
            />
            <br />
            <label htmlFor="strInstructions" className="new__form--name">
              Instruction
            </label>
            <br />
            <textarea
              name="strInstructions"
              placeholder="Rub the rim of the glass with the lime slice to make the salt stick to it. Rim the glass with celery salt, fill it with ice. Add 2 onz wodka, dash of horseradish, 3-4 splash Tabasco & Worcestershire sauce and fill with clamato juice. Garnish with anything savory (bacon, celery stick, pickle, parsley etc.)."
              type="text"
              onChange={this.handleChange}
              value={this.state.strInstructions}
              className="new__form--inst"
            />
            <br />
            <button>+ Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewCocktail;

////onSubmit={} className="new__form-btn" type="text">

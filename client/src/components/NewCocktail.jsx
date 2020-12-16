import React, { Component } from "react";
import BG from "../Assets/bcaesar.jpeg";
import axios from "../axios";

class NewCocktail extends Component {
  state = {
    strDrink: "",
    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strIngredient4: "",
    strIngredient5: "",
    strInstructions: "",
  };
  handleSubmit() {
    console.log("New Cocktail has been added");
  }

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
            </label>
            <br />
            <input
              name="strDrink"
              placeholder="Bloody Caesar"
              type="text"
              className="new__form--name-i"
            />
            <br />

            <label htmlFor="strIngredient1" className="new__form--name">
              1st Ingredient
            </label>
            <br />
            <input
              name="strIngredient1"
              placeholder="Vodka"
              type="text"
              className="new__form--ing-1"
            />
            <br />
            <label htmlFor="strIngredient2" className="new__form--name">
              2nd Ingredient
            </label>
            <br />
            <input
              name="strIngredient2"
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

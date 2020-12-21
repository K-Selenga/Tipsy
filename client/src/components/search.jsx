import React, { useState, useHistory } from "react";
import { RiSearchLine } from "react-icons/ri";
import { FaCocktail } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
import BGround from "../Assets/cheers.jpg";
import BLogo from "../Assets/LogoW.png";
import { Link } from "react-router-dom";
import requests from "../request";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function Search() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  //handle search
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (query.length === 0) {
      toast.error(`Value area cannot be empty`);
      console.log(query.length);
    } else {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
        )
        .then((result) => {
          // console.log(result.data.drinks);
          setCards(result.data.drinks);
          setLoading(false);
          // console.log(cards);
        })
        .catch((err) => {
          console.log(err);
          setLoading(true);
        });
    }
  };

  //Main part
  const searchBanner = () => {
    return (
      <div>
        <form action="" className="search">
          <div className="search__">
            <img
              src={BGround}
              alt="cheers! background black and white"
              className="search__bg"
            />
            <div className="search__filter"></div>
          </div>
          <div className="try1">
            <Link to="/">
              <img src={BLogo} alt="Logo Dark" className="search__logo" />
            </Link>
            {/* Search */}
            <div className="search__input">
              <RiSearchLine className="search__input--icon" />
              <input
                autoComplete="on"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="Search"
              />
              <FaCocktail className="search__input--icon-mic" />
            </div>
            <div className="search__buttons">
              <button type="submit" onClick={handleSubmit}>
                Name
              </button>
              <button>Ingredient</button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  const handleCards = () => {
    if (loading) {
      return (
        <div className="search__loading">
          <VscLoading />
        </div>
      );
    } else {
      const items = cards.map((item, i) => {
        let thumbnail = "";
        if (item) {
          thumbnail = item.strDrinkThumb;
        }

        return (
          <div className="result__cards" key={item.idDrink}>
            <ul className="result__card">
              <div>
                <img
                  key={item.idDrink}
                  className="result__thumb"
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                />
                <li className="result__name">{item.strDrink}</li>
              </div>
              <div className="result__pc">
                <li className="result__ing">
                  {item.strIngredient1} {item.strMeasure1} <br />
                  {item.strIngredient2} {item.strMeasure2} <br />
                  {item.strIngredient3} {item.strMeasure3} <br />
                  {item.strIngredient4} {item.strMeasure4} <br />
                  {item.strIngredient5} {item.strMeasure5}
                </li>
                <li className="result__inst">{item.strInstructions}</li>
              </div>
            </ul>
          </div>
        );
      });
      return (
        <div className="items">
          <div className="items__row">{items}</div>
        </div>
      );
    }
  };

  return (
    <div className="final">
      {searchBanner()}
      {handleCards()}
    </div>
  );

  //ingredient;
}

export default Search;
// console.log(cards);

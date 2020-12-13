import axios from "axios";

const baseUrlCocktail = axios.create({
  baseURL: "https://www.thecocktaildb.com/api",
});

export default baseUrlCocktail;

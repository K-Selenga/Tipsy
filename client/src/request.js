const API_KEY = "1";
//www.thecocktaildb.com/api

//organize requests
const requests = {
  fetchRandom: `/json/v1/${API_KEY}/random.php`,
  fetchTrend: `json/v1/${API_KEY}/search.php?s=margarita`,
  fetchSearchName: `json/v1/${API_KEY}/search.php?s=`,
};
export default requests;

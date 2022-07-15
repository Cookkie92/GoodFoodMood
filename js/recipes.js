const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3716894aaemshae6e469d90fcb52p1fa571jsn8c269b788f98",
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  },
};

fetch("https://edamam-recipe-search.p.rapidapi.com/search?q=chicken", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

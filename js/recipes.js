const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3716894aaemshae6e469d90fcb52p1fa571jsn8c269b788f98",
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  },
};

function searchRecipe(query) {
  const url = `https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`;
  fetch(url, options)
    .then((response) => response.json())

    .then((response) => {
      try {
        const recipes = response;
        console.log(recipes);
      } catch (error) {}
    });
}
searchRecipe();

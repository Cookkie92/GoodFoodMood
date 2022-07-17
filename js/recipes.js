const resultContainer = document.querySelector(".inner-highlights");
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

    .then((jsonData) => {
      try {
        const results = jsonData.hits.map((element) => element.recipe.label);
        renderResults(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    });
}
searchRecipe();

function renderResults(results) {
  const list = document.getElementById("resultslist");
  list.innerHTML = "";
  results.forEach((result) => {
    const element = document.createElement("li");
    element.innerText = result;
    list.appendChild(element);
    console.log(result);
  });
}
let searchTimeoutToken = 0;
window.onload = () => {
  const searchFieldElement = document.getElementById("searchField");
  searchFieldElement.onkeyup = (event) => {
    clearTimeout(searchTimeoutToken);

    if (searchFieldElement.value.trim().length === 0) {
      return;
    }

    searchTimeoutToken = setTimeout(() => {
      searchRecipe(searchFieldElement.value);
    }, 250);
  };
};

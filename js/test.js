const resultContainer = document.querySelector(".inner-highlights");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3716894aaemshae6e469d90fcb52p1fa571jsn8c269b788f98",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

function searchRecipe(query) {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&offset=0&number=20&addRecipeInformation=true&instructionsRequired=true`;

  fetch(url, options)
    .then((response) => response.json())

    .then((jsonData) => {
      try {
        const results = jsonData.results.map((element) => element.title);
        renderResults(results);
        console.log(jsonData);
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

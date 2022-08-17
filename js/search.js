const resultsList = document.getElementById("#resultslist");
const searchingForm = document.querySelector("#searchForm");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3716894aaemshae6e469d90fcb52p1fa571jsn8c269b788f98",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};
function searchRecipe() {
  let url = createUrl();
  console.log(url);
  fetch(url, options)
    .then((response) => response.json())

    .then((jsonData) => {
      try {
        let results = jsonData.results;
        renderResults(results);

        console.log(jsonData);
      } catch (error) {
        console.log(error);
      }
    });
}
// searchRecipe();

function renderResults(results) {
  const recipeResult = document.getElementById("resultslist");
  // const getRecipes = jsonData;
  // console.log(getRecipes);
  recipeResult.innerHTML = "";
  for (let i = 0; i < results.length; i++) {
    if (typeof results[i].image === "undefined") {
      continue;
    }
    console.log(i);
    recipeResult.innerHTML += `

        <div class="recipe-results">
        <a href="details.html?id=${results[i].id} ">

        <div class = "inner-result">
        <img class="image" src="${results[i].image}"  alt="thumbnail">
        <h3 class="recipe-logo">${results[i].title}</h3>
           </div>
           </a>

        </div>
        `;
  }
}

function createUrl() {
  const baseUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?number=50&addRecipeInformation=true&instructionsRequired=true&`;
  let url = baseUrl;
  let recipeInput = document.getElementsByClassName("recipe-input");
  let recipeInputArray = [...recipeInput];
  let urlHeaders = "";

  recipeInputArray.forEach((headers) => {
    // headers.name;
    if (headers.name === "query" && headers.value === null) {
      return;
    }

    if (headers.value === null || headers.value === "") {
      return;
    }

    urlHeaders = urlHeaders + headers.name + "=" + headers.value + "&";
  });

  url += urlHeaders;

  return url;
}
createUrl();

//results[0].analyzedInstructions[0].steps[0].ingredients
// event.preventDefault();
// searchingForm.addEventListener("submit", searchRecipe());

// let searchTimeoutToken = 0;
// window.onload = () => {
//   const searchFieldElement = document.getElementById("#searchForm");
//   searchFieldElement.onsubmit = (event) => {
//     clearTimeout(searchTimeoutToken);

//     if (searchFieldElement.value.trim().length === 0) {
//       return;
//     }

//     searchTimeoutToken = setTimeout(() => {
//       searchRecipe(searchFieldElement.value);
//     }, 250);
//   };
// };

//Query = main
//diet = vegetarian etc
//intolerance = gluten etc
//includeIngrediants = tomato,cheese etc
//minCarbs =
//maxCarbs =
//minprotein =
//maxProtein =
//minCalories =
//maxCalories =
//query=pasta&cuisine=italian&excludeCuisine=greek&diet=vegetarian&intolerances=gluten&equipment=pan&includeIngredients=tomato%2Ccheese&excludeIngredients=eggs&type=main%20course&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&titleMatch=Crock%20Pot&maxReadyTime=20&ignorePantry=true&sort=calories&sortDirection=asc&minCarbs=10&maxCarbs=100&minProtein=10&maxProtein=100&minCalories=50&maxCalories=800&minFat=10&maxFat=100&minAlcohol=0&maxAlcohol=100&minCaffeine=0&maxCaffeine=100&minCopper=0&maxCopper=100&minCalcium=0&maxCalcium=100&minCholine=0&maxCholine=100&minCholesterol=0&maxCholesterol=100&minFluoride=0&maxFluoride=100&minSaturatedFat=0&maxSaturatedFat=100&minVitaminA=0&maxVitaminA=100&minVitaminC=0&maxVitaminC=100&minVitaminD=0&maxVitaminD=100&minVitaminE=0&maxVitaminE=100&minVitaminK=0&maxVitaminK=100&minVitaminB1=0&maxVitaminB1=100&minVitaminB2=0&maxVitaminB2=100&minVitaminB5=0&maxVitaminB5=100&minVitaminB3=0&maxVitaminB3=100&minVitaminB6=0&maxVitaminB6=100&minVitaminB12=0&maxVitaminB12=100&minFiber=0&maxFiber=100&minFolate=0&maxFolate=100&minFolicAcid=0&maxFolicAcid=100&minIodine=0&maxIodine=100&minIron=0&maxIron=100&minMagnesium=0&maxMagnesium=100&minManganese=0&maxManganese=100&minPhosphorus=0&maxPhosphorus=100&minPotassium=0&maxPotassium=100&minSelenium=0&maxSelenium=100&minSodium=0&maxSodium=100&minSugar=0&maxSugar=100&minZinc=0&maxZinc=100&offset=0&number=10&limitLicense=false&ranking=2

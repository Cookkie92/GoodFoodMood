const detailsContainer = document.querySelector(".recipe-details");
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);
console.log("hallo");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3716894aaemshae6e469d90fcb52p1fa571jsn8c269b788f98",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

fetch(
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
    id +
    "/information?",
  options
)
  .then((response) => response.json())

  .then((data) => {
    try {
      detailsContainer.innerHTML = "";
      const recipes = data;

      let ingred = getSteps(recipes);
      const detailsTitle = document.querySelector("title");
      detailsTitle.innerHTML = `${recipes.title}`;
      detailsContainer.innerHTML += `
      <div class="recipe-details>
      <div class="inner-details">
            <h1>${recipes.title}</h1>
            ${recipes.summary}
            <img class="details-image" src="${recipes.image}" alt="very nice food"
            Diets:<p>${recipes.diets}</p>
            ${ingred}
            <p>${recipes.instructions}</p>


        </div>
      </div>
      `;

      console.log(recipes);
    } catch (error) {
      console.warn("Something Went Wrong", error);
      detailsContainer.innerHTML += `
      <h3 class="logo">Something Went Wrong!</h3>
      `;
    }
  });

function getSteps(recipes) {
  let extendedingrediants = "";
  for (let i = 0; i < recipes.extendedIngredients.length; i++) {
    extendedingrediants +=
      "<p>" + recipes.extendedIngredients[i].original + "</p>";
    console.log(i);
  }

  return extendedingrediants;
}

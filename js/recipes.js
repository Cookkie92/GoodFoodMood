let options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3716894aaemshae6e469d90fcb52p1fa571jsn8c269b788f98",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

const recipeResult = document.getElementById("recipeResult");
fetch(
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=veryHealthy%2Cdinner&number=50",
  options
)
  .then((response) => response.json())

  .then((jsonData) => {
    try {
      const getRecipes = jsonData;
      console.log(getRecipes);
      recipeResult.innerHTML = "";
      for (let i = 0; i < getRecipes.recipes.length; i++) {
        if (typeof getRecipes.recipes[i].image === "undefined") {
          continue;
        }
        console.log(i);
        recipeResult.innerHTML += `

        <div class="recipe-results">
        <a href="details.html?id=${getRecipes.recipes[i].id} ">

        <div class = "inner-result">
        <img class="image" src="${getRecipes.recipes[i].image}"  alt="thumbnail">
        <h3 class="recipe-logo">${getRecipes.recipes[i].title}</h3>
           </div>
           </a>

        </div>
        `;
      }
    } catch (error) {
      console.log(error);
    }
  });

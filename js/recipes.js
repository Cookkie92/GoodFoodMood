const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3716894aaemshae6e469d90fcb52p1fa571jsn8c269b788f98",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};
const recipeResult = document.querySelector(".recipe-result");
fetch(
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=veryHealthy%2Cdessert&number=50",
  options
)
  .then((response) => response.json())

  .then((jsonData) => {
    try {
      const getRecipes = jsonData;
      // console.log(getRecipes);
      recipeResult.innerHTML = "";
      for (let i = 0; i < getRecipes.length; i++) {
        console.log(i);
        // recipeResult.innerHTML += `
        //   <div class="recipe-result">
        //   <h3 class="title">${getRecipes.recipes[10].title}</h3>
        //   </div>
        // `;
      }
    } catch (error) {
      console.log(error);
    }
  });

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3716894aaemshae6e469d90fcb52p1fa571jsn8c269b788f98",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};
const recipeResult = document.getElementById("recipeResult")
fetch(
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=veryHealthy%2Cdessert&number=50",
  options
)
  .then((response) => response.json())

  .then((jsonData) => {
    try {
      const getRecipes = jsonData;
      console.log(getRecipes)
      recipeResult.innerHTML = "";
      getRecipes.forEach((title) => {
        
    
        recipeResult.innerHTML += `
      ${getRecipes.recipes.title}
        `
        
    
        console.log(result);
      });

      
      
    } catch (error) {
      console.log(error);
    }
  });

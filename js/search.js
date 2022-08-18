// const resultsList = document.getElementById("#resultslist");
// const searchingForm = document.querySelector("#searchForm");
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "3716894aaemshae6e469d90fcb52p1fa571jsn8c269b788f98",
//     "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//   },
// };
// function searchRecipe() {
//   let url = createUrl();
//   console.log(url);
//   fetch(url, options)
//     .then((response) => response.json())

//     .then((jsonData) => {
//       try {
//         let results = jsonData.results;
//         renderResults(results);

//         console.log(jsonData);
//       } catch (error) {
//         console.log(error);
//       }
//     });
// }
// // searchRecipe();

// function renderResults(results) {
//   const recipeResult = document.getElementById("resultslist");
//   // const getRecipes = jsonData;
//   // console.log(getRecipes);
//   recipeResult.innerHTML = "";
//   for (let i = 0; i < results.length; i++) {
//     if (typeof results[i].image === "undefined") {
//       continue;
//     }
//     console.log(i);
//     recipeResult.innerHTML += `

//         <div class="recipe-results">
//         <a href="details.html?id=${results[i].id} ">

//         <div class = "inner-result">
//         <img class="image" src="${results[i].image}"  alt="thumbnail">
//         <h3 class="recipe-logo">${results[i].title}</h3>
//            </div>
//            </a>

//         </div>
//         `;
//   }
// }

// function createUrl() {
//   const baseUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?number=50&addRecipeInformation=true&instructionsRequired=true&`;
//   let url = baseUrl;
//   let recipeInput = document.getElementsByClassName("recipe-input");
//   let recipeInputArray = [...recipeInput];
//   let urlHeaders = "";

//   recipeInputArray.forEach((headers) => {
//     // headers.name;
//     if (headers.name === "query" && headers.value === null) {
//       return;
//     }

//     if (headers.value === null || headers.value === "") {
//       return;
//     }

//     urlHeaders = urlHeaders + headers.name + "=" + headers.value + "&";
//   });

//   url += urlHeaders;

//   return url;
// }
// createUrl();

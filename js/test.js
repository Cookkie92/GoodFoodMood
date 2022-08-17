// const resultContainer = document.querySelector(".inner-highlights");
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "3716894aaemshae6e469d90fcb52p1fa571jsn8c269b788f98",
//     "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//   },
// };

// function searchRecipe(query, blepp) {
//   const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&offset=0&number=${query}&addRecipeInformation=true&instructionsRequired=true`;

//   fetch(url, options)
//     .then((response) => response.json())

//     .then((jsonData) => {
//       try {
//         //results finner bare frem title.
//         const results = jsonData.results.map((element) => element.title);
//         //legger renderresult funksjon inni denne
//         renderResults(results);
//         console.log(results);
//       } catch (error) {
//         console.log(error);
//       }
//     });
// }
// searchRecipe();

// function renderResults(results) {
//   const list = document.getElementById("resultslist");
//   // list.innerHTML = "";
//   results.forEach((result) => {
//     const element = document.createElement("li");
//     element.innerText = result;

//     list.appendChild(element);

//     //displaye bilde av recipe vesiden av navn
//     //lage recipes clickable i search
//     //Link til details.html
//     //få recipes som  kommer frem i search til å legge seg over andre ting og ikke ta hele siden vekk.
//     //fikse error om at options allerede er declared.

//     console.log(result);
//   });
// }
// let searchTimeoutToken = 0;
// window.onload = () => {
//   const searchFieldElement = document.getElementById("searchField");
//   searchFieldElement.onkeyup = (event) => {
//     clearTimeout(searchTimeoutToken);

//     if (searchFieldElement.value.trim().length === 0) {
//       return;
//     }

//     searchTimeoutToken = setTimeout(() => {
//       searchRecipe(searchFieldElement.value);
//     }, 250);
//   };
// };

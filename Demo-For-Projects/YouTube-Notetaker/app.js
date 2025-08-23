const searchMealURL = 'https://themealdb.com/api/json/v1/1/search.php?s=';

let searchInput = document.querySelector('#search-input');
let searchButton = document.querySelector('#search-button');
let noSearchText = document.querySelector('#no-search-text');

let recipeItem = document.querySelector('#recipe-item');
let recipeName = document.querySelector('#recipe-name');
let recipeImage = document.querySelector('#recipe-image');
let recipeCategory = document.querySelector('#recipe-category');
let recipeInstructions = document.querySelector('#recipe-instructions');
// My own code/expanding this code
let recipeArea = document.querySelector("#recipe-area");
let recipeTags = document.querySelector("#recipe-tags");
let recipeSource = document.querySelector("#recipe-source");
let recipeingredients = document.querySelector("#recipe-ingredients");
let recipeMeasurements = document.querySelector("#recipe-measurements");

recipeItem.style.display = 'none';

searchButton.addEventListener('click', function () {

    let searchUrl = searchMealURL + searchInput.value;
    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {

            if (data.meals !== null) {

                noSearchText.style.display = 'none';
                recipeItem.style.display = 'block';
                
                const recipe = data.meals[0];

                recipeName.innerHTML = recipe.strMeal;
                recipeImage.src = recipe.strMealThumb;

                recipeCategory.innerHTML = recipe.strCategory;
                recipeInstructions.innerHTML = recipe.strInstructions;

                // My own code/expanding this code
                recipeArea.innerHTML = recipe.strArea;
                recipeTags.innerHTML = recipe.strTags;
                recipeSource.innerHTML = recipe.strSource;

                let ingredientsList = [];
                let measurementsList = [];

                // Got help from ChatGPT on how i could implement the ingredients and measurements
                //  in my code since it was not in array in the JSON Format

                for (let i = 1; i <= 20; i++) {
                    let ingredient = recipe[`strIngredient${i}`];
                    let measure = recipe[`strMeasure${i}`];

                    if (ingredient && ingredient.trim() !== '') {
                        ingredientsList.push(ingredient.trim());
                        measurementsList.push(measure && measure.trim() !== '' ? measure.trim() : '—');
                    }
                }

                recipeingredients.innerHTML = `
                  <h3 class="text-xl font-bold mb-2 mt-0">Ingredients:</h3>
                  <ul class="list-disc list-inside space-y-1">
                    ${ingredientsList.map(item => `<li>${item}</li>`).join('')}
                  </ul>
                `;

                recipeMeasurements.innerHTML = `
                  <h3 class="text-xl font-bold mb-2 mt-0">Measurements:</h3>
                  <ul class="list-disc list-inside space-y-1">
                    ${measurementsList.map(item => `<li>${item}</li>`).join('')}
                  </ul>
                `;

                searchInput.value = '';

            }

        });

});

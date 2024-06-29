import { recipes } from './recipes.mjs';

function recipeTemplate(recipe) {
  const tagsHtml = tagsTemplate(recipe.tags);
  const ratingHtml = ratingTemplate(recipe.rating);

  return `<figure class="recipe">
    <img src="${recipe.image}" alt="image of ${recipe.name}" />
    <figcaption>
      <ul class="recipe__tags">${tagsHtml}</ul>
      <h2><a href="#">${recipe.name}</a></h2>
      <p class="recipe__ratings">${ratingHtml}</p>
      <p class="recipe__description">${recipe.description}</p>
    </figcaption>
  </figure>`;
}

function tagsTemplate(tags) {
  const tagsHtml = tags.map(tag => `<li>${tag}</li>`).join('');
  return tagsHtml;
}

function ratingTemplate(rating) {
  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHtml += '<span aria-hidden="true" class="icon-star">⭐</span>';
    } else {
      starsHtml += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }
  }
  const html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">${starsHtml}</span>`;
  return html;
}

function getRandomListEntry(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function renderRecipes(recipeList) {
  const recipesSection = document.getElementById('recipes-section');
  const recipesHtml = recipeList.map(recipe => recipeTemplate(recipe)).join('');
  recipesSection.innerHTML = recipesHtml;
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

function filter(query) {
  const filteredRecipes = recipes.filter(recipe => {
    const searchTerm = query.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  });
  return filteredRecipes;
}

function searchHandler(e) {
  e.preventDefault();
  const searchInput = document.getElementById('searchbar').value.toLowerCase();
  const filteredRecipes = filter(searchInput);
  renderRecipes(filteredRecipes);
}

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', searchHandler);
  
  init();
});

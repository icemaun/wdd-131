// main.js

import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', function () {
    const recipesSection = document.getElementById('recipes-section');

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('article');
        recipeElement.classList.add('recipe');

        // Recipe Image
        const imageElement = document.createElement('img');
        imageElement.src = recipe.image;
        imageElement.alt = recipe.name;
        recipeElement.appendChild(imageElement);

        // Recipe Title
        const titleElement = document.createElement('h2');
        titleElement.textContent = recipe.name;
        recipeElement.appendChild(titleElement);

        // Recipe Rating (Accessible)
        const ratingElement = document.createElement('span');
        ratingElement.classList.add('rating');
        ratingElement.setAttribute('role', 'img');
        ratingElement.setAttribute('aria-label', `Rating: ${recipe.rating} out of 5 stars`);

        const filledStars = Math.floor(recipe.rating);
        const emptyStars = 5 - filledStars;

        for (let i = 0; i < filledStars; i++) {
            const starElement = document.createElement('span');
            starElement.textContent = '⭐'; // Filled star
            starElement.setAttribute('aria-hidden', 'true');
            starElement.classList.add('icon-star');
            ratingElement.appendChild(starElement);
        }

        for (let i = 0; i < emptyStars; i++) {
            const starElement = document.createElement('span');
            starElement.textContent = '☆'; // Empty star
            starElement.setAttribute('aria-hidden', 'true');
            starElement.classList.add('icon-star-empty');
            ratingElement.appendChild(starElement);
        }

        recipeElement.appendChild(ratingElement);

        // Recipe Description
        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('container2');
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = recipe.description;
        descriptionElement.appendChild(descriptionParagraph);
        recipeElement.appendChild(descriptionElement);

        recipesSection.appendChild(recipeElement);
    });
});

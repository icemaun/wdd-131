const articles = [
	{
	id: 1,
	title: "Septimus Heap Book One: Magyk",
	date: "July 5, 2022",
	description:
	"If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
	imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
	imgAlt: "Book cover for Septimus Heap 1",
	ages: "10-14",
	genre: "Fantasy",
	stars: "****"
	},
	{
	id: 2,
	title: "Magnus Chase Book One: Sword of Summer",
	date: "December 12, 2021",
	description:
	"The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
	imgSrc:
	"https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
	imgAlt: "Book cover for Magnus Chase 1",
	ages: "12-16",
	genre: "Fantasy",
	stars: "⭐⭐⭐⭐"
	},
	{
	id: 3,
	title: "Belgariad Book One: Pawn of Prophecy",
	date: "Feb 12, 2022",
	description:
	"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pual',and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
	imgSrc:
	"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
	imgAlt: "Book cover for Pawn of Prophecy",
	ages: "12-16",
	genre: "Fantasy",
	stars: "⭐⭐⭐⭐⭐"
	}
];

document.addEventListener('DOMContentLoaded', function() {
    const outputElement = document.querySelector('#maincontent');
    outputElement.innerHTML = ''; 

    function renderArticles() {
        articles.forEach(article => {
            const newArticle = document.createElement('article');
            newArticle.classList.add('review'); 
            
            const articleMarkup = `
                <h2 class="review-title">${article.title}</h2>
                <p>${article.date}</p>
                <section class="book-details">
                    <img src="${article.imgSrc}" alt="${article.imgAlt}" class="book-cover">
                </section>
                <p class="review-content">${article.description}</p>
                <div class="book-meta">
        <div class="book-meta">
                    <p><strong>Published:</strong> ${article.date}</p>
                    <p><strong>Genre:</strong> ${article.genre}</p>
                    <p><strong>Ages:</strong> ${article.ages}</p>
                    <p><strong>Rating:</strong> ${article.stars}</p>
                </div>
            `;

            newArticle.innerHTML = articleMarkup;
            outputElement.appendChild(newArticle);
        });
    }

    renderArticles();
});
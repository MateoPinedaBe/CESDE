import books from './books.js';

// 1. create a function that returns an array of books based on amazon rating, 
// the function should be named "getBooksByAmazonRating", 
// the function should receive only one number parameter 
// that is the minimum amazon rating that the book should have.

function getBooksByAmazonRating(rating) {

    let ratings = rating;

    ratings = Number(ratings);

    if (isNaN(ratings)) return "Please, give a valid Rating."

    let bks = []

    let score = null;

    let amazonScore = null;

    for (let i = 0; i < books.length; i++) {

        amazonScore = books[i].ratings.find(ratings => ratings.source === "Amazon");

        if (amazonScore) {
            score = amazonScore.score;
        }

        if (score !== null && score >= ratings) {
            bks.push(books[i])
        }
    }

    return bks;
}

console.log(getBooksByAmazonRating(4.9))
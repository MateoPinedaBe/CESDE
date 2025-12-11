import books from './books.js';

// 1. create a function that returns an array of books based on amazon rating, 
// the function should be named "getBooksByAmazonRating", 
// the function should receive only one number parameter 
// that is the minimum amazon rating that the book should have.

function getBooksByAmazonRating(rating) {

    let ratings = rating;

    ratings = Number(ratings);

    if (isNaN(ratings)) return "Please, give a valid Rating."

    let bks = [];

    let count = 0;

    for (let i = 0; i < books.length; i++){
        if (books[i].ratings[i].source === "Amazon")
            count++
    }
    return count;
}

console.log(getBooksByAmazonRating(4.7))
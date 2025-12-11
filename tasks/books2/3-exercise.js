import books from './books.js';

// 1. create a function that returns an array of books based on amazon rating, 
// the function should be named "getBooksByAmazonRating", 
// the function should receive only one number parameter 
// that is the minimum amazon rating that the book should have.

function getBooksByAmazonRating(rating) {

    let ratings = rating;

    let bks = []

    for (let i = 0; i < books.length; i++){
        if (ratings <= books[i].ratings[1].score){
            bks += books[i];
        }
    }
    return bks;
}

console.log(getBooksByAmazonRating(4.7))
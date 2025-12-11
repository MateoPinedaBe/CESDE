import books from './books.js';

// 1. create a function that returns an array of books based on chapters number, 
// the function should be named "getBooksByChaptersNumber", the function should receive only one parameter 
// that is the minimum chapters that the book should have.

function getBooksByChaptersNumber(chapters) {

    chapters = Number(chapters);

    let bks = []

    for (let i = 0; i < books.length; i++) {
        if (chapters >= books[i].chapters) {
            bks.push(books[i])
        }
    }
    return bks;
}

console.log(getBooksByChaptersNumber(10))
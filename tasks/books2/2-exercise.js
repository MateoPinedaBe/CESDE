import books from './books.js';

// 2. create a function that returns an array of the books of a specific genre, 
// the function should be named "getBooksByGenre", 
// the function should receive only one parameter (the genre that the books should have)

function getBooksByGenre(genre) {

    let genres = genre;

    if (genres == undefined) return "Please, give a valid Genre."

    genres = String(genre);

    let bks = []

    for (let i = 0; i < books.length; i++) {
        if (books[i].genre.includes(genres)) {
            bks += books[i];
        }
    }
    return bks;
}

console.log(getBooksByGenre("Science Fiction"))

/* Task 7.1 — Keys and Values
Get an array of all keys 
Get an array of all 
Delete the pages property using delete.

*/

let book = {
    title: "The Hobbit", author: "Tolkien", pages: 310 };
const keys=Object.keys(book)
    console.log(keys)

const values=Object.values(book)
console.log(values)
delete book.title;
console.log(book);


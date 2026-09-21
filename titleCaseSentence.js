/**
 * 
 * Title Case a Sentence
Easy
493 solved
495 attempted
Topics
Hint
30 XP
Write a function titleCaseSentence that takes a string as input and returns a new string where the first letter of each word is capitalized, and the rest of the letters in each word are lowercase.

Words are separated by one or more spaces. Leading or trailing spaces, and multiple spaces between words, should be handled gracefully, resulting in a single space separating the title-cased words.

Examples
titleCaseSentence("hello world");
// Expected output: "Hello World"

titleCaseSentence("a short sentence");
// Expected output: "A Short Sentence" 
 */

function titleCaseSentence(str) {
  // TODO: Implement this function
  return str
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}
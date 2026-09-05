/**Write a function findLongestWord that takes a string (a sentence) and returns the longest word in it.

A word is defined as a sequence of one or more letters (a-z, A-Z) or numbers (0-9). Punctuation and spaces should not be considered part of a word.

If there are multiple words with the same maximum length, return the first one encountered in the sentence. */
function findLongestWord(sentence) {
  // TODO: Implement this function
   const words = sentence.match(/[a-zA-Z0-9]+/g);

  if (!words) {
    return "";
  }

  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}
console.log(
  findLongestWord("The quick brown fox jumped over the laaaazy dog")
);
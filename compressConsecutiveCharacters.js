/**
 * Compress Consecutive Characters
Write a function that takes a string and replaces consecutive repeating characters with the character followed by the count. If a character appears only once, do not append a number.

Examples
compressCharacters("aaabbc")
// Expected output: "a3b2c"

compressCharacters("hello")
// Expected output: "he2llo"
Example 1
Input: str = "aaabbc"

Output: "a3b2c"

Example 2
Input: str = "hello"

Output: "hel2o"

Constraints
The input string `str` will contain only lowercase English letters.
The length of `str` will be between 0 and 1000 characters.
 */

function compressCharacters(str) {
  // TODO: Implement this function
  let result=''
  let count=1
  let word=str.toLowerCase()
  for(i=0;i<word.length;i++){
if(word[i]===word[i+1]){
 count++
}else{
    if(count>1){
        result+=word[i]+count
    }else{ result+=word[i]}
count=1;
}

  }
  return result;
  
}
console.log(compressCharacters('hello'));
console.log(compressCharacters('aaabbc'));
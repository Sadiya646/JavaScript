// Given a sentence where words are separated by spaces, convert it into camelCase format. The first word of the resulting string should start with a lowercase letter, and all subsequent words should start with an uppercase letter. All other letters should be lowercase, and there should be no spaces.

function convertToCamelCase(sentence) {
  // TODO: Implement this function
  let newsentence=sentence.trim().split(/\s+/)
 return newsentence.map((word,index)=>{
    if(index===0){
      return word.toLowerCase()
    }else{

    
   let firstword= word.charAt(0).toUpperCase()
    let nextword=word.toLowerCase().slice(1,word.length)
    let fullword=firstword.concat(nextword)
    return fullword
    
 } }).join('')
  
}
console.log(convertToCamelCase("hello WORLD")) // Output: "HelloWorldThisIsATest"
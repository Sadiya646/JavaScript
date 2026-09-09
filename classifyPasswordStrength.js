/**
 * Classify Password Strength

Given a password string, classify its strength as "Weak", "Medium", or "Strong" based on the following rules:

Strong: The password has a length of 8 or more characters and contains at least one uppercase letter, one lowercase letter, one digit, and one special character (from !@#$%^&*).
Medium: The password has a length of 6 or more characters and satisfies at least two of the four character-type conditions (uppercase, lowercase, digit, special character).
Weak: Any password that does not meet the criteria for "Strong" or "Medium".
Examples
classifyPassword("Password1!")
// Expected: "Strong"

classifyPassword("pass123")
// Expected: "Medium"
Example 1
Input: password = "Password1!"

Output: "Strong"

Example 2
Input: password = "pass123"

Output: "Medium"

 */
function classifyPassword(password) {

  // TODO
  let count=0;
  
    let hasUpper=/[A-Z]/.test(password)
    
    if(hasUpper===true){
        count++
    }
    
    let hasLower=/[a-z]/.test(password)
    if(hasLower===true){
count++
    }
   let hasDigit= /[0-9]/.test(password)
   if(hasDigit===true){
    count++
   }
   let hasSpecial= /[!@#$%^&*]/.test(password)
   if(hasSpecial===true){
count++
   }
   if(password.length>=8 && count===4){
    return "Strong"
  }
  else if(password.length>=6 && count>=2){
    return "Medium"
  }else{
    return "Weak"
  }

  }
  console.log(classifyPassword("Password1!"))
console.log(classifyPassword("pass123"))
console.log(classifyPassword("abc"))
  

  

function multiply(a,b) {//parameters
    const result = a*b
    console.log(result);
    
    
}
multiply(8,9)//arguments

function square(number){
    const result=number*number
    console.log(result);
    
}
square(10)
console.log('.............');
const money=50
square(money)

console.log("----------")
function isEven(number){
    console.log(number,"Remainder",number%2);
    if(number%2===0){
        return true 
    }else{
        return false
    }
    
}
const result =isEven(5)
console.log('is even',result)



function arrayfunction(number2){
    let sum =0
   for(const num of number2){
sum= sum+num
   }
   return sum
}
console.log("Sum of array",arrayfunction([1,2,3,3]))




function getEvenNumbers(number3) {
const evens=[]
for(const nums of number3){
    if(nums%2===0){
        evens.push(nums)
    }
}
return evens

  }
console.log(getEvenNumbers([2,4,8,6,9,5,3,13,12]));

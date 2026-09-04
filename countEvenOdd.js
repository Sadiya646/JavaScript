// Given an array of integers, return an object containing the count of even and odd numbers.
function countEvenOdd(numbers) {
  // TODO: Implement this function
  let evenCount=0
  let OddCount=0;
  for(const num of numbers){
    if(num%2===0){
        evenCount++
    } else {
        OddCount++
    }
  }
  return {"even":evenCount, "odd":OddCount}
}
console.log(countEvenOdd([1, 2, 3, 4, 5, 6])); // Output: { even: 3, odd: 3 }
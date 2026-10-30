// // Given a square 2D array matrix of numbers, write a function diagonalSums that returns an object containing two properties: main (the sum of elements on the main diagonal) and secondary (the sum of elements on the secondary diagonal).

// The main diagonal runs from the top-left corner to the bottom-right corner (matrix[i][i]). The secondary diagonal runs from the top-right corner to the bottom-left corner (matrix[i][n - 1 - i]). If the matrix has odd dimensions, the center element is part of both diagonals and should be included in both sums.

// Examples
// Example 1
// diagonalSums([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]);
// // Returns: { main: 15, secondary: 15 }
// Example 2
// diagonalSums([
//   [1, 2],
//   [3, 4]
// ]);
// // Returns: { main: 5, secondary: 5 }

function diagonalSums(matrix) {
  let mainSum=0;
  let secondarySum=0;
  const n = matrix.length;

for(let i=0;i<n;i++){
   mainSum=mainSum+matrix[i][i];
   secondarySum=secondarySum+matrix[i][n-1-i];

}
return {main:mainSum,secondary:secondarySum};
}
console.log(diagonalSums([[1,2,3],[4,5,6],[7,8,9]]))
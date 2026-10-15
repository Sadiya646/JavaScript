
function mergeSortedArrays(arr1, arr2) {
  let result = [];

  // Duita array ekshathe merge korchi
  let i = 0;
  let j = 0;

  // Duita array-te element thaka porjonto compare korbo
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // arr1-e element baki thakle add korbo
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // arr2-e element baki thakle add korbo
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}



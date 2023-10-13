/** Merget sort  */

// //fill data with random value in array
// var data = Array.apply(null,{length:10000}).map(Function.call, Math.random);
// console.log(data);

// //fill data with same value
// var filledval = Array(100000).fill(9);
// // console.log(filledval);

//Merge two arrays [2,3,4] [10, 19,20, 43]
function merge(arr1, arr2) {
  //define one res array
  //itertate both the arrays with two pointer - i,j
  //check value in arr1[i]<arr2[j] - keep element el in res array inrement or vice versa
  var res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  //once hit one of the array
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res
}

// console.log(merge([2, 3, 4], [10, 19, 20, 43]));
// console.log(merge([],[3,4]));

function mergeSort(arr) {
  //return if empty or one element
  if (arr.length <=1) {
    return arr; 
  }
  let mid = Math.floor(arr.length / 2); 
  
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([7, 8, 1, 3, 10]));


/** Sliding window problem
 *
 *  -- we are creating a window of arrays or String
 * Ex - maxsumSubArray-
 *
 */

//naive solutioon
function subArray(arr = [], n) {
  //take subarray
  // itr in loop
  // get subarrar and find sum
  //update max value and return
  var max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let sumVal = sum(arr.slice(i, n - 1));
    console.log(arr);
    console.log(sumVal);
    if (sumVal > max) {
      max = sumVal;
    }
  }
  return max;
}

function sum(arr = []) {    
  console.log(arr);
  let sumVal = arr.reduce((sum, el) => {
    sum = sum + el;
    return sum;
  }, 0);
  return sumVal;
}
        
console.log(subArray([3, 2, 5, 6, 3, 2], 2));

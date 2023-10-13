/** Multi Pointer Pattern
 * -- Require two pointers or more to travers array or String
 * Ex - Sumzero - find first pair whose sum is zero from sorted array.
 *
 */

//one naive solutions -O(n2)
function sumZero(arr = []) {
  //iterate through arr nested for loop.
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// console.log(sumZero([1, -3,2, 3]));

/** By using multi pointer O(n)
 * [-3, -2 -1,, 0,1,2,5]
 *
 */

function sumv2(arr = []) {
  //loop from two pinters - one from left and one from right
  var i = 0;
  var j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    }
    if (sum > 0) {
      j--;
    } else {
      i++;
    }
  }
}
/** find unique value-sorted array
 * [1,1,3,4,6,6,7,7,7] - 5 uniq values
 *  try to solve by multi  pointer concept
 *
 */
function uniqval(arr = []) {
  //by counter pattern
  var obj = {};
  for (let el of arr) {
    obj[el] = (obj[el] || 0) + 1;
  }
  return Object.keys(obj).length; // one loop we are not sure.
}
// console.log(uniqval([1, 1, 3, 4, 6, 6, 7, 7, 7]));

function uniqVal_v2(arr = []) {
  // Multi cursor
  //start with i =0 anfd j=1
  //if elementy at i and j are not same then swap then increment i and j
  let i = 0;
  //     j = 1;
  //   while (j < arr.length) {
  //     if (arr[i] !== arr[j]) {
  //       i++;
  //       arr[i] = arr[j];
  //       j++;
  //     } else {
  //       j++;
  //     }
  //
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(uniqVal_v2([1, 1, 3, 4, 6, 6, 7, 7, 7]));

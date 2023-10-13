/** Solve all pattern problem */

//1. Same frequency- Any two digit has same frequency
function sameFreq(n1, n2) {
  //solve by pattern - frequency pattern
  //make array from number
  let arr1 = Array.from(String(n1), Number);
  let arr2 = Array.from(String(n2), Number);
  var obj1 = {};
  var obj2 = {};
  for (let el of arr1) {
    obj1[el] = (obj1[el] || 0) + 1;
  }
  for (let el of arr2) {
    obj2[el] = (obj2[el] || 0) + 1;
  }
  console.log(obj1, obj2);
  let bool = false;
  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      bool = true;
      break;
    }
  }
  return bool;
}

// console.log(sameFreq(1237, 3345));

//2.areThereDuplicates
function areThereDuplicates(...args) {
  // args =[]
  //solve by frequncy counter number of occurance
  var obj = {};
  for (let el of args) {
    obj[el] = (obj[el] || 0) + 1;
  }
  //check frequency is > 1 then return true else false
  for (let key in obj) {
    if (obj[key] >= 2) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1,2,3));

/** Fequency Counter
 * [1,3,4,2] [1,9,16,4]
 *
 * Naive Solutions is : two loops ans solve it
 * Optimize way - O(n)
 * using two objects
 * {1:2, 3:2, 9:1}  {1:2, 9:2}
 */

function same(arr1 = [], arr2 = []) {
  //find the frequency for both the array in two objects
  //check 2* key in obj1 is in key in obj2
  //check if key*2 is there in key1 or not
  //if not then return false else true
  if (arr1.length !== arr2.length) {
    return false;
  }
  var obj1 = {};
  var obj2 = {};
  for (let el of arr1) {
    obj1[el] = (obj1[el] || 0) + 1;
  }
  for (let fl of arr2) {
    obj2[fl] = (obj2[fl] || 0) + 1;
  }
  console.log(obj1, obj2);
  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj2[key ** 2] !== obj1[key]) {
      return false; // 1 !== 1 -3
                    //check frequency arr same ot not
    }
  }
  return true;
}
console.log(same([1, 2, 2, 3, 4], [1, 9, 16, 4, 4]));

/** The idea of frequency counter is keep track of numbers or String in array or not?
 * 
 */
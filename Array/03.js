/** valid anagram  or not? */

function isValidAnagram(str1 = "", str2 = "") {
  //solve by frequency counter
  //keep char fr in two diff arrays
  //check chat counter in both object are same or not?
  var obj1 = {};
  var obj2 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let ch of str1) {
    obj1[ch] = (obj1[ch] || 0) + 1;
  }
  for (let ch of str2) {
    obj2[ch] = (obj2[ch] || 0) + 1;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {    
      return false;
    }
  }
  return true;
}

console.log(isValidAnagram("abc", "cda"));

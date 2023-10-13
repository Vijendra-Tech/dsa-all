/** Capyalize new words - return in new array
 *
 */

function capt(words = []) {
  // fn(n) = firstword +capt(length-1)
  //base case - stoped when it is empty and return
  //iterate through loop
  if (words.length === 1) {
    return [words[0].toUpperCase()];
  }
  let res = capt(words.slice(0, -1));
  res.push(words.slice(words.length - 1)[0].toUpperCase());
  return res;
}

console.log(capt(["i", "am", "rana"]));

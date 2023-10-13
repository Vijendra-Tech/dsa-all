/** Sum range Problem-
 * 5 -> 1+2+3+4+5 = 15
 * Solve  by recursive
 *
 */

function sumRange(num) {
  //recursive formula
  // define base condition
  //call recursive with diff inputs and reach to the base condition
  // Recusive relation
  // T(n) = n+ T(n-1)
  //base condition
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}

/** fact
 * 5 = 5*4*3*2*1
 */
function fact(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(5));

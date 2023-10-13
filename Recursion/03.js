/** Recursive range
 * 3 ->0+1+2+3
 */

function recSum(n) {    
  //recursiv relation- f(n) = n+f(n-1)
  if (n === 0) {
    return 0;
  }
  return n + recSum(n - 1);
}

// console.log(recSum(3));
 

console.log(Boolean([null]));


//rendere as you fetch - load data and codes while rendering page

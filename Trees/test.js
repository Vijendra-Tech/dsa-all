function addN(n) {
  var total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}
function addN2(n) {
  return (n * (n + 1)) / 2;
}   

var t1 = performance.now();
console.log(addN2(100000000));
var t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} secs`);

/** Quick Sort   */

function pivot(arr, start = 0, high = arr.length + 1) {
  //return index
  //pivot as a first element
  //swap elements

  var pivot = arr[start];
  var swapIdx = start;

  //swap utility function
  //   function swap(array, i, j) {
  //     var temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }

  //new swap es6 version
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  //iterate through arr
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    var pivotidx = pivot(arr, left, right);
    quickSort(arr, left, pivotidx - 1);
    quickSort(arr, pivotidx + 1, right);
  }
  return arr;
}

// console.log(quickSort([7, 2,3,1,88,33,21]));

// var a = 10;
// var b =20;

// var obj ={
//     a,
//     b
// }

function swap(a, b) {
  let arr = [b, a];
  return arr;
}
console.log(swap(10, 20));

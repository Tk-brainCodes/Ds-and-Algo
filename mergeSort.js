const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//merge helper function (merge two sorted array)
function merge(left, right) {
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

function mergeSort2(array) {
  //base case
  if (array.length <= 1) return array;
  //half the array
  const mid = Math.floor(array.length / 2);
  //get first half recursively
  let left = mergeSort2(array.slice(0, mid));
  //get second half recursively
  let right = mergeSort2(array.slice(mid));

  return merge(left, right);
}

console.log(mergeSort2(numbers));

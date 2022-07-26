const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function quickSort(arr, startIndex = 0, endIndex = arr.length - 1) {
  //base case
  if (startIndex >= endIndex) return;

  //pivotIndex
  let pivotIndex = partition(arr, startIndex, endIndex);

  //left
  quickSort(arr, startIndex, pivotIndex - 1);
  //right
  quickSort(arr, pivotIndex + 1, endIndex);

  return arr;
}

//partition helper function (to partition the arr in 2)
function partition(arr, startIndex, endIndex) {
  const pivotValue = arr[startIndex]; //always the first element in the array
  let swapIndex = startIndex;

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (pivotValue > arr[i]) {
      swapIndex++;

      if (i !== swapIndex) {
        //swap
        [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
      }
    }
  }
  if (swapIndex !== startIndex) {
    //swap pivot into correct position
    [arr[swapIndex], arr[startIndex]] = [arr[startIndex], arr[swapIndex]];
  }
}

console.log(quickSort(numbers));

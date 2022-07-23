const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
  const length = arr.length;
  //start from the second value
  for (let i = 1; i < length; i++) {
    let currentValue = arr[i];
    let j;
    //if number to the left is > number to the right, iterate and swap
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

insertionSort(numbers);
console.log(numbers);

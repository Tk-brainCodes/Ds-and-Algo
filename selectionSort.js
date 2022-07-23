const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort1(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j + 1] < array[j]) {
        const temp = array[j + 1]; //smallest
        array[j + 1] = array[j];
        array[j] = temp;
      } else if (array[j] < array[j + 1]) {
        const temp = array[j]; //smallest item
        array[j] = temp;
      }
    }
  }
}

selectionSort1(numbers);
console.log(numbers);

function selectionSort2(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

selectionSort2(numbers);
console.log(numbers);

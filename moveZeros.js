//in place
function moveZeros1(nums) {
  let zeros = 0;
  for (let i = 0; i < nums.length; i++) {
    let iSzeros = nums[i] == 0;
    //removing zeros from the array
    if (iSzeros) {
      zeros++;
      nums.splice(i, 1); //(start,deleteCount)
      i--;
    }
  }
  for (let j = 0; j < zeros; j++) {
    nums.push(0);
  }
  return nums;
}
console.log(moveZeros1([0, 1, 0, 3, 12]));

function moveZeros2(nums) {
  let newArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      newArray.push(nums[i]);
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] == 0) {
      newArray.push(nums[j]);
    }
  }

  return newArray;
}
console.log(moveZeros2([0]));

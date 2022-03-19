function containsDuplicate1(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if(nums[i] === nums[j]){
            return true;
        }
        return false;
    }
  }
  return undefined;
}
console.log(containsDuplicate1([1, 2, 3, 1]));

// function containsDuplicate2(nums){
//     map = {}

// }
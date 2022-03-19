function containsDuplicate1(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
      return false;
    }
  }
  return undefined;
}
console.log(containsDuplicate1([1, 2, 3, 1]));

//O(n) - much faster and has a lot of space
function containsDuplicate2(nums) {
  map = {};
  for (let i = 0; i < nums.length; i++) {
      if(map[nums[i]] !== undefined){
          return true;
      }
      map[nums[i]] = i
  }
}
console.log(containsDuplicate2([1, 2, 3, 1]))

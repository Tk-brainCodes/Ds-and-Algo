function maximumSubArray1(nums) {
    let subArry = [];
    let firstItem = nums[0];
    let secondItem = nums[1];
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!secondItem || firstItem > secondItem) {
            subArry.push(firstItem);
            firstItem = nums[i];
            i++
        } else {
            subArry.push(secondItem);
            secondItem = nums[j];
            j++
        }
    }
    const sum = subArry.reduce((a, b) => a + b, 0);
    return sum;
}
console.log(maximumSubArray1([-2,1,-3,4,-1,2,1,-5,4])); 

function maxSubArray2(nums) {
    let globalMaxSum = nums[0];
    let localMaxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
          localMaxSum = Math.max(nums[i], localMaxSum + nums[i]);
          globalMaxSum = Math.max(localMaxSum, globalMaxSum);
    }
    return globalMaxSum;
  }
  console.log(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4])); 

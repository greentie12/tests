function isSorted(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([2, 2, 4, 4]));

console.log(isSorted([1, 2, 4, 3, 1, 6]));

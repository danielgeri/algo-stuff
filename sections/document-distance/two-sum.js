/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

//* 2. on each iteration subtract the current element from the target and check to see if the resultant difference is in the map
*/
//* 1. map the numbers onto an object, the value of which is the index
//* 3. if so, return the values of those properties, if not continue the loop

function twoSum(array, target) {
  const numberMap = {};

  array.forEach((number, index) => {
    if (numberMap[String(target - number)]) {
      return [numberMap[String(target - number)], index];
    }
    numberMap[number] = index;
  });

  return false;
}

describe('doc dist - first', function () {
  it('should pass', function () {
    assert.strictDeepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });
});

/**
 * 题目描述：
 * 给定一个整树数组nums和一个目标值target,请在该数组中找出
 * 和为目标值的两个整数，并返回下标
 * 
 * 解题技巧：使用hashMap可以降低时间复杂度
 * 
 * @param {number[]} nums 
 * @param {number} target
 * @return {number[]} 
 */
var twoSum = function(nums, target) {
    let hashArray = [];
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (hashArray[diff] !== undefined) {
            return [i, hashArray[diff]];
        }
        hashArray[nums[i]] = i;
    }
}

console.log(twoSum([2,7,11,15], 9));
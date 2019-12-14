/**
 * 题目描述：
 *   给定一个数组，找出其众树
 * 
 * 解题技巧：
 *    很多种
 * 
 * @param {number[]} nums
 * @return {number} 
 */
// 1. brute force
var majorityElement = function(nums) {
    const majorityCount = nums.length / 2;
    for (let i of nums) {
        let count = 0;
        for (let j of nums) {
            if (j === i) count++;
        }
        if(count > majorityCount) {
            return i;
        }
    }

    return -1;
}

// 2. Hash

// 3. Sort
var majorityElement3 = function(nums) {
    nums.sort();
    return nums[parseInt(nums.length / 2)];
}

console.log(majorityElement3([3,2,3]));
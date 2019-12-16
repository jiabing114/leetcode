/**
 * 题目描述：
 *   给定一个整数数组nums，找出乘积最大的连续子序列
 * 
 * 解题技巧：
 *   dp,需要定义好dp状态函数
 * 
 * @param {number[]} nums
 * @return {number} 
 */
var maxProduct = function(nums) {
    const len = nums.length;
    let maxArr = new Array(len);
    let minArr = new Array(len);
    maxArr[0] = nums[0];
    minArr[0] = nums[0];
    let max = maxArr[0];
    for(let i = 1; i < nums.length; i++) {
        maxArr[i] = Math.max(maxArr[i - 1] * nums[i], minArr[i - 1] * nums[i], nums[i]);
        minArr[i] = Math.min(maxArr[i - 1] * nums[i], minArr[i - 1] * nums[i], nums[i]);
        max = Math.max(max, maxArr[i]);
    } 
    return max;
}

console.log(maxProduct([2, 3, -2, 4]));

/**
 * 题目描述：
 *   给定一个无序的整数数组，找出最长上升子序列的长度。
 * 
 * 解题技巧：
 *   dp问题
 * 
 * 
 * @param {number[]} nums 
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    let max = 1;
    let dpArr = new Array(nums.length).fill(1);
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dpArr[i] = Math.max(dpArr[j] + 1, dpArr[i]);
            }
        }
        max = Math.max(max, dpArr[i]);
    }

    return max;
}

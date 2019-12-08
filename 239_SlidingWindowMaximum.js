/**
 * 题目描述：
 *   给定一个数组nums,有一个大小为k的滑动窗口,
 * 返回滑动窗口的最大值。
 * 
 * 解题技巧：
 *   双端队列
 * 
 * 
 * 普通解
 * @param {number[]} nums 
 * @param {number} k
 * @return {number[]} 
 */
var maxSlidingWindow = function(nums, k) {
    let numbers = nums.length - k + 1;
    let result = [];
    if (nums.length > 0) {
        for (let i = 0; i < numbers; i++) {
            result.push(Math.max.apply(null, nums.slice(i, i + k)));
        }
    }
    return result;
}
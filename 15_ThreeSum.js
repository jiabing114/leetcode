/**
 * 题目描述：
 *   给定一个包含n个整数的数组nums,
 * 判断是否存在三个元素a,b,c,使得
 * a+b+c=0? 找出所有情况
 * 
 * 解题技巧：
 *   双指针；为了去重，需要对数组进行排序  
 * 
 * runtime: O(n^2)
 * @param {number[]} nums
 * @return {number[][]} 
 */
var threeSum = function(nums) {
    let ans = [];
    if (nums === null || nums.length < 3) {
        return ans;
    }
    nums.sort((a, b) => a - b);  // 排序
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let L = i + 1;
        let R = nums.length - 1;
        while(L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                ans.push([nums[i], nums[L], nums[R]]);
                while(L < R && nums[L] === nums[L + 1]) L++;
                while(L < R && nums[R] === nums[R - 1]) R--;
                L++;
                R--;
            } else if (sum < 0) {
                L++;
            } else if (sum > 0) {
                R--
            }
        }
    }

    return ans;
}
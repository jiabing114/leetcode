/**
 * 题目描述：
 *   n阶楼顶，每次可爬1或2个台阶，有多少种方法？
 * 
 * 解题技巧：
 *   dp问题，其实本质就是fibnacci
 * 
 * @param {number} n
 * @return {number} 
 */
var climbStairs = function(n) {
    let ans = new Array();
    ans[0] = 1;
    ans[1] = 1;
    for (let i = 2; i <= n; i++) {
        ans[i] = ans[i - 1] + ans[i - 2];
    }
    return ans[n];
}
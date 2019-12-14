/**
 * 题目描述：
 *   给定一个非负整数num,计算0 <= i <= num范围中每个数字
 * 中二进制中1的数目。
 * 
 * 解题技巧：
 *   位运算 + 递推式
 * 
 * @param {number} num
 * @return {number[]} 
 */
var countBits = function(num) {
    let ans = new Array();
    ans[0] = 0;
    for (let i = 1; i <= num; i++) {
        ans[i] = ans[i & (i - 1)] + 1;
    }
    return ans;
}
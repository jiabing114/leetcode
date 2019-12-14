/**
 * 题目描述：
 *   编写一个函数，返回其二进制中数字为”1“的个数
 * 
 * 解题技巧：
 *   位运算
 * 
 * @param {number} n  - a positive integer
 * @return {number} 
 */
var hammingWeight = function(n) {
    let count = 0;
    while(n !== 0) {
        count++;
        n = n & (n - 1);  // 消除二进制中最后一位的1
    }
    return count;
}
/**
 * 题目描述：
 *   给定一个整数，判断是否为2的幂次方
 * 
 * 解题技巧：
 *   位运算
 * 
 * @param {number} n
 * @return {boolean} 
 */
var isPowerOfTwo = function(n) {
    if (n !== 0 && (n & (n - 1)) === 0) {
        return true;
    }
    return false;
}
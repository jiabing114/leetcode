/**
 * 题目描述：
 *   实现pow(x, n)
 * 
 * 解题技巧：
 *   使用分支，可以将时间复杂度降为O(logn)
 *   或者使用位运算
 * 
 * @param {number} x 
 * @param {number} n
 * @return {number} 
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / myPow(x, -n);
    if (n % 2) return x * myPow(x, n - 1);
    return myPow(x * x, n / 2);
}
console.log(myPow(2, 10));
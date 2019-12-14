/**
 * 题目描述：
 *   实现并返回x的平方根
 * 
 * 解题技巧：
 *   二分查找
 * 
 * @param {number} x
 * @return {number} 
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) return x;
    let l = 1, r = x, res = 0;
    while(l <= r) {
        let mid = parseInt((l + r) / 2);
        if (mid === x / mid) {  // 防止越界 
            return mid
        } else if (mid > x / mid) {
            r =  mid - 1;
        } else {
            l = mid + 1;
            res = mid;
        }
    }
    return res;
}
/**
 * 题目描述：
 *   给定一个三角形，找出自顶向下的最小路径和
 * 
 * 解题技巧：
 *   1. 回溯法
 *   2. dp
 * 
 * @param {number[][]} triangle
 * @return {number} 
 */
var minimumTotal = function(triangle) {
    const m = triangle.length;
    const n = triangle[m - 1].length;
    let ans = triangle;
    ans[m - 1] = triangle[m - 1];
    for (i = m - 2; i >= 0; i--) {
        for (j = 0; j < n; j++) {
            ans[i][j] = Math.min(ans[i + 1][j], ans[i + 1][j + 1]) + triangle[i][j];
        }
    }

    return ans[0][0];
}

const triangle = [
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]
console.log(minimumTotal(triangle));
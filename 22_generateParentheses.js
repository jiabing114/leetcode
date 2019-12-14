/**
 * 题目描述：
 *   给定n代表生成括号的对数，返回其所有可能结果。
 * 
 * 解题技巧：
 *   dfs + backtracking   
 * 
 * @param {number} n
 * @return {string[]} 
 */
var generateParentheses = function(n) {
    let ans = new Array();
    backtrack(ans, "", 0, 0, n);
    return ans;

    // 回溯
    function backtrack(ans, cur, left, right, n) {
        if (cur.length === n * 2) {
            ans.push(cur);
            return;
        }

        if (left < n) {
            backtrack(ans, cur + "(", left + 1, right, n);
        }
        if (left > right) {
            backtrack(ans, cur + ")", left, right + 1, n);
        }
    }
}
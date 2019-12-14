/**
 * 题目描述：
 *   N皇后问题
 * 
 * 解题技巧：
 *   回溯法
 * 
 * @param {number} n
 * @return {string[][]} 
 */
var solveNQueens = function(n) {
    if(n < 1) return [];
    let result = new Array();
    let cols = new Set(),
        diagLeft = new Set(),
        diagRight = new Set();
    dfs(n, 0, []);
    return gen_result(result, n);

    /**
     * 
     * @param {number} n
     * @param {number} row  行 
     * @param {Array} cur_state  遍历一次时，满足的列数组 
     */
    function dfs(n, row, cur_state) {
        if (row >= n) {
            result.push(cur_state);
            return;
        }

        for (let col = 0; col < n; col++) {
            // 裁剪的条件
            if (cols.has(col) || diagLeft.has(row + col) || diagRight.has(row - col)) {
                continue;
            }

            // 更新
            cols.add(col);
            diagLeft.add(row + col);
            diagRight.add(row - col);

            // 递归
            dfs(n, row + 1, cur_state.concat([col]));

            // 还原
            cols.delete(col);
            diagLeft.delete(row + col);
            diagRight.delete(row - col);
        }
    }

    /**
     * 
     * @param {string[][]} result 
     */
    function gen_result(result, n) {
        let ans = new Array();
        for (let res of result) {
            let one_ans = new Array();
            for (let i of res) {
                let str = "";
                for (let col = 0; col < n; col++) {
                    if (col === i) {
                        str += "Q";
                    } else {
                        str += ".";
                    }
                }
                one_ans.push(str);
            }
            ans.push(one_ans);
        }
        return ans;
    }
}

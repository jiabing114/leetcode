
/**
 * 题目描述：
 *   给出两个单词word1和word2，计算编辑距离，
 * 只允许进行插入、删除、替换操作。
 * 
 * 解题技巧：
 *   dp问题，关键是dp状态的定义
 *   
 * 
 * @param {string} word1 
 * @param {string} word2
 * @return number 
 */
var minDistance = function(word1, word2) {
    const m = word1.length,
          n = word2.length;
    if (m * n === 0) return n + m;
    let dp = new Array(m + 1).fill(0).map(item => new Array(n + 1).fill(0));
    // 初始化值
    for(let i = 0; i < m + 1; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j < n + 1; j++) {
        dp[0][j] = j;
    }
    // dp状态转移方程
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1],
                    Math.min(dp[i - 1][j], dp[i][j - 1]));
            }
        }
    }
    
    return dp[m][n];
}

console.log(minDistance('horse', 'rorse'));

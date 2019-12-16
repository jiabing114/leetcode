/**
 * 题目描述：
 *   给定不同面额的硬币和一个总金额，
 * 计算凑成总金额所需最少硬币数。
 * 
 * 解题技巧：
 *   类比于爬楼梯，dp问题
 * 
 * @param {number[]} coins 
 * @param {number} amount
 * @return {number} 
 */
var coinChange = function(coins, amount) {
    const len = coins.length;
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for(let i = 1; i <= amount; i++) {
        for(let j = 0; j < len; j++) {
            if (i >= coins[j])
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);  
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11));
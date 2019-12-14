/**
 * 题目描述：
 *   给定一个数组，代表股票价格，设计一个算法，
 * 不限制交易次数，获取最大收益
 * 
 * @param {number[]} prices
 * @return {number} 
 */
var maxProfit = function(prices) {
    let res = 0;
    for(let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            res += prices[i] - prices[i - 1];
        }
    }

    return res;
}
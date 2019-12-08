/**
 * 题目描述：
 *   给定一个只包括'(',')','[',']','{','}'
 * 字符串，判断字符串是否有效
 * 
 * 解题思路：
 *   使用Stack解题
 * 
 * @param {string} s
 * @return {boolean} 
 */
var isValid = function(s) {
    let stack = [];
    const parentheseMap = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (let i of s) {
        if (['(', '[', '}'].indexOf(i) !== -1) {
            stack.push(parentheseMap[i]);
        } else {
            if (stack.length === 0 || stack.pop() !== i) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
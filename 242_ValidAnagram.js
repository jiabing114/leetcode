/**
 * 题目描述：
 *   给定两个字符串s和t，编写一个函数判断
 * t是否是s的字母异位词。
 * 
 * 解题思路：
 *   HashMap
 * 
 * @param {string} s 
 * @param {string} t
 * @return {boolean} 
 */
var isAnagram = function(s, t) {
    let dict = new Map();
    for (let i of s) {
        dict.set(i, dict.get(i) ? dict.get(i) + 1 : 1);
    }
    for (let j of t) {
        const tMap = dict.get(j);
        if (tMap === 1) {
            dict.delete(j);
        } else if (tMap > 1) {
            dict.set(j, tMap - 1);
        } else {
            return false;
        }
    }

    if (dict.size === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isAnagram('anagram', 'nagaram'));
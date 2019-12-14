/**
 * 题目描述：
 *   给定一个二叉树，找出其最小深度
 * 解题技巧：
 *   BFS, 或者更好的递归写法
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * @param {TreeNode} root 
 * @return {number}
 */
var minDepth2 = function(root) {
    if (!root) return 0;
    let currNodes = new Array();
    currNodes.push(root);
    let min =  0;
    while (currNodes.length > 0) {
        let nextNodes = [];
        for (let node of currNodes) {
            // 如果是叶子节点，深度加1
            if (!node.left && !node.right) {
                min += 1;
                return min;
            }
            if (node.left) {
                nextNodes.push(node.left);
            }
            if (node.right) {
                nextNodes.push(node.right);
            }
        }
        min += 1;
        currNodes = nextNodes;
    }
    return min;
}

var minDepth = function(root) {
    if (!root) return 0;
    if (!root.left) return 1 + minDepth(root.right);
    if (!root.right) return 1 + minDepth(root.left);

    // divide and conquer
    const leftMinDepth = minDepth(root.left);
    const rightMinDepth = minDepth(root.right);

    let result = 1 + Math.min(leftMinDepth, rightMinDepth);
    return result;
}
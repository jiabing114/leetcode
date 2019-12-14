/**
 * 题目描述：
 *   给定一个二叉树，返回其按层次遍历的节点值
 * 
 * 解题技巧：
 *   BFS遍历，需要变量记录level  
 * 
 * Defition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * @param {TreeNode} root
 * @return {number[][]} 
 */
var levelOrder = function(root) {
    if (!root) return [];

    let result = [];
    let currNodes = new Array();
    currNodes.push(root);

    // 如果是图的bfs，需要记录visited的元素；这里不需要，因为是二叉树
    while(currNodes.length > 0) {
        let subResult = [];
        let nextNodes = [];
        for (let node of currNodes) {
            subResult.push(node.val);
            if(node.left) {
                nextNodes.push(node.left);
            }
            if (node.right) {
                nextNodes.push(node.right);
            }
        }
        currNodes = nextNodes; 
        result.push(subResult);
    }

    return result;
}

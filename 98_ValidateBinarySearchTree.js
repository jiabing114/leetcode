
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * @param {TreeNode} root
 * @return {boolean} 
 */
var isValidBST = function(root) {
    if (root === null) return true;
    let result = new Array();
    function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.val);
        node.right && traverseInOrder(node.right);
    }
    traverseInOrder(root);
    return result === result.sort();
}
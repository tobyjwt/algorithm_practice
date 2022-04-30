/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    let result = root;
    dfs(root);
    return result;
    function dfs(root) {
        if (!root) {
            return false;
        }
        const lson = dfs(root.left);
        const rson = dfs(root.right);
        if ((lson && rson) || (root.val === p.val || root.val === q.val || (lson || rson))) {
            result = root;
        }
        return (lson || rson) || root.val === p.val || root.val === q.val;
    }
};

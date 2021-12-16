/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
type TreeNode = {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
};
function recoverTree(root: TreeNode | null): void {
    let pre: TreeNode | null = null;
    let err1: unknown = null;
    let err2: unknown = null;

    function orderTree(root: TreeNode | null): void {
        if (root) {
            orderTree(root.left);
            if (pre !== null && root.val < pre.val) {
                if (err1 === null) {
                    err1 = pre;
                } else {
                    err2 = root;
                }
            }
            pre = root;
            orderTree(root.right);
        }
    }

    orderTree(root);
    [(err1 as TreeNode).val, (err2 as TreeNode).val] = [(err2 as TreeNode).val, (err1 as TreeNode).val];
};
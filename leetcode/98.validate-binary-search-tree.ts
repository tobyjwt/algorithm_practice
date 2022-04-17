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

function isValidBST(root: TreeNode | null): boolean {

    return isValid(root, -Infinity, Infinity);
    function isValid(root: TreeNode | null, min: number, max: number): boolean {
        if (!root) {
            return true;
        }
        if (root.val >= max || root.val <= min) {
            return false;
        }
        return isValid(root.left, min, Math.min(root.val, max)) && isValid(root.right, Math.max(root.val, min), max);
    }
}

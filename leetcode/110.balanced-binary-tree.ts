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

function isBalanced(root: TreeNode | null): boolean {

    const depMap = new Map();

    return getBalanced(root);

    function getBalanced(root: TreeNode | null): boolean {
        if (!root) {
            return true;
        }
        return Math.abs(getDep(root.left) - getDep(root.right)) <= 1 && getBalanced(root.left) && getBalanced(root.right);
    }

    function getDep(node: TreeNode | null): number {
        if (!node) {
            return 0;
        }
        if (depMap.get(node) !== undefined) {
            return depMap.get(node);
        }
        return 1 + Math.max(getDep(node.left), getDep(node.right));
    }  
};
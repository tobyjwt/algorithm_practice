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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (p.val > q.val) {
        [p, q] = [q, p];
    }

    return findRoot(root);
    function findRoot(root: TreeNode) {
        if (p === root) {
            return p;
        }
        if (q === root) {
            return q;
        }
        if (p.val < root.val && q.val > root.val) {
            return root;
        }
        if (p.val < root.val && q.val < root.val) {
            return findRoot(root.left);
        }
        if (p.val > root.val && q.val > root.val) {
            return findRoot(root.right);
        }
    }
};

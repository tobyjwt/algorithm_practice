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

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

 function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (!inorder.length || !postorder.length) {
        return null;
    }
    const n = postorder.length;
    const rootVal = postorder[n - 1];
    const rootIdxInorder = inorder.indexOf(rootVal);
    const leftLen = rootIdxInorder;
    return new TreeNode(
        rootVal,
        buildTree(inorder.slice(0, rootIdxInorder), postorder.slice(0, rootIdxInorder)),
        buildTree(inorder.slice(rootIdxInorder + 1, n), postorder.slice(rootIdxInorder, n - 1))
    );
};
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

class TreeNode1 {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function buildTree(preorder: number[], inorder: number[]): TreeNode1 | null {
    if (!preorder.length || !inorder.length) {
        return null;
    }

    let rootVal = preorder[0];
    let rootIdxInorder = inorder.indexOf(rootVal);
    const leftLen = rootIdxInorder;
    return new TreeNode1(rootVal,
            buildTree(preorder.slice(1, leftLen + 1), inorder.slice(0, leftLen)),
            buildTree(preorder.slice(leftLen + 1, preorder.length), inorder.slice(rootIdxInorder + 1, inorder.length))
        );
};
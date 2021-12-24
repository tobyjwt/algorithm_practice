/**
 * 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

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

function levelOrderBottom(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }
    let thisLevel: TreeNode[] = [root];
    const result: number[][] = [];
    while(thisLevel.length) {
        const n = thisLevel.length;
        let nextLevel: TreeNode[] = [];
        let thisLevelNums: number[] = [];
        for (let i = 0; i < n; i++) {
            const node = thisLevel[i];
            if (node.left) {
                nextLevel.push(node.left);
            }
            if (node.right) {
                nextLevel.push(node.right);
            }
            thisLevelNums.push(thisLevel[i].val);
        }
        result.unshift(thisLevelNums);
        thisLevel = nextLevel;
    }
    return result;
};
/**
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
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

 function rightSideView(root: TreeNode | null): number[] {
    const result: number[] = [];
    const levelMap = new Map<number, boolean>();
    DFS(root, 1);
    return result;

    function DFS(node: TreeNode | null, level: number) {
        if (!node) {
            return;
        }
        if (!levelMap.has(level)) {
            result.push(node.val);
            levelMap.set(level, true);
        }
        DFS(node.right, level + 1);
        DFS(node.left, level + 1);
    }
};
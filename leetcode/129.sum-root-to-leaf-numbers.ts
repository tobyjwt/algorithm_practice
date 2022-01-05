/**
 *  给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
    每条从根节点到叶节点的路径都代表一个数字：
    例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
    计算从根节点到叶节点生成的 所有数字之和 。
    叶节点 是指没有子节点的节点。
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

function sumNumbers(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    const results: number[] = [];
    goDown(root, '');
    return results.reduce((pre, cur) => pre + cur, 0);
    
    function goDown(node: TreeNode, lastNum: string) {
        lastNum += node.val.toString();
        if (!node.left && !node.right) {
            results.push(Number(lastNum));
        } else {
            if (node.left) {
                goDown(node.left, lastNum);
            }
            if (node.right) {
                goDown(node.right, lastNum);
            }
        }
    }
};
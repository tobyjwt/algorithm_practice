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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }
    let queue: TreeNode[] = [root];
    let nextQueue: TreeNode[] = [];
    const result = [[]];
    while (queue.length || nextQueue.length) {
        if (!queue.length) {
            [nextQueue, queue] = [queue, nextQueue];
            result.push([]);
        }
        const temp = queue.shift();
        result[result.length - 1].push(temp.val);
        if (temp.left) {
            nextQueue.push(temp.left);
        }
        if (temp.right) {
            nextQueue.push(temp.right);
        }
    }
    return result;
};

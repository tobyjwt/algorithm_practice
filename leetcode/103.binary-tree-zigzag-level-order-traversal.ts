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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }
    let direction = 0; // 0 左起始， 1 右起始
    let thisLevel: TreeNode[] = [root];
    const result: number[][] = [];
    while(thisLevel.length) {
        const n = thisLevel.length;
        let nextLevel: TreeNode[] = [];
        let thisLevelNums: number[] = [];
        for (let i = 0; i < n; i++) {
            const node = thisLevel[i];
            let j = direction === 0 ? i : (n - 1 - i);
            if (node.left) {
                nextLevel.push(node.left);
            }
            if (node.right) {
                nextLevel.push(node.right);
            }
            thisLevelNums.push(thisLevel[j].val);
        }
        direction = direction ^ 1;
        result.push(thisLevelNums);
        thisLevel = nextLevel;
    }
    return result;
};
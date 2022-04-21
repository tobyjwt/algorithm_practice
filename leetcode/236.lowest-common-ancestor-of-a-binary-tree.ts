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
    let map = new Map();
    getFather(root as TreeNode, null);
    let pPath = generatePath(p);
    let qPath = generatePath(q);
    let result = null;
    while(pPath.length || qPath.length) {
        const curP = pPath.pop();
        const curQ = qPath.pop();
        if (curP === curQ) {
            result = curQ;
        } else {
            return result;
        }
    }
    return result;

    function generatePath(node: TreeNode) {
        const path = [];
        while(node) {
            path.push(node);
            node = map.get(node);
        }
        return path;
    }

    function getFather(cur: TreeNode, father: TreeNode | null) {
        map.set(cur, father);
        if (cur.left) {
            getFather(cur.left, cur);
        }
        if (cur.right) {
            getFather(cur.right, cur);
        }
    }
}

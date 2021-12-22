/**
 * 给定一个二叉树，检查它是否是镜像对称的。
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
// interface TreeNode {
//     val: number;
    
// }

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    // return isSimilar(root.left, root.right);
    
    // function isSimilar(left: TreeNode | null, right: TreeNode | null): boolean {
    //     if (left && right) {
    //         return left.val === right.val && isSimilar(left.left, right.right) && isSimilar(left.right, right.left);
    //     } else if (left || right) {
    //         return false;
    //     }
    //     return true;
    // } 

    const queue: (TreeNode | null)[] = [];
    queue.push(root.left);
    queue.push(root.right);
    while(queue.length) {
        const left = queue.shift();
        const right = queue.shift();
        if (left && right) {
            if (left.val === right.val) {
                queue.push(left.left);
                queue.push(right.right);
                queue.push(left.right);
                queue.push(right.left);
            } else {
                return false;
            }
        } else if (left || right) {
            return false;
        }
    }
    return true;
};
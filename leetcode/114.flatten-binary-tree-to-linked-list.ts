/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    if (!root) {
        return root;
    }
    reSort(root);

    function reSort(node: TreeNode): [TreeNode, TreeNode] {
        let tail: TreeNode = node;
        const right = node.right;
        if (node.left) {
            const [leftHead, leftTail] = reSort(node.left);
            node.right = leftHead;
            tail = leftTail;
        }
        node.left = null;
        if (right) {
            const [rightHead, rightTail] = reSort(right);
            tail.right = rightHead;
            tail = rightTail;
        }
        return [node, tail];
    }
};
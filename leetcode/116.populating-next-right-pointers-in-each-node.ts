/**
 * 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
 * struct Node {
    int val;
    Node *left;
    Node *right;
    Node *next;
    }
    填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
    初始状态下，所有 next 指针都被设置为 NULL。
    进阶：
        你只能使用常量级额外空间。
        使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。

 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
interface Node {
    val: number;
    left: Node | null;
    right: Node | null;
    next: Node | null;
}

function connect(root: Node | null): Node | null {
    if (!root) {
        return root;
    }
    let thisLevel: Node[] = [root];
    while(true) {
        const nextLevel: Node[] = [];
        while(thisLevel.length) {
            const node = thisLevel.shift() as Node;
            node.next = thisLevel.length ? thisLevel[0] : null;
            if (node.left) {
                nextLevel.push(node.left);
            }
            if (node.right) {
                nextLevel.push(node.right);
            }
        }
        if (!nextLevel.length) {
            break;
        }
        thisLevel = nextLevel;
    }
    return root;
};
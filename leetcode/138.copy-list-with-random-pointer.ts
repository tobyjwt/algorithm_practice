/**
 * 
 * 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。

    构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。

    例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。

    返回复制链表的头节点。
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

class Node {
    val: number
    next: Node | null
    random: Node | null
    constructor(val?: number, next?: Node, random?: Node) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

 function copyRandomList(head: Node | null): Node | null {
    if (!head) {
        return head;
    }
    const map = new Map();
    const copyHead = new Node(head.val);
    map.set(head, copyHead);
    let cur = head;
    let curCopy = copyHead;
    while (cur.next) {
        cur = cur.next;
        const copyNode = new Node(cur.val);
        map.set(cur, copyHead);
        curCopy.next = copyNode;
        curCopy = copyNode;
    }
    cur = head;
    curCopy = copyHead;
    while(cur) {
        if (cur.random !== null) {
            curCopy.random = map.get(cur.random);
        }
        cur = cur.next;
        curCopy = curCopy.next;
    }
    return copyHead;
};
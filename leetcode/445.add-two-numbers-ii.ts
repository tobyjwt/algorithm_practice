/**
 * 两数相加2
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function getNum(head: ListNode | null) {
    const queue = [];
    let cur = head;
    while(cur) {
        queue.push(cur.val);
        cur = cur.next;
    }
    return Number(queue.join(''));
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const arr = (getNum(l1) + getNum(l2)).toString().split('');
    if (!arr.length) {
        return null;
    }
    const head = new ListNode(Number(arr.shift()));
    let cur = head;
    while(arr.length) {
        cur.next = new ListNode(Number(arr.shift()));
        cur = cur.next;
    }
    return head;
};
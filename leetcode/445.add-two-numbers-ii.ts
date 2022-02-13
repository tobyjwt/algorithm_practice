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

 function getNum(head: ListNode | null): number[] {
    const queue = [];
    let cur = head;
    while(cur) {
        queue.push(cur.val);
        cur = cur.next;
    }
    return queue;
}

function sum(s1: number[], s2: number[]): number[] {
    let sum: number[] = [];
    let temp = 0;
    while(s1.length || s2.length) {
        const cur = (s1.pop() || 0) + (s2.pop() || 0) + temp;
        if (cur > 9) {
            sum.unshift(cur % 10);
            temp = 1;
        } else {
            sum.unshift(cur);
            temp = 0;
        }
    }
    if (temp !== 0) {
        sum.unshift(temp);
    }
    return sum;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const arr = sum(getNum(l1), getNum(l2));
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
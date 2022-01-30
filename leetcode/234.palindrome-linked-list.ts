/**
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
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

 let front = null;

 function compare(node: ListNode | null): boolean {
     if (node) {
         if (!compare(node.next)) {
             return false;
         }
         if (front.val !== node.val) {
             return false;
         }
         front = front.next;
     }
     return true;
 }

 function isPalindrome(head: ListNode | null): boolean {
    front = head;
    return compare(head);
};

// function isPalindrome(head: ListNode | null): boolean {
//     const queue = [];
//     let cur = head;
//     while(cur) {
//         queue.push(cur.val);
//         cur = cur.next;
//     }
//     while(queue.length) {
//         const left = queue.shift();
//         const right = queue.pop();
//         if (left !== right && left !== undefined && right !== undefined) {
//             return false;
//         }
//     }
//     return true;
// };
/**
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

 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let length = 0;
    let cur = head;
    while(cur) {
        length++;
        cur = cur.next;
    }
    if (n === length) {
        return (head as ListNode).next;
    }

    if (n > length || n < 1) {
        return head;
    }

    cur = head;
    const m = length - n;
    let idx = 0;
    while(cur) {
        if (idx === m - 1) {
            if (cur.next) {
                cur.next = cur.next.next;
            } else {
                cur.next = null;
            }
            break;
        } else {
            cur = cur.next;
        }
        idx++;
    }
    return head;
};
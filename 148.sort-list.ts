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
interface ListNode {
    val: number;
    next: ListNode | null;
}

function sortList(head: ListNode | null): ListNode | null {
    let max = Infinity;
    let i = 0;
    let target = head;
    while(max > 1) {
        if (target?.next && i < max - 1) {
            if (target.val > target.next.val) {
                [target.val, target.next.val] = [target.next.val, target.val];
            }
            target = target.next;
            i++;
        } else {
            max = i;
            i = 0;
            target = head;
        }
    }
    return head;
};
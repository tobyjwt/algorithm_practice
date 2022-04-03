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

 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let cur1 = list1;
    let cur2 = list2;

    const head = new ListNode();
    if (!cur1) {
        return cur2;
    }
    if (!cur2) {
        return cur1;
    }
    if (cur1.val < cur2.val) {
        head.val = cur1.val;
        cur1 = cur1.next;
    } else {
        head.val = cur2.val;
        cur2 = cur2.next;
    }
    let cur = head;
    while(cur1 || cur2) {
        if ((!cur2 && cur1) || (cur1 && cur2 && cur1.val < cur2.val)) {
            cur.next = new ListNode(cur1.val);
            cur1 = cur1.next;
        } else {
            cur.next = new ListNode(cur2.val);
            cur2 = cur2.next;
        }
        cur = cur.next;
    }
    return head;
};
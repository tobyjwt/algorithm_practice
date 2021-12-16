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

interface ListNode{
    val: number,
    next: ListNode | null
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (left === right) {
        return head;
    }
    let curIdx = 0;
    let curNode = head;
    let preLeft: ListNode | null = null;
    let afterRight: ListNode | null = null;
    while(curNode) {
        if (curIdx && curIdx === left - 1) {
            preLeft = curNode;
            console.log(preLeft);
        }
        if (curIdx === right) {
            afterRight = curNode;
        }
        curNode = curNode.next;
        curIdx++;
    }
    const stack: ListNode[] = [];
    let reverseHead: ListNode | null = preLeft?.next || null;
    while(reverseHead !== afterRight) {
        stack.push(reverseHead as ListNode);
        reverseHead = reverseHead?.next || null;
    }
    let reverseStart: ListNode = stack.pop() as ListNode;
    reverseHead = reverseStart;
    while(stack.length) {
        reverseStart.next = stack.pop() as ListNode;
        reverseStart = reverseStart.next;
    }
    reverseStart.next = afterRight;
    if (!preLeft) {
        return reverseHead;
    }
    console.log(preLeft);
    preLeft.next = reverseHead;
    return head;
};

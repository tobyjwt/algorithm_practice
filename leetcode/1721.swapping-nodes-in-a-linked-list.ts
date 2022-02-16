/**
 * 给你链表的头节点 head 和一个整数 k 。
   交换 链表正数第 k 个节点和倒数第 k 个节点的值后，返回链表的头节点（链表 从 1 开始索引）。
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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    const arr: ListNode[] = [];
    let cur = head;
    while(cur) {
        arr.push(cur);
        cur = cur.next;
    }
    const n = arr.length;
    if (k <= n && n > 1) {
        if (k === n || k === 1) {
            head = arr[n - 1];
            arr[n - 1] = arr[0];
            head.next = arr[1];
            arr[n - 2].next = arr[n - 1];
            arr[n - 1].next = null;
        } else {
            [arr[k - 1], arr[n - k]] = [arr[n - k], arr[k - 1]];
            arr[k - 2].next = arr[k - 1];
            arr[k - 1].next = arr[k];
            arr[n - k - 1].next = arr[n - k];
            arr[n - k].next = arr[n - k + 1];
        }
    }
    return head;
};
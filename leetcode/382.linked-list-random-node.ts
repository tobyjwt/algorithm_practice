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

 class Solution {
    private arr: ListNode[];
    private n: number;

    constructor(head: ListNode | null) {
        this.arr = [];
        let cur = head;
        while(cur) {
            this.arr.push(cur);
            cur = cur.next;
        }
        this.n = this.arr.length;
    }

    getRandom(): number {
        return this.arr[Math.floor(Math.random() * 10 * this.n) % this.n]
.val;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
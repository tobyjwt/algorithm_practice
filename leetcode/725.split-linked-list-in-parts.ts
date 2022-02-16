/**
 * 给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。

    每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null 。

    这 k 个部分应该按照在链表中出现的顺序排列，并且排在前面的部分的长度应该大于或等于排在后面的长度。

    返回一个由上述 k 部分组成的数组。

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


 function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    let count = 0;
    let cur = head;
    while(cur) {
        count++;
        cur = cur.next;
    }
    const arr = new Array(k).fill(null);
    const perCount = Math.trunc(count / k);
    let surplus = count % k;
    let curHead = head;
    for (let i = 0; i < k; i++) {
        let num = 0;
        let thisCount = perCount;
        if (surplus > 0) {
            thisCount++;
            surplus--;
        }
        arr[i] = curHead;
        while(curHead && num < thisCount) {
            const next = curHead.next;
            if(thisCount - num === 1) {
                curHead.next = null;
            }
            curHead = next;
            num++;
        }
    }
    return arr;
};
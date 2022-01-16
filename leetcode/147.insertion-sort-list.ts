/**
 * 对链表进行插入排序。


插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。

 

插入排序算法：

插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
重复直到所有输入数据插入完为止。

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

function insertionSortList(head: ListNode | null): ListNode | null {
    if (!head) {
        return head;
    }
    let cur = head.next;
    let last = head;
    while(cur) {
        if (cur.val < last.val) {
            last.next = cur.next;
            if (cur.val < head.val) {
                cur.next = head;
                head = cur;
            } else {
                let temp = head as ListNode;
                while(cur.val > (temp.next as ListNode).val) {
                    temp = temp.next as ListNode;
                }
                cur.next = temp.next;
                temp.next = cur;
            }
        }
        last = cur;
        cur = cur.next;
    }

    return head;
};
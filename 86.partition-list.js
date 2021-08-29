/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

 你应当 保留 两个分区中每个节点的初始相对位置。
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let left = null;
    let lastLeft = null;
    let right = null;
    let lastRight = null;
    while (head) {
        if (head.val < x) {
            if (!left) {
                left = head;
            } else {
                lastLeft.next = head;
            }
            lastLeft = head;
        } else {
            if (!right) {
                right = head;
                lastRight = right;
            } else {
                lastRight.next = head;
                lastRight = lastRight.next;
            }
        }
        head = head.next;
    }
    lastRight.next = null;
    lastLeft.next = right;
    return left;
};

let head = generate([1,4,3,2,5,2]), x = 3;
console.log(partition(head, x));
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val);
     this.next = (next===undefined ? null : next);
 }
 function generate(list) {
     let head = null
     let last = null;
     list.forEach(item => {
         let temp = new ListNode(item, null);
         if (head) {
             last.next = temp;
         } else {
             head = temp;
         }
         last = temp;
     });
     return head;
 }

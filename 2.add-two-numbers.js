/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

 示例:

 给定 nums = [2, 7, 11, 15], target = 9

 因为 nums[0] + nums[1] = 2 + 7 = 9
 所以返回 [0, 1]
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let p1 = l1
    let p2 = l2
    let carry = 0
    const dummy = new ListNode()
    let pointer = dummy
    while (p1 || p2 || carry) {
        const num1 = p1 ? p1.val : 0
        const num2 = p2 ? p2.val : 0
        const sum = num1 + num2 + carry
        if (sum > 9) {
            pointer.next = new ListNode(sum % 10)
            carry = 1
        } else {
            pointer.next = new ListNode(sum)
            carry = 0
        }
        if (p1) p1 = p1.next
        if (p2) p2 = p2.next
        pointer = pointer.next
    }
    return dummy.next
};

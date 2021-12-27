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

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (!head) {
        return null;
    }
   let len = 0;
   let node: ListNode | null = head;
   while(node) {
       len++;
       node = node.next;
   }

   return generateBST(head, len);

   function generateBST(head: ListNode | null, length: number): TreeNode | null {
       if (!head || !length) {
           return null;
       }
       const mid = length >> 1;
       let idx = 0;
       let mideNode: ListNode = head;
       while(mideNode && idx < mid) {
           idx++;
           mideNode = mideNode.next as ListNode;
       }
       return new TreeNode(
           mideNode.val,
           generateBST(head, mid),
           generateBST(mideNode.next, length - mid - 1)
       )
   }
};
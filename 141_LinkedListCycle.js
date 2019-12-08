/**
 * 题目描述：
 *   判断一个链表是否有环
 * 
 * 解题思路：
 *   快慢指针
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * @param {ListNode} head
 * @return {boolean} 
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
}
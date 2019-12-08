
/**
 * 题目描述：
 *   反转一个单链表  
 * 
 * 思路：
 *   一次遍历解决问题，需要两个指针
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * 
 * @param {ListNode} head
 * @return {ListNode} 
 */
var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    let prev = null;
    let cur = head;
    while(cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
}
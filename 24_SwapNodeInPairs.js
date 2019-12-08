
/**
 * 题目描述：
 *   给定一个链表，两两交换其中相邻的节点，
 * 并返回交换后的链表
 * 
 * 解题技巧：
 *    需要三个指针
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * @param {ListNode} head
 * @return {ListNode} 
 */
var swapPairs = function(head) {
    let tempHead = new ListNode(0);
    tempHead.next = head;
    let prev = tempHead;
    while(prev.next && prev.next.next) {
        let a = prev.next;
        let b = prev.next.next;
        prev.next = b;
        a.next = b.next;
        b.next = a;
        
        prev = b.next;
    }

    return tempHead.next;
}
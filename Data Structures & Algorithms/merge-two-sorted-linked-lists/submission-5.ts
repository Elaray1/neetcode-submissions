/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// list1=[1,2,4]
// list2=[1,3,5]

// list1=[1*,2,4]
// list2=[1*,3,5]

// 1
// list1=[1,2*,4]
// list2=[1*,3,5]

// 1,1
// list1=[1,2*,4]
// list2=[1,3*,5]

// 1,1,2
// list1=[1,2,4*]
// list2=[1,3*,5]

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        const dummy = new ListNode();
        let tail = dummy;

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        tail.next = list1 ?? list2;

        return dummy.next;
    }
}

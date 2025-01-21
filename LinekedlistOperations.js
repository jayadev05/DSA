array=[1,5,9,7,5,3,2,1]
node=arrayToLL(array);

//array to linked list

  class Node{
    constructor(value){
      this.value=value
      this.next=null
    }
  }

function arrayToLL(array){

  let head = new Node(val);
  let current=head

  for(let i=1;i<array.length;i++){
    current.next=new Node(array[i]);
    current=current.next
  }

  return head

}



// get middle element

function middleElement(head){
  let slow=head
  let fast=head

  while(fast && fast.next){
    slow=slow.next
    fast=fast.next.next
  }

  return slow
}


// check if two LL are same 

function isListSame(head1,head2){
    while(head1 && head2){
      if(head1.value!==head2.value) return false
      head1=head1.next
      head2=head2.next
    }

    return head1.value===null && head2.value===null
}


//intersection of two linked list

function intersectionOfList(head1,head2){

  let pointerA=head1
  let pointerB=head2

  while(pointerA!==pointerB){
    pointerA=pointerA?pointerA.next : head2
    pointerB=pointerB?pointerB.next: head1
  }

  return pointerA;

}

// remove duplicates

function removeDupicate(head){
 
  let map = {};
    let current = head;
    while (current) {
      if (!map[current.value]) map[current.value] = true;

      if (current.next && map[current.next.value]) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    return head;

}


  // remove duplicates from sorted linked list.

  function removeDuplicates(head) {
    let current = head;

    while (current) {
      if (current.next && current.value == current.next.value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    return head;
  }


  // Find the Sum of Last N nodes of the Linked List
  
    function sumOfLastN_Nodes(head, n) {
      let sum = 0;
      let length = 0;
      let current = head;
      while (current) {
        length++;
        current = current.next;
      }
      let lastN = length - n;
      length = 0;
      while (head) {
        length++;
        if (length > lastN) sum += head.value;
        head = head.next;
      }
  
      return sum;
    }
  
  //  check if a linked list contain cycle


  function isCycle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) {
        return true;
      }
    }
    return false;
  }


//get middle node 

  function getMiddle(node) {
        let index = 0;
        let head = node;
    
        while (head) {
          index++;
          head = head.next;
        }

        let middleIndex = index % 2 == 0 ? index / 2 + 1 : (index - 1) / 2 + 1;

        index = 0;

        while (node) {
          index++;
          if (index === middleIndex) return node.value;
          node = node.next;
        }

        //remove middle 

        head=node

        while(head.next){
          if(index===middleIndex){
            head.next=head.next.next
          }
          index++
          head=head.next
        }

        // add in middle

        index=0
        head=node

        while(head.next){

          if(index===middleIndex){
            let nextTemp=head.next;
            head.next=newNode
            newNode.next=nextTemp
          }

        }



    }

    
  // check whether the list is palindrome.

      function isPalindrome(head) {
    if (!head || !head.next) return true; // Single node or empty list is a palindrome.

    // Step 1: Find the middle of the linked list
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half
    let prev = null, curr = slow;
    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    let secondHalf = prev; // `prev` is now the head of the reversed second half.

    // Step 3: Compare the two halves
    let firstHalf = head;
    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) return false;
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true; // All values matched, it's a palindrome.
}






    //***********Doubly Lineks List************/



  //  TODO: reverse doubly linked list

class Solution {
    reverseDLL(head){
    let temp = null;
    let current = head;

    while (current != null) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev
    }

    if (temp != null) {
      head = temp.prev;
    }
     return head
    }

    reverseDLLL(){
      let temp=null;

      
    }
  }

  


//TODO: delete a node from DLL
class Solution {
  deleteNode(head, position) {
    if (head === null) {
      return;
    }

    let current = head;
    let count = 1;

    while (current !== null && count < position) {
      current = current.next;
      count++;
    }

    if (current === null) {
      return;
    }

    if (current === head) {
      head = current.next;
      if (head !== null) {
        head.prev = null;
      }
    } else {
      current.prev.next = current.next;
      if (current.next !== null) {
        current.next.prev = current.prev;
      }
    }

    return head;
  }
}
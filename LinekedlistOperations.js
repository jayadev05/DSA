array=[1,5,9,7,5,3,2,1]

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


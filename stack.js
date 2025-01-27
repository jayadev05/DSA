


class Node {
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

//implementation using linked list 

class StackLinkedList {

  constructor(){
    this.head=null;
    this.size=0
  }

  push(value){

    let newNode= new Node(value)

    if(!this.head) this.head=valnewNodeue;
    
 
    newNode.next= this.head;

    this.head = newNode

    this.size++;

    return newNode;

  }

  pop(){

    if(!this.head){
       console.error("Stack underflow")
       return null;
    } 

      let poppedValue= this.head.value

      this.head = this.head.next;

      this.size--;

      return poppedValue


  }

  top (){
    if(!this.head){
      console.error("Stack is empty") ;
      return null;
    } 

      return this.head.value
  }

  getSize (){
    return this.size;
  }


}

//implementation using using array

class StackArray {

  constructor(){
    this.stack= []
  }

  push(value){

   return  this.stack.push(value);

  }

  pop(){

    if(!this.stack.length) {
      console.error("Stack underflow");

      return null

    }

    return this.stack.pop();

  }

  top (){
    if(!this.stack.length) {
      console.error("stack is empty");

      return null

    }

      return this.stack[this.stack.length-1]
  }

  getSize(){
    if(!this.stack.length) return 0;

    return this.stack.length
  }

}

//implementation using using single queue (push operation is costly)

class StackQueue{
  constructor(){
    this.queue=[]
  }

  push(value){
   
    this.queue.push(value);

    for(let i=0;i<this.queue.length;i++){
      this.queue.push(this.queue.unshift());
    }

    return true;


  }

  pop(){
    if(!this.queue.length) {
      console.error("Stack underflow");
      return ;
    };

    return this.queue.shift();

  }

  peek(){
    if(!this.queue.length) {
      console.error("Stack is empty");
      return;
    }
    return this.queue[0]
  }

  display(){
    if(!this.queue.length){
      console.log("Stack is empty")
      return;
    }

    console.log( this.queue.join('->') )
  }
}




// palindrome using stack

function validPalindrome(s) {
  let stack = [];

  for (let i = 0; i < s.length / 2; i++) {
    stack.push(s[i]);
  }

  for (let j = Math.ceil(s.length / 2); j < s.length; j++) {
    if (stack.pop() !== s[j]) {
      return false;
    }
  }

  return true;
}


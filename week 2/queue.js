//implementation of queue using array

class QueueArray {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    return this.queue.push(value);
  }

  dequeue() {
    if (!this.queue.length) {
      console.error("Queue underflow");

      return null;
    }

    return this.queue.shift();
  }

  peek() {
    if (!this.queue.length) {
      console.error("Queue is empty");

      return null;
    }

    return this.queue[0];
  }

  getSize() {
    return this.queue.length;
  }
}

//implementation of queue using linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueLinkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;

    this.tail = newNode;

    this.length++;

    return newNode.value;
  }

  dequeue() {
    if (!this.head) {
      console.error("Queue underflow");
      return null;
    }

    let removedNode = this.head;

    this.head = removedNode.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return removedNode.value;
  }

  peek() {
    if(!this.head) {
      console.log("Queue is empty");
      return
    }

    return this.head
  }

  getSize() {
    return this.length;
  }
}

//implementation of queue using stack

class QueueStack{
  constructor(){
    this.stack1=[]
    this.stack2=[]
  }

  enqueue(value){
    this.stack1.push(value);
  }

  dequeue(){
    if(!this.stack2.length){

      if(!this.stack1.length){
        console.error("Queue is empty")
        return;
      }

      while(this.stack1.length>0){
        this.stack2.push(this.stack1.pop())
      }

    }

    return this.stack2.pop()
  }

  peek(){
    if(!this.stack2.length){

      if(!this.stack1.length){
        console.error("Queue is empty")
        return;
      }

      while(this.stack1.length>0){
        this.stack2.push(this.stack1.pop())
      }

    }

    return this.stack2[this.stack2.length-1]
  }

  display(){

    if(!this.stack1.length && !this.stack2.length) {
      console.log("Queue is empty");
      return;
    }

    const element= [...this.stack1,...this.stack2.reverse()]

    console.log(element.join('->'));

  }
}


//implementation of a circular queue

class CircularQueue {
  constructor(size){
    this.queue=[]
    this.rear = this.front = -1;
    this.size=size;
    this.length=0;
  }

  enqueue(){
    if(this.length===this.size) return("Queue is full");

    this.rear= (this.rear + 1) % this.size
    this.queue[this.rear]=value;
    this.length++;

    return true
  }

  dequeue(){

    if(this.length===0) return console.log("Queue is Empty")
    if(this.length===1) this.front = this.rear = -1;

    const value = this.queue[this.front];

  this.queue[front]=undefined;
  this.front= (this.front+1) % this.size
  this.length--;

  return value;

  }
  peek(){
    if(this.length===0) {
      console.log("Stack is empty")
      return;
  }

  return this.queue[this.front];

  } 
}

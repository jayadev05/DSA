class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class SinglyLinkedList{

  constructor(){
    this.head=null;
    this.tail=null;
    this.length=0;
  }

//pushing a value to end 

  push(val){

    let newNode= new Node(val);

    if(!this.head){
      this.head=newNode;
      this.tail=newNode
    }
    else {
      this.tail.next=newNode
    }

    this.length++;

    return this
    
  }


  //popping a value from end 

  pop(){
    if(!this.head) return undefined
    
    let current = this.head;
    let newTail= current

    while(current.next){
      newTail=current; // we get second last element in the end
      current=current.next
    }

    this.tail=newTail
    this.tail.next=null;
    this.length--;

    if(this.length===0){
      this.head=null;
      this.tail=null;
    }
    
    return current;
  }


//shift 

  shift(){
    if(!this.head) return undefined
    let currenHead= this.head

    this.head=currenHead.next;
    this.length--;

    return this
  }


  //unshift

  unshift(val){
   
    let newNode= new Node(val);

    if(!this.head){
      this.head=newNode;
      this.tail=newNode
    }
    else {
      newNode.next=this.head;
      this.head=newNode
    }

    return this

  }

  //get 
  get(index){
    if(index<0 || index> this.length) return null;

    let count=0;
    let current=this.head

    while(count!==index){
      current=current.next
      count++
    }

    return current
  }


  //set  
  set(index,val){

    let foundNode= this.get(index);

    if(foundNode){
      foundNode.value=val
      return true
    }

    return false

  }

  //insert

  insert(index,val){
    if(index<0 || index>this.length) return null;
    if(index===0) this.unshift(val);
    if(index===index.length-1) this.push(val);

    let newNode= new Node(val);
    let prev= this.get(index-1);

    let temp= prev.next; // store current value in that index 

    prev.next=newNode; // set new node in postion

    newNode.next=temp // set old value as newNodes next

    this.length++;

    return true

  }

  //remove 

  remove(index){
    if(index<0 || index>this.length) return null;
    if(index===0) this.shift();
    if(index===index.length-1) this.pop();

    let prev= this.get(index-1);
    let current= this.get(index);

     prev.next= current.next; 
     this.length--;

     return current
  }

  //reverse 

  reverse(){

    let node= this.head
    this.head=this.tail
    this.tail=node

    let prev;
    let next=null;
    
    for (let i = 0; i < this.length; i++) {
      // Save the next node temporarily. This ensures we don't lose the rest of the list
      // when we change the current node's "next" pointer.
      next = node.next;
    
      // Reverse the direction of the current node's "next" pointer.
      // Instead of pointing to the next node in the original order,
      // it now points to the previous node.
      node.next = prev;
    
      // Move the "prev" pointer forward.
      // This prepares it to be the "previous" node for the next iteration.
      prev = node;
    
      // Move the "node" pointer forward.
      // This prepares it to process the next node in the list.
      node = next;




    }
    
    return this

  }


  //largest value 

  largestVal(){

    let current=this.head;

    let maxVal=0;

    while(current){
      if(current.value> max){
        max=current.value
      }

      current=current.next
    }

    return maxVal;

  }

  // find unique 

  findUnique(){

    let map = new Map();
    let current=this.head

    while(current.next){
      if(map.has(current.value)){
        map.set(current.value,false)
      }
      else {
        mas.set(current.value,true)
      }

      current= current.next

    }

    let unique=[];
    
    map.forEach((value,key)=>{
      if(value){
        unique.push(key)
      }
    })

    return unique;



  }

}
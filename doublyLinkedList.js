class Node{
    constructor(val){
        this.value=val;
        this.next=null
        this.prev=null;
    }
}

class DoublyLinkedList {

    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }

    push(val){

       let newNode = new Node(val);

        if(!this.head){

            this.head=newNode;
            this.tail=newNode;

        }

        else {
            this.tail.next=newNode
            newNode.prev=this.tail;
            this.tail=newNode

        }

        this.length++;

       

        return node
    }

    pop(){
   

        if(!this.head) return undefined 

        let currentTail=this.tail;

        this.tail=currentTail.prev;
        this.tail.next=null

        currentTail.prev=null

       

        this.length--;

        return currentTail;
    }

    shift(){
        if(!this.head) return undefined
        if(this.length===1){
            this.head=null
            this.tail=null
        }

        else {
          let head=this.head
          this.head=head.next
          this.head.prev=null

          head.next=null

        }

        this.length--;

        return this.head;
    }


    unshift(val){
        if(!this.head) return undefined

        let newNode= new Node(val)

        if(this.length===0){
            this.head=newNode
            this.tail=newNode
        }

        else {
            this.head.prev=newNode
            newNode.next=this.head;
            this.head=newNode
        }


        this.length++;
    }

    get(index){
        let current=this.head;

        let count=0;

        if(index<0 || index>this.length) return null

        while(current.next){
            if (index===count){
                return current
            }

            count++
            current=current.next
        }
    }

    set(index,val){
        let foundNode=get(index);
       if(foundNode!==null){
        foundNode.value=val
        return true
       }
        return false

    }

    insert(val,index){
       
        let newNode=new Node(val)

        let currentNode=this.get(index);
        if(!currentNode) return false;
        if(index===0) return this.unshift(val)
        if(index===this.length) return  this.push(val)
       
            let prev=currentNode.prev;
            prev.next=newNode;

            newNode.next=currentNode
            newNode.prev=prev

            this.length++
        

      

      return true
     
    }

    remove(index){
        if(index<0 || index>=this.length) return false
        if(index===0) return this.shift()
        if(index===this.length-1) return this.pop();

        //for middle elements
        
        let prev = this.get(index-1);
        let deletedNode= prev.next;
        let nextNode=deletedNode.next

        prev.next=nextNode;
        nextNode.prev=prev;

        this.length--

        return deletedNode
    }

    reverse(){

        if(!this.head) return null
        
        let current=this.head;
        let temp=null

       
        this.head=this.tail;
        this.tail=current

       

        while(current){
            let temp=current.next;
            current.next= current.prev;
            current.prev=temp

            current=current.next
        }

        this.tail.next=null

        return this



    }
}


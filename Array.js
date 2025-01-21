a = [1,2,3,4,5, 7, 4, 8, -1, -3, 6, 0, 2, 7, 2, 1];

//largest , second largest , smallest , second smallest element in array



const largestElement=(array)=>{
  let min= Infinity
  let smin=Infinity
  let max= -Infinity
  let smax= -Infinity

  for(i of a){
    if(i>max){
      smax=max
      max=i
    }

    else if(i>smax && i<max){
      smax=i
    }

    if(i<min){
      smin=min
      min=i
    }
    else if(i<smax && i>max){
      smin=i
    }

  }

  return [max,smax,min,smin]
}


//remove duplicates

const removeDuplicates=(array)=>{
 const unique={}
 const  uniqueArr=[]
for (let i of array) {
  if(!unique[i]){
    unique[i]=true;
    uniqueArr.push(i)
  }
}
return uniqueArr
}


//converting Array into Linked List


const arrayToLinkedList=(array)=>{

class Node{
  constructor(value){
    this.value=value;
    this.next=null
  }
}

const head= new Node(array[0]);
let current= head;

for(i=1;i<array.length;i++){
  current.next=new Node(array[i]);
  current=current.next
}

return head

}


//max increasing subarray

const maxIncSubbarray = (arr) => {

  if (arr.length===0) return [];

  let startIndex=0 , endIndex=0, currentIndex=0;

  for(let i=1;i<arr.length;i++){
    if(arr[i]<=arr[i-1]){
      currentIndex=i
    }
    else{
      if(i-currentIndex > endIndex-startIndex){
        startIndex=currentIndex;
        endIndex=i
      }
    }
  }

  return arr.slice(startIndex,endIndex+1);


};


//largest substring wihtout vowels

const str='abcdfasdaadilyonadanAeOCK';

const maxSubstringWithoutVowels=(str)=>{

  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let maxLen=0
  let maxSubstring=''
  let currentSubstring=''

  for (char of str ){
    if(vowels.includes(char)){
      currentSubstring=''
    }
    else {
      currentSubstring+=char;

      if(currentSubstring.length> maxLen){
        maxLen=currentSubstring.length
        maxSubstring=currentSubstring;
      }

    }
  }

  return maxSubstring;

}


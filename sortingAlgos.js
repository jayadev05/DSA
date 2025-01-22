let arr=[1,5,8,4,2,9,8,7]
let arr1=[1,2,3,4,5,5,7,9]
let arr2=[2,4,6,8,10]
let n= arr.length;

//selection sort

function selectionSort (arr,n){

  for (let i=0;i<n-1;i++){
    let min =i
    for(let j=i;j<n;j++){
      if(arr[j]<arr[min]){
        min=j
      }
    }
  
    //swap 
  
    if(min!==i){
      [arr[i],arr[min]]=[arr[min],arr[i]]
    }
  
  }

  return arr

}

// bubble sort

function bubbleSort(arr,n){

  for(let i=0;i<n-1;i++){

    let swapped=false;

    for(let j=0;j<n-1-i ;j++){

      if(arr[j]>arr[j+1]){
        [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ];
        swapped=true
      }

     

    }

    if(!swapped) break;

  }

  return arr

} 

//insertion sort

function insertionSort(arr,n){
  for(let i=0;i<n-1;i++){
    let j=i;

    while(j>0 && arr[j-1]>arr[j]){
      //swap
      [arr[j-1],arr[j]] = [arr[j],arr[j-1]];

      //continue cecking with left elements
      j--;
    }
  }
  return arr
}

//quick sort


//1 : easy method higher complexity 

function quickSort1(arr,n){

  if(n<=1) return arr;

  let pivot=arr[0];

  let left=[];
  let right=[];

  for(let i=1;i<n;i++){
    if( arr[i] < pivot ){
      left.push(arr[i])
    }
    else if( arr[i] > pivot ){
      right.push(arr[i])
    }
  }

  return [...quickSort1(left,left.length),pivot,...quickSort1(right,right.length)  ]
  

}

// 2: optimised inplace sort

function quickSort(arr, low=0 , high = arr.length-1 ){
  if(low<high)  {
    const pivotIndex= partition(arr,low,high);

     quickSort(arr,low,pivotIndex-1) // sort left 

     quickSort(arr,pivotIndex+1,high) // sort right

  }

  return arr
}

function partition(arr,low,high){

  const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
  [arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]]; // Swap with last element
  const pivot = arr[high];

  let i=low-1;

  for( let j=low;j<high;j++){

    //if element less than pivot
    if(arr[j]< pivot){
      
      i++;
    
      //swap
      [arr[i],arr[j]]= [arr[j],arr[i]]
    }
  }

  //palce the pivot in place (next place of latest i index)

  [arr[i+1],arr[high]] = [arr[high],arr[i+1]];

  return i+1 // returns the pivots correct index

}



//merge sort

function mergeSort(arr){

  if(arr.length<=1) return arr

 
  let mid= Math.floor((arr.length)/2);

  let left= arr.slice(0,mid);
  let right= arr.slice(mid);

return merge(mergeSort(left),mergeSort(right))

}

//merging two sorted arrays

function merge(arr1,arr2){

  let result=[];

  let i=0; j=0;

  while(i<arr1.length && j<arr2.length){
    if(arr1[i]<=arr2[j]){
      result.push(arr1[i++])
    }
    else {
      result.push(arr2[j++])
    }
  }

  return result.concat(arr1.slice(i)).concat(arr2.slice(j));


}

console.log(mergeSort(arr))
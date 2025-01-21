let arr=[1,5,8,4,2,9,8,7]
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

function quickSort(arr,n){
  
}

//merge sort

function mergeSort(arr,n){

}
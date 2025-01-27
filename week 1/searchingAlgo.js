//binary search 

function binarySearch(arr,target){
    let high=arr.length-1;
    let low=0;

    while(low<=high){
        let mid=Math.floor(( low+high ) /2 )

        if(arr[mid]===target){
            return mid
        }
        else if(arr[mid]<target){
            low=mid+1
        }
        else {
            high=mid-1
        }
    }

    return -1
}

// binary search using recursion

function binaryRecursion(arr,target,mid,low=0,high=arr.length-1){

    if(low>high) return -1

    let mid=Math.floor((low+high)/2)

    if(arr[mid]>target){
        return binaryRecursion(arr,target,mid,low,mid-1)
    }
    else if(arr[mid]<target){ {
        return binaryRecursion(arr,target,mid,mid+1,high)
    }
    }
}





//linear search

function linearSearch(arr,target){
for(i in arr){
    if(arr[i]===target){
        return i
    }
}

return -1
}
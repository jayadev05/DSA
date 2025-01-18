// reverse every word in a string 

const str="hello world asdajsdlkkepAawmeRJWWEOWYX 12 4 5 623 2"

const reverseWord=(str)=>{
  let start=0;
  let result='';

  for(let i=0;i<=str.length;i++){

    if(str[i]===' ' || i===str.length){

      for(let j=i-1 ; j>=start ;j--){
        result+= str[j]
      }

      if(i!== str.length){
        result+=' '
      }

      start=i+1

    }


  }

  return result

}


//remove a char recursively from a string

const removeCharRecursively=(str,charToRemove)=>{

  if(str.length===0) return ''

  if(str[0]===charToRemove){
    return removeCharRecursively(str.slice(1),charToRemove)
  }
  else {
    return str[0] + removeCharRecursively(str.slice(1),charToRemove);
  }

}

//ensure a sentence starts with an uppercase and ends with a period

const ensureFormat=(str)=>{

  str=str.trim()

  str = str[0].toUpperCase() + str.slice(1);

  if(str[str.length-1]!=='.'){
   str+='.'
  }

  return str
}

// extract numbers from a string

const extractNumbers=(str)=>{
  if(str.length===0 )return;

  
  let extractedNums='';

  for (let i=0;i<str.length;i++){
    if(str[i]>'0' && str[i]<='9'){
      extractedNums+=str[i];
    }
  }

 

  return extractedNums

  

}


//reverse string

const reverseString=(str)=>{

if(str.length===1) return str;

return reverseString(str.slice(1))+str[0];


}

console.log(reverseString(str))
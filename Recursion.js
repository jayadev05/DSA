// fibonacci 

const fibonacci=(num)=>{
  if(num<=1) return num;

  return fibonacci(n-1) + fibonacci(n-2)

}


// factorial 

function factorial(num){
  if(num<=1) return 1

  return n * factorial(n-1);
}


// sum of digits 

function sumOfDigits(num){
  if(num===0) return 0

  return n % 10 + sumOfDigits(Math.floor(n/10));
}

//palindrome 

function isPalindrome(str){

  if(str.length===0) return true
  if(str[0]!==str[str.length-1]) return false

  return isPalindrome(str.slice(1,-1))

}

//gcd

function gcd(a,b){
if(b===0) return a

return gcd(b, a % b)

}


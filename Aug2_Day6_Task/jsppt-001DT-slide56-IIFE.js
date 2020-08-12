console.log("Q1. Print odd numbers in an array"); 
var arr1 = [5,4,10,11,13,14];

 var result1 = function(arr)
 {
     var resArr1 = [];
     for(var i = 0;i<arr.length;i++)
      {
        if(arr[i]%2 !=0)
         {
             resArr1.push(arr[i])
         }
      }
      return resArr1;
 }(arr1)
console.log("Only odd numbers from the array",result1);
console.log("#########################################################");
console.log("Q2: TITLE CASE USING IFFE");
( function(string) {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
console.log(sentence.join(" "));
return sentence;
})("TITLE cAps done usING IFFE");


console.log("#########################################################");

console.log("Q3.Sum of all numbers in an array");
var arr3 = [5,4,10,11,13,14];
var result3 = function(arr)
 {
     var sum3 = 0;
     for(var i = 0;i<arr.length;i++)
      {
        sum3+=arr[i];
      }
      return sum3;
 }(arr3)
console.log("Sum of all array elements :",result3);
console.log("#########################################################");

console.log("Q4.Return all the prime numbers in an array");
var arr4 = [5,4,10,11,13,101];

var result4 = function(arr)
{
  var j = 0;
    var primeArr4 = [];
    while(j<arr.length)
    {
      
     if (isPrime(arr[j]))
     {
       primeArr4.push(arr[j])
     }
     j++
    }
    return primeArr4;
}(arr4)
function isPrime(num)
 {
   for(var i = 2;i<Math.sqrt(num);i++)
    {
      if(num%i == 0)
       {return false;}
      else
       {return true;}
    }
 }
console.log("All the prime numbers from the array",arr4, " are :",result4);
console.log("#################################################################################")

//Return all the palindromes in an array
console.log("Q5. Return all Palindromes number from an Array");
var arr5 = [101,202,121,50,67];

var result5 = function(arr)
 {
   var remainder;
   var palindromeNumber = 0;
   var resArr5 = []; 
   for(var i = 0;i<arr.length;i++)
    {
      var remainder;
      var palindromeNumber = 0;
      var num = arr[i]
  while(num>=1)
   {
     remainder = num%10;
     palindromeNumber = palindromeNumber*10 + remainder;
     num = Math.floor(num/10);
    
   }
   if(palindromeNumber == arr[i])
    {
      resArr5.push(arr[i])
    }
  }
  return resArr5;
 }(arr5)
console.log("Palindromes numbers are "+result5);
console.log("#########################################################################");

//Return median of two sorted arrays of same size 
console.log("Q6. Return median of two sorted arrays of same size ")


console.log("##########################################################################");

console.log("Q7. Remove duplicates from an array");
var arr7 = [7,5,6,4,5,7,6];
var result7 = function(arr)
 {
   return [... new Set(arr)]
 }(arr7)
 console.log("Array before removing duplicates : ",...arr7);
 console.log("Array after removing  duplicates :" +result7);
 console.log("#################################################################################");

 console.log("Q8. Rotate an array by k times and return the rotated array");
var arr8 = [1,2,3,4,5]
var result8 = function (arr,k)
{
  let i = 0;
  while(i<k)
   {
     arr.unshift(arr.pop())
     i++
   }
   return arr;
}(arr8,2)
console.log("Array before rotation :",...arr8);
console.log("Array after rotatiion of 2 :" ,result8);
console.log("##########################################################################################");

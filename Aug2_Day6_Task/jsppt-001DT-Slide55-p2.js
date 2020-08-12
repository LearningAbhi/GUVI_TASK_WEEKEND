//LINK - https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f

//Write a function called “getFullName”. 
console.log("Q16. FUNCTION TO GET FULLNAME FROM FN and LN");
function getFullName(firstName, lastName){
    return firstName+lastName;
   }
   console.log(getFullName("GUVI"," GEEK"));
   console.log(getFullName("ABHIJIT"," MOHAPATRA"));
   console.log(getFullName("ABHI",));
 //  console.log(getFullName( ,"ABHI")); // THROWS ERROR
   console.log(getFullName("",""));
console.log("#######################################################") ;

//FUNCTION TO GET LEMGTH OF THE WORD
console.log("Q17.FUNCTION WHICH TAKES A WORD & RETURNS LENGTH OF IT");
function getLengthOfWord(word1){
    return word1.length;
   }

console.log(getLengthOfWord("ABHIJIT"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord("SEE"));
console.log("##############################################################");

// FUNCTION TO CHECK IF TWO WORDS ARE OF SAME LENGTH OR NOT
console.log("Q18. THIS FUNCTION CHECKS IF TWO WORDS ARE OF SAME LENGTH OR NOT")
function isSameLength(word1, word2){
    if(word1.length == word2.length)
     {
         return true;
     }
     else
     {return false;}
   }
   console.log("Does GUVI & GEEKS have same length " +isSameLength("GUVI","GEEK"));
   console.log("Does ABHI & JIT have same length " +isSameLength("ABHI","JIT"));
console.log("#####################################################################");

//GET DISTANCE BETWEEN TWO POINTS
console.log("Q19. GET DISTANCE BETWEEN TWO POINTS FROM THEIR X & Y COORDINATES")
function getDistance(x1, y1, x2, y2)
{
    var result19 = Math.abs(x1-x2)+","+ Math.abs(y1-y2);
    return result19;
 
}
console.log("The distance is "+getDistance(100,100,500,400));
console.log("#################################################################");

//GET THE NTH ELEMENT IN THE ARRAY. IF THE ARRAY LENGTH 0 , RETURN UNDEFINED
console.log("Q20. GETTING THE NTH ELEMENT FROM AN ARRAY");
function getNthElement(array,n){
    if(array.length == 0)
     {
         return "undefined";
     }
     else
     {
         return array[n];
     }
   }
   console.log("The 3rd Index element of array [1,3,4,5,7,8] is :"+getNthElement([1,3,4,5,7,8],3));
   console.log("The 2nd Index element of array [] is :"+getNthElement([],2));
   console.log("########################################################################");

//GET LASTELEMENT OF AN ARRAY. IF ARRAY LENGTH 0 RETURN -1
console.log("Q21. FUNCTION TO GET LAST ELEMENT OF AN ARRAY");

function getLastElement(array){
    if(array.length == 0 )
     return -1;
    else
     return array[array.length-1];
}
console.log("The last element of array [1,3,4,5,7,8] is :"+getNthElement([1,3,4,5,7,8]));
console.log("The last element of array [] is :"+getNthElement([]));
console.log("########################################################################");

//GET THE PROPERTY OF THE OBJECT WHEN A KEY IS PASSED TO THE FUNCTION. IF THE KEY IS NOT PRESENET RETURN UNDEFINED
console.log("Q22. FUNCTION THAT RETURNS THE PROPERY OF THE GIVEN KEY VALUE OF AN OBJECT");
var obj = {
    mykey1: "value",
    mykey2:"another",

   };
   function getProperty(obj, key) {
    return obj[key];
   }
console.log("The property presenet at key 'mykey1 is' :"+getProperty(obj,"mykey1"));
console.log("The property presenet at key 'mykey2 is' :"+getProperty(obj,"mykey2"));
console.log("The property presenet at key 'mykey3 is' :"+getProperty(obj,"mykey3"));
console.log("##################################################################################");

//FUNCTION TO ADD A PROPERTY TO AN OBJECT
console.log("Q23. FUNCTION TO ADD A PROPERTY TO AN EXISTING OBJECT");
var obj23 = {
    mykey: "value"
   };
   function addProperty(obj, key){
    obj[key] = "newValue";
    return obj;
   }
console.log("Object before new property");
console.log(obj23);
console.log("Object after new property");
console.log(addProperty(obj23,"newKey"));
console.log("####################################################################");

//FUNCTION TO REMOVE PROPERTY OF AN EXISTING OBJECT
console.log("Q24. FUCNTION TO REMOVE PROPERTY OF AN EXISTING OBJECT");

function removeProperty(obj, key){
    delete obj[key];
    return obj;
   }
console.log("Object before removal of property");
console.log(obj23);
console.log("Object after removal of newKey");
console.log(removeProperty(obj23,"newKey"));
console.log("############################################################################");

//TAKE AND ARRAY AND RETURN AN ARRAY WHERE FIRST ELEMENT SUM OF POSITIVE NUMBERS 2ND ELEMENT -VE NUMBER
console.log("Q25. SUM OF POSITIVE & NEGATIVE NUMBER");

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    var posSum = 0;
    var negSum = 0;
 for(var i = 0;i<arr.length;i++)
 {
    
  if(arr[i] >= 0)
   {    
    posSum = posSum + arr[i];
    
   }
   else
   {
       negSum = arr[i]+negSum;
   }
 }
 var arr25 = [];
 arr25.push(posSum);
 arr25.push(negSum);
 return arr25;
}
console.log(ar2(arr));
console.log("###################################################################################");

//RETRUN AN ARRAY CONTAINING ONLY POSTIVE NUMBERS FROM AN ARRAY

console.log("Q26. RETURN AN ARRAY OF ONLY +VE NUMBERS")
function getPositives(ar)
{
    let res = [];
 for(var i =0;i<ar.length;i++)
  {
      if(ar[i]>=0)
       {
        res.push(ar[i]);
       }
  }
  return res;
}
var arr26 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var res26 = getPositives(arr26);
console.log(res26);
console.log("######################################################################################");

//POWER OF TWO FROM 0 TILL n;

console.log("Q27. GETTING POWER OF 2");
function powersOfTwo(n){
    var res = "";
    for(var i = 0;i<=n;i++)
     {
         res = res+ Math.pow(2,i) +",";
     }
  
    return res.substring(0,res.length-1);
  }
console.log("Power of 2 till 0 is "+powersOfTwo(0));
console.log("Power of 2 till 3 is "+powersOfTwo(3));
console.log("Power of 2 till 6 is "+powersOfTwo(6));
console.log("######################################################################################");

//Find the maximum number in an array of numbers

console.log("Q28. LARGEST NUMBER IN AN ARRAY OF NUMBERS");
function findMax(arr)
{
    var max = arr[0]
    for(var i = 1;i<arr.length;i++)
     {
         if(arr[i]>max)
         {
             max = arr[i];
         }
     }
     return max;
}
var arr28 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(arr28);
console.log("Max: ", max)
console.log("#####################################################################################");

//PRINT FIRST 100 PRIME NUMBERS

// Function prints the first nPrimes numbers
console.log("Q29. FUNCTION TO PRINT FIRST 100 PRIME NUMBERS");
printPrimes(100);
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
    for(var j = 2;j<=Math.sqrt(n);j++)
    {
    if(n%j == 0)
    {return false;}}
    return true;
}
console.log("#######################################################################");

//FUNCTION THAT RETURNS NTH PRIME NUMBERS STARTING FROM ONE POINT WHEN WE PASS THOSE THING IN ARGUMENTS
console.log("Q30. FUNCTION TO PRINT FIRST N PRIME NUMBERS FROM A STARTING POINT");
getPrimes(10, 100);
function getPrimes(nPrimes, startAt)
{
    var i = startAt;
    var n = 1;
while(n<=nPrimes)
{
 if (isPrime(i))
 {
     console.log(n, " -> ", i)
     n++;
 }
 i++;
}
}
// Returns true if a number is prime
function isPrime(n)
{
 for(var j = 2;j<Math.sqrt(n);j++)
 {
 if(n%j == 0)
 {return false;}}
 return true;
}
console.log("##################################################################")

//REVERSING A STRING
console.log("Q31. FUNCTION TO REVERSE A STRING");

var s = reverseString("string");
console.log(s);

function reverseString(str)
{
    var res31 = "";
  for(var i31 = str.length-1 ; i31<=0;i31-- )
   {
       res31 = res31 + str.charAt(i31);
       console.log(str.charAt(i31))
   }
   console.log(res31)
   return res31;
}














































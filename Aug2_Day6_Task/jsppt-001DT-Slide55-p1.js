//LINK : https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f

//Write a function called “addFive”. Given a number, “addFive” returns 5 added to that number.
let num = 8;
function addFive(a)
{
    return a+5;
}

var result1 = addFive(num)
console.log("Q1 : Function to add 5")
console.log("Value after adding 5 :" + result1);
console.log("############################")


//PROGRAM TO GET OPPOSITE OF A NUMBER

console.log("Q2: FUNCTION TO GET OPPOSITE OF A NUMBER")
function getOpposite(num)
{
    if(typeof(num) == "number")
     {
         if(num == NaN)
          {
            return -1;
          }
         else if(num!=0)
          {
              return num - (2*num)
          }
          else(num == 0)
           {
               return 0;
           }
           
     }
     else
     {
         return -1;
     }
}

let result2 = [];
var numArr = [10,0,10.10,NaN,"10a",false]


for(var i =0;i<numArr.length;i++)
 {
    result2.push(getOpposite(numArr[i]));
     console.log("Opposite of "+numArr[i]+" is : "+result2[i]);
 }
 console.log("##############################")

 //Fill in your code that takes an number minutes and converts it to seconds.
console.log("Q3: FUNCTION TO CONVERT MIN TO SEC");
 var min = 5;
function toSeconds(min) {
    return 60*min;
}
var secs = toSeconds(min)
console.log(min+" minutes in second is : "+secs);
console.log("#####################################");

//Create a function that takes a string and returns it as an integer.
console.log("Q4: Function to convert string to Number");
var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger(mystr);
console.log(myint+" is a  "+typeof(myint));
console.log("######################################");

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
console.log("Q5 :INCREAMENT NUMBER BY 1")

var input1 = [1,-4,1]
console.log("INPUT: " +input1)
function nextNumber(a) {
    return ++a;
}
var myNextint = []; 
myNextint.push(nextNumber(input1[0]));
myNextint.push(nextNumber(input1[1]));
myNextint.push(nextNumber(input1[2]));
console.log("RESULT: " + myNextint);
console.log("########################################");

//Create a function that takes an array and returns the first element.
console.log("Q6: FUNCTION THAT RETURNS ARRAYS FIRST ELEMENT");
let arr6 = [10,20,30,40]

function getFirstElement(arr) {
    return arr[0];
}
var result6 = getFirstElement(arr6)
console.log("The first element is :"+result6);
console.log("#################################################");

//FUNCTION TO CONVERT HOURS TO SECONDS  
console.log("Q7: HOURS TO SECONDS CONVERSION");
var hour7 = [1, 2, 3];
function hourToSeconds(arr) {
    return arr*3600;
}
var seconds7 = []
for(var i = 0 ; i < hour7.length; i++)
 {
     seconds7.push(hourToSeconds(hour7[i]));
     console.log(hour7[i]+" hour in seconds is : "+seconds7[i]);
 }
console.log("##############################################");

// PERIMETER OF RECTANGLE

console.log("Q8: PERIMETER OF RECTANGLE")

function findPerimeter(num1,num2) {
    return (2*num1)+(2*num2)
}
var peri = findPerimeter(6,7)
console.log("The perimeter is :"+peri);
console.log("##########################################");

// RETURN TRUE IF SUM OF TWO NUMBER IS LESS THAN 100
console.log("Q9: CHECK IF SUM IS LESS THAN OR GREATER THAN 100")

function lessThan100(num1,num2) {
    if(num1+num2 >= 100)
     {
         return false;
     }
     else
     return true;
}
var res = [];
 res.push(lessThan100(22,15));
 res.push(lessThan100(56,48));
 console.log(res);
console.log("#################################################");

//MODULOUS OPERATOR
console.log("Q10 : USING MODULOUS OPERATION");
function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(10,4);
console.log("The remainder is :"+res);
console.log("#####################################################333");

// COUNTING LEGS OF THE ANIMALS IN A FARM
console.log("Q11: FUNCTION TO COUNT LEGS OF ANIMALS IN A FARM");
function CountAnimals(tur,horse,pigs) {
    return ((tur*2)+(horse*4)+(pigs*4))
}
var legs = CountAnimals(10,5,5);
console.log("The total number of legs are :"+legs);
console.log("############################################################");

// FRAMES PER SECONDS
console.log("Q12: CALCULATE FRAMES PER SECONDS")
function frames(num1,num2) {
    return num1*60*num2;
}

var fps = frames(10,20);
console.log("Frames per seconds are :"+fps);
console.log("###############################################################");

// CHECKING IF AN INTEGER IS DIVISIBLE BY 5
console.log("Q13: FUNCTION TO CHECK DIVISIBILITY BY 5")

var arrNum13 = [-55, 22, 30];
function divisibleByFive(arr) {
    if(arr%5 == 0)
    return true;
    else
    return false;
}
var divisible = []
for(var i = 0 ; i < hour7.length; i++)
 {
     divisible.push(divisibleByFive(arrNum13[i]));
     console.log(arrNum13[i]+" is divisible 5 statement is : "+divisible[i]);
 }
 console.log("##########################################################");

//FUNCTION TO CHECK IF A NUMBER IS EVEN

console.log("Q14: FUNCTION TO CHECK IF NUMBER IS EVEN");

var arrNum14 = [-55, 22, 30,0,"11h"];
function isEven(arr) {
    if(typeof(arr) =="number" && arr !=NaN)
     {
         if(arr%2 == 0)
          {
              return true;
          }
          else {return false ; }
     }
     else
      return -1;
    
}
var even = []
for(var i = 0 ; i < arrNum14.length; i++)
 {
     even.push(isEven(arrNum14[i]));
     console.log(arrNum14[i]+" is divisible 5 statement is : "+even[i]);
 }
 console.log("##########################################################");

// ARE BOTH THE NUMBERS ODD
console.log("Q15 : FUNCTION TO CHECK IF BOTH THE NUMBERS ARE ODD OR NOT");
function areBothOdd(num1, num2){
   if(num1%2 != 0 && num2%2!=0 )
    {
        return true;
    }
    else
    return false;
   }
   console.log("Are both numbers odd ? :"+areBothOdd(5,7));
   console.log("Are both numbers odd ? :"+areBothOdd(0,0));
   console.log("Are both numbers odd ? :"+areBothOdd(5,2));
   console.log("Are both numbers odd ? :"+areBothOdd(1,1));

   console.log("####################################################################");







































































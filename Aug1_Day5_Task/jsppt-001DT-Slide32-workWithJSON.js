//https://medium.com/@reach2arunprakash/guvi-zen-code-sprint-javascript-practice-problems-in-json-objects-and-list-49ac3356a8a5

console.log("Q1.Part-A : Playing with JSON object’s Values:");
var cat = {
    name: 'FluffY',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
   let catFriendsTotalWeight = 0;
   console.log(cat);
   cat.weight = 10; // 1.1.added weight
   cat.height =  10; //1.2. added height
   cat.name = 'Fluffyy'; //2. Changed cats name
   for(let i in cat.catFriends)
   {
   console.log("Activities of "+cat.catFriends[i].name+" are :" +cat.catFriends[i].activities); 
   }  //3. List activities of fluffyys cat friends
   for(let i in cat.activities)
   {
   console.log(" Friend of Fluffyy is"+cat.catFriends[i].name);; 
   } //4. Name all of flufffy's friends
   for(let i in cat.catFriends)
   {
    catFriendsTotalWeight = catFriendsTotalWeight+cat.catFriends[i].weight;
   }
   console.log("Total weight of flufffyys friends are :"+catFriendsTotalWeight);//5. Total weight of catfriends

   var allCatsActivities = [...cat.activities]
   for(var i in cat.catFriends)
   {
   allCatsActivities.push([...cat.catFriends[i].activities]);
   }
   console.log("All cats activities are: " ,allCatsActivities); // 6. All cats activities
   for(let i in cat.catFriends)
   {
    cat.catFriends[i].activities.push("running","sleeping");
   }
   console.log(cat.catFriends); // 7. Added two more properties
   cat.catFriends[0].fur = "red";
   console.log("Fur color of bar :"+cat.catFriends[0].fur); // 8. updated fur color of bar

   console.log("Q1.Part B:Iterating with JSON object’s Values. Car accident problem");
   var myCar = {
      make: 'Bugatti',
      model: 'Bugatti La Voiture Noire',
      year: 2019,
      accidents: [
      {
      date: '3/15/2019',
      damage_points: '5000',
      atFaultForAccident: true
      },
      {
      date: '7/4/2022',
      damage_points: '2200',
      atFaultForAccident: true
      },
      {
      date: '6/22/2021',
      damage_points: '7900',
      atFaultForAccident: true
      }
      ]
     }

     for(var i in myCar.accidents)
      {
         myCar.accidents[i].atFaultForAccident = false; //1. Looped over the accidents array. Changed atFaultForAccident from true to false.
         console.log(`Date of ${parseInt(i) +1} :`,myCar.accidents[i].date);
      }
      console.log(myCar);
      console.log("####################################################################################");

      console.log("Q2.Write a function called “printAllValues” which returns an newArray of all the input object’s values.");

      var obj2 = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
   var onlyValues = [];
for(values in obj)
 { onlyValues.push(obj[values]); // Or you can also use : return Object.values(obj)
}
return onlyValues;
}
console.log( printAllValues(obj2));

console.log("####################################################################################");

console.log("Q3.  Print only keys of an object");

var objForOnlyKeys = {
   fName: "Abhijit ",
   mName : "Ray",
   lName: "Mohapatra",
   state: "Odisha",
   age :25,
}
function printAllKeys(obj) {
for(var keys in obj)
{
   return Object.keys(obj); // Also can be done using by iterating the object and pushing the keys one by one in an array and returning it
}
  }
console.log(printAllKeys(objForOnlyKeys));

console.log("########################################################################################################");

console.log("Q4:Write a function called “convertObjectToList” which converts an object literal into an array of arrays. ");
var object4 = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
      var objectIntoArrayList = [];
      for(var property in obj)
       {
          objectIntoArrayList.push([property,obj[property]])          
       }
       return objectIntoArrayList;
  }
console.log(convertListToObject(object4))

console.log("#######################################################################################################################");

console.log("Q5:Parsing a list and transform the first and last elements of it:")

var arr5 = ['GUVI', 'I', 'am', 'a', 'geek'];
function transformFirstAndLast(arr) {
 
   var newObject =  {
      [arr[0]] : arr[arr.length-1]   // Check i better if there is any better and efficient way
   }
 return newObject;
}
var obj5 = transformFirstAndLast(arr5);
console.log(obj5);

console.log("##########################################################################################################################");

console.log("Q6.Parsing a list of lists and convert into a JSON object:");
/*Input (Array):
var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
Output:
var object = {
make : “Ford”
model : “Mustang”,
year : 1964
}*/

var arrForQ6 = [["make", 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
 var newObject6 = {};
  for(var value in arr) 
  {
     newObject6[arr[value][0]] = arr[value][1]
  }
 
 return newObject6;
}
console.log(fromListToObject(arrForQ6));

console.log("####################################################################################");

console.log("Q7: Parsing a list of lists and convert into a JSON object. ")
//SIMILAR TO Q6. Here we need to have an array ob objects
var arrForQ7= [[["firstName", "Vasanth"], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [["firstName" , "Sri"], ["lastName", 'Devi'], ['age', 28], ['role', 'Coder']]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 
   for(var i in arr)
      {var obj7 = {};
       for(j in arr[i])
        {
          obj7[arr[i][j][0]] = arr[i][j][1];
       }  
        tranformEmployeeList.push(obj7);
    }

 return tranformEmployeeList;
}
console.log(transformEmployeeData(arrForQ7));

console.log("#########################################################################################################################");

console.log("Q8:Parsing two JSON objects and Compare:")
/*Read this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Write an “assertObjectsEqual” function from scratch.
Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).

Input:
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
Passed
Failure Case:
Input:var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
FAILED [my test] Expected {“foo”:6,”bar”:5}, but got {“foo”:5,”bar”:6}*/

var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 6 };
var anotherObj = {foo:6 , bar:5};

function assertObjectsEqual(actual, expected, testName) {

    if (JSON.stringify(expected) == JSON.stringify(actual)) {
        console.log(`Passed ${testName} Expected ${JSON.stringify(expected)}, and got ${JSON.stringify(actual)}`);
    } else {
        console.log(`FAILED ${testName} Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`)
    }
}

assertObjectsEqual(actual, expected, "Test1");
assertObjectsEqual(anotherObj, expected, "Test2");

console.log("####################################################################################################################");

console.log("Q9.Parsing JSON objects and Compare:");
// SIMILAR TO Q8.
var securityQuestions = [
   {
   question: 'What was your first pet’s name?',
   expectedAnswer: 'FlufferNutter'
   },
   {
   question: 'What was the model year of your first car?',
   expectedAnswer: '1985'
   },
   {
   question: 'What city were you born in?',
   expectedAnswer: 'NYC'
   }
  ]
  function chksecurityQuestions(securityQuestions,qst,ans,qno) {
  
   if(securityQuestions[qno].question == qst && securityQuestions[qno].expectedAnswer == ans)
      return true
      else
      return false 
  }
  //Test case1:
  var ques1 = 'What was your first pet’s name?';
  var ans  =  'FlufferNutter';
  console.log(chksecurityQuestions(securityQuestions, ques1, ans, 0));
  
  //Test case2:
    var ans  =  'DufferNutter';
   console.log(chksecurityQuestions(securityQuestions, ques1, ans, 0));
 
  var ques3 = "What city were you born in?"
  var ans = 'NYC'
  console.log(chksecurityQuestions(securityQuestions, ques3, ans, 2));

console.log("#######################################################################################################");

console.log("Q10: Parsing JSON objects and Compare: Write a function to return the list of characters below 20 age");
var students = [
  
   {name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
   {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
   {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
   {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
   {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
   {name: 'Devdas',age: 56} 
   ];
  function returnMinors(arr)
  {let minorsStudent = [];
     for(let stud in  students)
      {
         
         if(students[stud].age <20) 
          {
             minorsStudent.push(students[stud].name)
          }
      }
      return minorsStudent;
  }
  console.log(returnMinors(students));

















// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint	//true is to get the data asynchronously;
request.open('GET', "https://restcountries.eu/rest/v2/all", true)
request.send();
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)


console.log(data);
//Filter Array Method;

let asianCountries= data.filter((data1)=>{
	return data1.subregion=="Southern Asia";		//Data is not getting returned when tried using w/o return;
})

console.log(asianCountries);

//Get the countries with population less than 2L - fliter

let popfilter= data.filter((data2)=>{

	return data2.population<200000;
})
console.log(popfilter);

//Hey make population+1L
let bumppop= data.map((data3)=>{
	data3.population+=100000;						//return will only return the var not execution statement;
													//Actual Array gets modified if operation done on Acua Object using Map;
})		//Passing function to array Method/Function;
console.log(bumppop);

let arr1=JSON.parse(this.response);
arr1.forEach(a=> a.population += 100000);		//Using forEach doesnt modify the actual array; 
console.log(arr1);

//Convert all the names in capital
arr1.forEach(a=> a.name = a.name.toUpperCase());
console.log(arr1);

//Print follwoig details  name , capital , flag 
let details =data.map(a=>  [a.name,a.capital,a.flag]);
console.log(details);

//Print the total population of the countries
let sum = data.map((arr)=> (arr.population)).reduce((sum,arr)=> sum+arr);
console.log(sum);

//Print the total population of the countries in asia

let asianPopSum =data.filter(a=>a.region === 'Asia').map(a=> a.population).reduce((sum,arr)=>sum+arr);
console.log(asianPopSum);

}//End of onload Function;
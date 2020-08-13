//https://docs.google.com/document/d/1AB04kg6FD9UuJgfW3P9Ml_Ol9tFCNJRVT2mx4jPKK3U/edit

/*
console.log("Q1. PROGRAM FOR CALCULATOR USING CLASS")

class Calculator {
    constructor(opr1,opr2)
     {
        this.opr1 = opr1;
        this.opr2 = opr2;
     }

 calculation(arr,opcode,opr1,opr2)  //why writting function keyword gives error
 {
     opr1 = this.opr1;
     opr2 = this.opr2;
     switch(opcode)
      {
          case 1:
          return add(opr1,opr2);
          case 2:
          return sub(opr1,opr2);
          case 3:
          return mul(opr1,opr2);
          case 4:
          return div(opr1,opr2);
          case 5:
          return mod(opr1,opr2);
          default:
          return "Please enter valid operational code";
      }
 }
  opr = ["add","sub","mul","div","mod"];
  add(opr1,opr2)
   {
       return opr1+opr2;
   }
   sub(opr1,opr2)
    {return opr1-opr2;}
   mul(opr1,opr2)
    {return opr1*opr2;}
   div(opr1,opr2)
    {return opr1/opr2}
    mod(opr1,opr2)
    {return opr1%opr2;}
    
}

let operation = new Calculator(20,10);
console.log(operation.calculation(this.opr,1,this.opr1,this.opr2));*/
























console.log("#################################################################################");

console.log("Q2. FILTER MOVIES WITH RATING PG")
class Movies
{
    constructor(title,studio,rating="PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        }
    
    
static getPg (arr)
{
    var moviesWithRatingPG = arr.filter((movies) => movies.rating == "PG") // HOW TO GET ONLY TITILE OF MOVIE
    return moviesWithRatingPG;

}
}


var arrayObjectOfMovies = [];
//arrayObjectOfMovies.push(shawshankRedemption = new Movies("Shawshank Redemption","Warner Bros","R")); 
// How to filter when storing objects in this array and passing this array 
// Differenece between  1 2 3 4 declaration
//let shawshankRedemption = new Movies("Shawshank Redemption","Warner Bros","R");
//arrayObjectOfMovies.shawshankRedemption = new Movies("Shawshank Redemption","Warner Bros","R");

arrayObjectOfMovies.push(new Movies("Shawshank Redemption","Warner Bros","R")); //4
arrayObjectOfMovies.push(new Movies("Cashino Royal","EON Productions","PG13"));
arrayObjectOfMovies.push(new Movies("Joker","Warner Bros","R"));
arrayObjectOfMovies.push(new Movies("Batman:The Dark Knight","Warner Bros"));
arrayObjectOfMovies.push(new Movies("Toy Story:4","Pixar Studios","G"));
arrayObjectOfMovies.push(new Movies("Bahuballi: The Beginning","Arka Media Works","PG"));
arrayObjectOfMovies.push(new Movies("Kal Ho Na Ho","Dharma Productions","G"));
console.log(arrayObjectOfMovies)

console.log ("Movies with PG Ratings ", Movies.getPg(arrayObjectOfMovies));
//console.log(pgMovies)

console.log("##########################################################################################");

console.log("Q3. CIRCLE CLASS");

class Circle 
{
    constructor(radius,color)
    {
        if(typeof(radius) == "undefined" && typeof(color) == "undefined")
         {
             console.log("As the inputs are not given, taking the default value as radius 10 and color red")
         }
         else if(typeof(color) == "undefined")
          {
              console.log("As the color is not given , taking the color as red")
              this.radius = radius;
          }
          else
           {
               console.log("All the inputs given are proper");
               this.radius = radius;
               this.color = color
           }
    }
}
var circleObject = [];
circleObject.push(new Circle());
circleObject.push(new Circle(5,));
circleObject.push(new Circle(5,"Orange"));

console.log("####################################################################################################");

console.log("Q4. PART A - PROBLEM ON TV ");

class TV
 {
     constructor(brand,price,inches,status = "ON",channel = 1,volume = 50)
      {
          if(channel <100)
          {
          this.brand = brand;
          this.price = price;
          this.inches = inches;
          this.status = status;
          this.channel = channel;
          this.volume = volume}
      }
        increaseVolume = (volume) => {if(this.volume<=100) 
            {  return ++this.volume; }
            else
            {return this.volume;}
        }
        decreaseVolume =  (volume) => {if(this.volume>0) 
            {  return --this.volume; }
            else
            {return this.volume;}
        }
        setChannel = (channel,newChannelNo) => {if(newChannelNo <=50)
            {   this.channel = newChannelNo;
                return this.channel;}
            else
            {return this.channel;}
         }
         resetTV = () => {this.channel = 1;
                        this.volume = 50;
                    }
        tvStatus = () => {console.log( + this.brand+" at channel "+this.channel+" and volume is at "+this.volume);}
            
    
              
}
      
 let obj1 = new TV("sony",20000,45,"ON",22,50);
 let obj2 = new TV("Panasonic",100000,32,"ON",65,1);
 
 console.log("Volume after increasing :",obj1.increaseVolume(this.volume));
 console.log("Volume after decreasing :",obj1.decreaseVolume(this.volume));
 console.log("Channel after setting :",obj1.setChannel(this.channel,51));
 console.log("Before Reset :");
 obj1.tvStatus()
 obj1.resetTV();
 console.log("After Reset :");
 obj1.tvStatus();

console.log("PART B OF QUESTION 4");
/*class PlasmaTV extends TV
{
    constructor(thickness,energyUsage,lifeSpan,refresRate)
    {
        this.thickness = thickness;
        this.energyUsage = energyUsage;
        this.lifeSpan = lifeSpan;
        this.refresRate = refresRate;

    }
}

var plasmaTV = new PlasmaTV(5,"100kwt","20years","40hz")   //MUST CALL SUPER CONSTRUCTOR. REFERENCE ERROR

console.log(plasmaTV);
 */
























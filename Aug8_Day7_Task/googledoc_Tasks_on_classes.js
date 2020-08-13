//https://docs.google.com/document/d/1AB04kg6FD9UuJgfW3P9Ml_Ol9tFCNJRVT2mx4jPKK3U/edit

class Calc {

    add(x, y) {
        this.x = x;
        this.y = y;
        return this.x + this.y;
    }

    sub(x, y) {
        this.x = x;
        this.y = y;
        return this.x - this.y;
    }

    mul(x, y) {
        this.x = x;
        this.y = y;
        return this.x * this.y;
    }

    div(x, y) {
        this.x = x;
        this.y = y;
        return this.x / this.y;
    }
}


let cal = new Calc();

console.log(cal.add(15, 5)); 
console.log(cal.sub(15, 5)); 
console.log(cal.mul(15, 5)); 
console.log(cal.div(15, 5)); 

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
           getRadius() {
            return this.radius;
        }
    
        getColor() {
            return this.color;
        }
    
        setRadius(rad) {
            this.radius = rad;
        }
    
        setColor(col) {
            this.color = col;
        }
    
        toString(){
            return `Radius : ${this.radius}, Color : ${this.color}`;
        }
    
        getArea(){
            return Math.PI * Math.pow(this.radius, this.radius);
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
class PlasmaTV extends TV
{
    constructor(thickness,energyUsage,lifeSpan,refresRate,viewingAngle,backLight)
    {
        super("panasonic", 15000, 35);
        this.thickness = thickness;
        this.energyUsage = energyUsage;
        this.lifeSpan = lifeSpan;
        this.refresRate = refresRate;
        this.viewingAngle = viewingAngle;
        this.backLight = backLight;

    }
}

var plasmaTV = new PlasmaTV(5,"100kwt","20years","40hz","20 Degree","black")   

console.log(plasmaTV);

console.log("####################################################################################");

console.log("Class structure from the given Banking UML diagram ");
class Bank {
    constructor() {
        this.code = code;
        this.address = address;
        this.customer = customers;
        this.accounts = accounts;
        this.atm = atms;
    }

    manages() { }

    maintains() { }
}


class Customer {
    constructor() {
        this.name = _name;
        this.address = address;
        this.dob = dob;
        this.cardNumber = number;
        this.pin = pin;
        this.account = account;
    }

    VerifyPassword() { }
}


class Account {
    constructor() {
        this.number = number;
        this.balance = balance;
        this.customer = customer;
        this.atmTransactions = atm_transactions;
    }

    Deposit() { }

    Withdraw() { }

    CreateTransaction() { }
}


class ATM {
    constructor() {
        this.location = _location;
        this.managedBy = managed_by;
        this.customer = customer;
        this.account = account;
    }

    Identifies() { }

    Transactions() { }
}


class ATM_Transactions {
    constructor() {
        this.transactionId = id;
        this.date = date;
        this.type = transactionType;
        this.amount = amount;
        this.postBalance = balance;
        this.account = account;
    }

    Modifies() { }
}


class CurrentAccount extends Account {
    constructor() {
        this.accountNumber = number;
        this.balance = balance;
    }

    Withdraw() { }
}


class SavingsAccount extends Account {
    constructor() {
        this.accountNumber = number;
        this.balance = balance;
    }
}

 
























function Ride_Function() { // following along with example function to utilize ternary operator
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
};

function Vote_Function() { // created example function to utilize ternary operator
    var Age, Can_vote
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote.":"You are old enough to vote.";
    document.getElementById("Vote").innerHTML = Can_vote;
};

function Vehicle(Make, Model, Year, Color) { // following along with example to utilize constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
};

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // creating new instances of Vehicle object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); // creating new instances of Vehicle object
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); // creating new instances of Vehicle object

function myFunction() { // displaying object info on HTML webpage
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Dog(Breed, Color, Age, Name) { // created own constuctor function example
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
    this.Dog_Age = Age;
    this.Dog_Name = Name;
};

var Sandy = new Dog("Goldendoodle", "Yellow", 1, "Sandy"); // creating new instance of Dog object

function exampleFunction() { // displaying object info on HTML webpage
    document.getElementById("New_and_This").innerHTML = Sandy.Dog_Name + " is a " + Sandy.Dog_Breed + " who is " + Sandy.Dog_Color + " and " + Sandy.Dog_Age + " year(s) old.";
}

/*
function throw(Thing1, Thing2, Thing3) { // attempting to use reserved word ***known error as required by assignment
    this.Thing_1 = Thing1;
    this.Thing_2 = Thing2;
    this.Thing_3 = Thing3;
};

var Test = new throw("the football", "up", "down"); // attempting to use reserved word ***known error as required by assignment

function errorFunction() { // displaying object info on HTML webpage ***known error as required by assignment
    document.getElementById("reserved").innerHTML = "I'm going to throw" + throw.Thing_1 + ", then throw " + throw.Thing_2 + ", then throw " + throw.Thing_3 + ".";
};
*/

function countdown() { // utilizing nested function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var num = 10;
        function Minus_One() {
            num -= 1;
        };
        Minus_One();
        return num;
    }
}
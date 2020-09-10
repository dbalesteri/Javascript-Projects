function Call_Loop() { //using while loop example
    var Counter = 10;
    var Digit = "";

    while (Counter > 0) {
        Digit += "<br>" + Counter;
        Counter = Counter - 1; 
    };  
    document.getElementById("Loop").innerHTML = Digit;
};


function lengthFunction() { //using .length example
    var userText;
    var answer;
    userText = document.getElementById("userText").value;
    answer = userText.length;
    document.getElementById("answer").innerHTML = answer;
};

function for_Loop() { //using for loop example
    var num = "";
    for (i = 0; i < 11; i++) {
        num = num + "<br>" + i;
    };
    document.getElementById("List_of_Instruments").innerHTML = num;
};

function array_Function() { // display values of an array example, also using "let" keyword instead of var
    let arr = ["yes", "no", "maybe", "so"];
    let display= "";
    for (var i of arr) {
        display += i + " ";
    }
    document.getElementById("Array").innerHTML = display;
};

const myObject = { //creating example const object to be used in following function
    prop1 : "value 1",
    prop2 : "value 2",
};

function constant_Function() { //function that changes property value of const object, and adds a property
    myObject.prop2 = "not value 2 anymore";
    myObject.prop3 = "value 3";
    document.getElementById("Constant").innerHTML = "Here's value of prop1: " + myObject.prop1 + "<br>" + "Here's value of prop2: " + myObject.prop2 + "<br>" + "Here's value of prop3: " + myObject.prop3;
};

function return_Function() { //function that utilizes return
    let display;
    function returnThis() {return "here!"}
    display = returnThis();
    document.getElementById("return").innerHTML = display;
};

let myCreditCard = { //creating example object with properties and a method
    has_chip: true,
    card_number: "[card number classified]",
    CVC_code: "classified",
    transaction: function() {
        return "Sorry, your card: " + this.card_number + ", does not have enough funds for this transaction."
    },
};

function object_Function() { //referencing the example object above to show method in HTML doc
    document.getElementById("method").innerHTML = myCreditCard.transaction();
};

function breakloop_Function() { // funtion with a loop utilizing break
    let display;

    for (let i = 0; i < 4; i++) {
        display = i;
        if (i === 2) {
            break;
        };
    };

    document.getElementById("break").innerHTML = display;
}

function continueloop_Function() { // funtion with a loop utilizing continue
    let display = "";

    for (let i = 1; i < 6; i++) {
        if (i === 2) {
            continue;
        };
        display = display + "<br>" + i;
    };

    document.getElementById("continue").innerHTML = display;
}
var global = "Global Variable"; //assigning a global variable

function test_1() { //function utilizing local and global variable
    var local = "Local Variable"; //assigning a local variable

    var display1 = "Here is a " + global + ", and a " + local;

    document.getElementById("global").innerHTML = display1;
};


function test_2() { // function attempting to use a variable not defined locally in the function, or that is defined globally ***known error as described in assignment
    console.log(local);
    document.getElementById("local").innerHTML = local;
};

function get_Date() { //using conditional statement to get greeting before 6:00pm.
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}

function guessNumber() { // Creating own example of using if, else if, else statements
    var Guess, Answer;
    Guess = document.getElementById("Guess").value;

    if (Guess > 7) {
        Answer = "You guessed: " + Guess + ". Too high, try again!"
    } else if (Guess < 7) {
        Answer = "You guessed: " + Guess + ". Too low, try again!"
    } else {
        Answer = "You guessed: " + Guess + ". Correct, you win!"
    }
    
    document.getElementById("Answer").innerHTML = Answer;
};

function Time_function() { // utilizing Time Function as outlined in assignment
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time < 18) {
        Reply = "It is the afternoon";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
function simpleAddition() { //function of adding 4 and 5 together
    var answer = 4 + 5;

    document.getElementById("Add_Math").innerHTML = answer;
};

function simpleSubtraction() { //function of subtracting 6 - 3
    var answer = 6 - 3;
    document.getElementById("Sub_Math").innerHTML = answer;
};

function simpleMultiplication() { //function of multiplying 9 by 2
    var answer = 9 * 2;

    document.getElementById("Mult_Math").innerHTML = answer;
};

function simpleDivision() { //function of dividing 8 by 1
    var answer = 8 / 1;

    document.getElementById("Div_Math").innerHTML = answer;
}

function simpleMath() { //function utilizing multiple operations without parentheses to show order of operations
    var answer = 2 + 2 * 3 - 6 / 6

    document.getElementById("Math").innerHTML = answer;
}

function simpleRemainder() { //function utilizing modulus operator to show remainder
    var answer = 7 % 3;

    document.getElementById("Mod_Math").innerHTML = answer;
}

function simpleNegation() { //function to show negation
    var answer = 5;

    document.getElementById("Negation").innerHTML = -answer;
}

function simpleIncrement() { //function to show incrementation
    var answer = 0;
    answer++;

    document.getElementById("Increment").innerHTML = answer;
}

function simpleDecrement() { //function to show decrementation
    var answer = 10;
    answer--;

    document.getElementById("Decrement").innerHTML = answer;
}

function randomNum() { //function to show a random whole number less than 100
    var random = Math.floor(Math.random() * 100);

    document.getElementById("Random_Num").innerHTML = random;
}
document.write(typeof 3); //used typeof

function showNaN() { //function to display: NaN

    document.getElementById("Test_1").innerHTML = 0/0;
};

function nanTrue() { //function to display: true
    var answer = isNaN('string');
    document.getElementById("Test_2").innerHTML = answer;
};

function nanFalse() { //function to display: true
    var answer = isNaN(3);
    document.getElementById("Test_3").innerHTML = answer;
};

document.write(3000E3000); //display infinity using too large of numbers/exponents

document.write(-3000E3000); //display negative infinity using too large of numbers/exponents

document.write(3 > 2.999999); //boolean logic to display true

document.write(3 < 2.999999999); //boolean logic to display false

console.log(1 + 1); //utilize console by showing math operation

document.write("twenty" + 2); //use coercion 

console.log(2 > 2); //display false in console

console.log(1 + 1 == 2); //utilize "==" comparison operator to display true in console

console.log(2 + 4 == 3); //utilize "==" comparison operator to display false in console

console.log('yes' === 'yes'); // Return true by ensuring to match the data type and value.

console.log('yes' === 3); // Return false by writing a different data type and different value

console.log("ten" === 10); // Return false by writing a different data type but the same value for both

console.log(5 === 6); // Return false by writing the same data type but a different value for both

console.log(4 > 3 && 2 < 2.1); // display true using AND

console.log(4 > 3 && 2 < 1.9); // display false using AND

console.log(4 > 3 || 2 < 1.9); // display true using OR

console.log(4 > 5 || 2 < 1.9); // display false using OR

function not_Function_1() { // function utilizing Not to show true
    
    document.getElementById('Not_1').innerHTML = !(5 < 3);
};

function not_Function_2() { // function utilizing Not to show false
    
    document.getElementById('Not_2').innerHTML = !(5 > 3);
};


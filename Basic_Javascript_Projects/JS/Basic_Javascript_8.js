function concatFunction() { // utilizing built-in concat method
    var part_1 = "Here is a ";
    var part_2 = "free complete ";
    var part_3 = "sentence.";

    var concatenated = part_1.concat(part_2, part_3);
    document.getElementById("concat").innerHTML = concatenated;
};

function sliceFunction() { // utilizing built-in slice method, and using toUpperCase
    var sentence = "Sandy is my favorite puppy!"
    var section = sentence.slice(0,5);
    var upper = section.toUpperCase();
    document.getElementById("slice").innerHTML = upper;
};

function searchFunction() { // utilizing built-in search method
    var phrase = "Other dogs are cool too."
    var found = phrase.search("dog");
    document.getElementById("search").innerHTML = found;
};

function toStringFunction() { // utilizing built-in toString method
    var num = 30;
    var numAsString = num.toString();
    document.getElementById("toString").innerHTML = numAsString;
};

function toPrecisionFunction() { // utilizing built-in toPrecision method
    var num = 42.35739732476;
    var precise = num.toPrecision(2);
    document.getElementById("toPrecision").innerHTML = precise;
};

function toFixedFunction() { // utilizing built-in toFixed method
    var num = 1.55555555;
    var fixed = num.toFixed(1);
    document.getElementById("toFixed").innerHTML = fixed;
};

function valueOfFunction() { // utilizing built-in valueOf method
    var string = "Here's a string"
    var value = string.valueOf();
    document.getElementById("valueOf").innerHTML = value;
};
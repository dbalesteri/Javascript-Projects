function testFunction() { //defining function to change text to purple
    var str = "Yay for purple text!"; //delcaring variable and assigning value - text to be displayed
    var colored = str.fontcolor("purple") //changing text to purple
    document.getElementById("Purple_Text").innerHTML = colored; //targeting element by ID in html code
};

function testFunction2() { //defining function to concatenate strings
    var sentence = "I enjoy trail running"; //delcare variable and assign value - first half of sentence
    sentence += " in the woods of Pennsylvania!"; //adding second half of sentence onto variable
    document.getElementById("Concatenate").innerHTML = sentence; //targeting element by ID in html
};
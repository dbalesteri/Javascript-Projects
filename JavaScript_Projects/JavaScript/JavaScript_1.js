function color_function() { //function utilizing a switch statement
    let colors = document.getElementById("color_input").value;

    colors = colors.toLowerCase()

    switch(colors) {
        case "red":
            document.getElementById("background").style.backgroundColor = "red";
            document.getElementById("wrong").innerHTML = "";
        break;
        case "green":
            document.getElementById("background").style.backgroundColor = "green";
            document.getElementById("wrong").innerHTML = "";
        break;
        case "blue":
            document.getElementById("background").style.backgroundColor = "blue";
            document.getElementById("wrong").innerHTML = "";
        break;
        case "yellow":
            document.getElementById("background").style.backgroundColor = "yellow";
            document.getElementById("wrong").innerHTML = "";
        break;
        case "orange":
            document.getElementById("background").style.backgroundColor = "orange";
            document.getElementById("wrong").innerHTML = "";
        break;
        case "purple":
            document.getElementById("background").style.backgroundColor = "purple";
            document.getElementById("wrong").innerHTML = "";
        break;
        default:
            document.getElementById("background").style.backgroundColor = "white";
            document.getElementById("wrong").innerHTML = "But you simply must choose from the list above."
    }
}

function classChangeFunction() { //utilizing getElementsByClassName to change multiple elements

    let text = document.getElementsByClassName("changethis");
    text[0].style.color = "green";
    text[1].style.color = "green";

};

//-----------Canvas drawing section-------------

function drawRadialOnCanvas() {

    let canvas = document.getElementById("canvas_1");
    let context = canvas.getContext("2d");
    
    let gradient = context.createRadialGradient(50,30,10,75,30,90);
    gradient.addColorStop(0, "green");
    gradient.addColorStop(1, "purple");

    //fill
    context.fillStyle = gradient;
    context.fillRect(10,10,450,200);

};

function drawLinearOnCanvas() {

    let canvas = document.getElementById("canvas_1");
    let context = canvas.getContext("2d");
    
    let gradient = context.createLinearGradient(0,0,500,200);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "blue");

    //fill
    context.fillStyle = gradient;
    context.fillRect(10,10,450,200);

};

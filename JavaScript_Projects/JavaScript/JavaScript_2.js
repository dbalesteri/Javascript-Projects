function validateForm() { //validating that user has entered in a value for both fields
    let x = document.forms["charcreate"]["charname"].value
    let y = document.forms["charcreate"]["charclass"].value

    if (x == "" || y == "") {
        alert("Character Name and Class must be filled out");
        return false;
    }
}
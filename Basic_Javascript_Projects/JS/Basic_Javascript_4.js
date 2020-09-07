function myDictionary() { //function creating Dictionary with KVPs
    var Story = {
     Setting: "Shire", //Key to be removed
     Protagonist: "Bilbo",
     Antagonist: "Smaug",
     Magic_Item: "The One Ring",
    };

    delete Story.Setting; //Deleting specified Key

    document.getElementById("Dictionary").innerHTML = Story.Setting; //attempting to display key, result will be undefined in HTML webage after HTML event
};

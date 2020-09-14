function displayType(game) { // video game recommender - utilizes get Attribute data
    var gameTitle = game.getAttribute("data-game-type");
    var gameGenre = game.innerHTML
    document.getElementById("displayGame").innerHTML = "A " + gameGenre + " game you might like is: " + gameTitle;
    document.getElementById("gameTrailer").innerHTML = "Watch a trailer here!"

    let trailerLink = "";

    switch(gameTitle) {
        case "Oblivion":
            trailerLink = "https://www.youtube.com/watch?v=qJnnPh44Rlo";
        break;
        case "Metroid Prime":
            trailerLink = "https://www.youtube.com/watch?v=kLfkkSD15zQ";
        break;
        case "Superliminal":
            trailerLink = "https://www.youtube.com/watch?v=_SX8XMwMw6Y";
        break;
        case "Graveyard Keeper":
            trailerLink = "https://www.youtube.com/watch?v=Zd5S5rlKf_M&t=18s";
        break;
        case "Stanley Parable":
            trailerLink = "https://www.youtube.com/watch?v=Z1S796fXtl4";
        break;
        case "Earthbound":
            trailerLink = "https://www.youtube.com/watch?v=vGOEMCG2Ll4";
        break;
        case "Diddy Kong Racing":
            trailerLink = "https://www.youtube.com/watch?v=XXvzvNZYOjc";
        break;
        case "Fire Emblem: Path of Radiance":
            trailerLink = "https://www.youtube.com/watch?v=yGyEj-tzTbA";
        break;
        case "Banjo Kazooie":
            trailerLink = "https://www.youtube.com/watch?v=3wiv-mQPl5M";
        break;
        case "Dark Souls":
            trailerLink = "https://www.youtube.com/watch?v=o1780AqAa20";
        break;
        default:
            trailerLink = "";
    }

    document.getElementById("gameTrailer").href = trailerLink;

}
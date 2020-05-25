var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
function get(id) {
    return document.getElementById(id);
}
window.onload = function () {
    var addBtn = document.querySelector("input[type= button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = get("title");
    game.title = titleInput.value;
    var priceInput = get("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = get("rating");
    game.rating = ratingInput.value;
    var digitalOnly = get("online");
    game.isDigitalOnly = digitalOnly.checked;
    return game;
}
function displayGame(myGame) {
    var displayDiv = get("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notDigitalDisplay = "";
    if (myGame.isDigitalOnly) {
        notDigitalDisplay = "not";
    }
    gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + ". It costs " + myGame.price + ".\n                    It is " + notDigitalDisplay + " digital only.";
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function isAllDataValid() {
    return true;
}

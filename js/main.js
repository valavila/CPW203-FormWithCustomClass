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
}
function isAllDataValid() {
    return true;
}

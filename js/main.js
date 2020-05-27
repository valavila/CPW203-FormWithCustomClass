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
function clearAllErrors() {
    var errSummary = get("validation-summary");
    errSummary.innerText = "";
}
function addVideoGame() {
    clearAllErrors();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
    else {
        displayRatingsLink();
    }
}
function displayRatingsLink() {
    var ratingsElements = document.querySelectorAll(".rating-error");
    for (var i = 0; ratingsElements.length; i++) {
        var currElem = ratingsElements[i];
        currElem.innerHTML += "<a target = _blank href= 'https://www.esrb.org'>Click here for info </a> ";
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
    if (!myGame.isDigitalOnly) {
        notDigitalDisplay = "not";
    }
    gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + ". It costs " + myGame.price + ".\n                    It is " + notDigitalDisplay + " digital only.";
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function getInputById(id) {
    return document.getElementById(id);
}
function isAllDataValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        AddErrorMessage("Title is required");
    }
    var price = getInputById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        AddErrorMessage("Price is required and must be a number");
    }
    var rating = get("rating").value;
    if (rating == "") {
        isValid = false;
        AddErrMsgWithCustomClass("Must choose rating ", "rating-error");
    }
    return isValid;
}
function AddErrorMessage(errMessage) {
    var errSummary = get("validation-summary");
    var errItem = document.createElement("li");
    errItem.innerText = errMessage;
    errSummary.appendChild(errItem);
}
function AddErrMsgWithCustomClass(errMessage, cssClass) {
    var errSummary = get("validation-summary");
    var errItem = document.createElement("li");
    errItem.classList.add(cssClass);
    errItem.innerText = errMessage;
    errSummary.appendChild(errItem);
}

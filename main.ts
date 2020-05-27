class VideoGame{
    title: string;
    price: number;
    rating: string;
    isDigitalOnly: boolean;
}
/**
 * gets element by id
 */
function get(id: string){
    return document.getElementById(id);
}
window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type= button]");
    addBtn.onclick = addVideoGame;
}
/**
 * Clears all errors in the validatin summary
 */
function clearAllErrors(){
    let errSummary = get("validation-summary")
    errSummary.innerText = "";
}

function addVideoGame(){
    clearAllErrors();
    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
    else{
        displayRatingsLink();
    }
}

function displayRatingsLink(){
    let ratingsElements = document.querySelectorAll(".rating-error");
    for(let i = 0; ratingsElements.length ; i++){
        let currElem = ratingsElements[i];
        currElem.innerHTML +=  "<a target = _blank href= 'https://www.esrb.org'>Click here for info </a> ";
    }
}

/**
 * Gets all game data from the form and returns it in a video game object
 */
function getVideoGame():VideoGame{
    //- create game
       let game = new VideoGame(); 
    //- Populate with date from the form
    let titleInput = <HTMLInputElement>get("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>get("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>get("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>get("online");
    game.isDigitalOnly = digitalOnly.checked
    /*if(digitalOnly.checked){
        game.isDigitalOnly = true;
    }
    else{
        game.isDigitalOnly = false;
    }
    */

    //- return game
    return game;
}

/**
 *  Displays game and summary on webpage
 */
function displayGame(myGame: VideoGame):void{
    let displayDiv = get("display");
    // Create h2 with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    
    // Create <p> with game details
    let gameInfo = document.createElement("p");
    let notDigitalDisplay = "";
    if(!myGame.isDigitalOnly){
        notDigitalDisplay = "not"
    }
    //gameInfo.innerText = myGame.title + " has a rating of" + myGame.rating + ". It costs " + myGame.price
     //                   + ". It is " + notDigitalDisplay + " digital only."
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. It costs ${myGame.price}.
                    It is ${notDigitalDisplay} digital only.`;
    // add h2 in the div display
    displayDiv.appendChild(gameHeading);

    // add <p> game info
    displayDiv.appendChild(gameInfo)
    //TODO: display video game before the form

}

function getInputById(id: string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}
/**
 * validates data entered on form and display any error messages
 */
function isAllDataValid(){
    let isValid = true;

    let title = getInputById("title").value
    if(title == ""){
        isValid = false;
        AddErrorMessage("Title is required");
    }

    let price = getInputById("price").value
    let priceValue = parseFloat(price);
    if(price == "" || isNaN(priceValue)){
        isValid = false;
        AddErrorMessage("Price is required and must be a number")
    }

    let rating = (<HTMLOptionElement>get("rating")).value
    if(rating == ""){
        isValid = false;
        AddErrMsgWithCustomClass("Must choose rating ", "rating-error");
    }

    return isValid;
                       

}
/**
 * displays error message on webpage
 */
function AddErrorMessage(errMessage:string) {
    let errSummary = get("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = errMessage;
    errSummary.appendChild(errItem);
}

function AddErrMsgWithCustomClass(errMessage:string, cssClass:string) {
    let errSummary = get("validation-summary");
    let errItem = document.createElement("li");
    errItem.classList.add(cssClass)
    errItem.innerText = errMessage;
    errSummary.appendChild(errItem);
}


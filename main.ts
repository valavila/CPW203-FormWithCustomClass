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
function addVideoGame(){
    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
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


function displayGame(myGame: VideoGame):void{
    let displayDiv = get("display");
    // Create h2 with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    
    // Create <p> with game details
    let gameInfo = document.createElement("p");
    let notDigitalDisplay = "";
    if(myGame.isDigitalOnly){
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

// ADD VALIDATION CODE ********
function isAllDataValid(){
    return true;
}

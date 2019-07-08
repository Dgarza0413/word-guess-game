//Const array wordlist for calling
var wordList = ["former human", "former human sergeant", "former commando", "imp", "demon", "spectre", "lost soul", "cacodemon", "pain elemental", "mancubus", "baron of hell", "hell knight", "revenant", "arch vile", "cyberdemon", "fists", "chainsaw", "shotgun", "chaingun", "rocket launcher", "plasma gun", "bfg"];

var wordListObj = [{
    "name": "former human",
    "image": "jpeg"
},
{
    "name": "former human",
    "image": "jpeg"
}]

var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
var randomWordDisplay = blank.repeat(randomWord.length);

var answerWord = randomWord.split("");


var answerArray = [];

// var gunCock = new Audio('assets/images/DSSGCOCK.WAV')
// var pain = new Audio('assets/images/DSPOPAIN.WAV')
// var gunShot = new Audio('assets/images/DSPISTOL.WAV')

var blank = " ";
var split = randomWordDisplay.split("")

console.log(answerWord)
console.log(split)



//DOM Variables
var lives = document.getElementById("lives");
var box = document.getElementById("box");
var word = document.getElementById("word");
var result = document.getElementById("result");
var testBox = document.getElementById("testBox");
var winScore = document.getElementById("winScore")

//Variables
//decrease counter
var livesMeter = 9;
//Push keys into array
var keyPressed = [];
//limit keyrange
var regex = /^[a-z]$/
var regexSpace = " "
//scorecard for wins
var winCount = 0;
//scorecard for loses
var lostCount = 0;

//Static displays
// word.textContent = randWord;
box.textContent = split.join("");
function gameStart() {

}


//function for gamewin
function gameWin() {
    //If split and answerWord equal each other it causes a win
    if (split.join('') === answerWord.join('')) {
        result.textContent = "RIP AND TEAR!!"
        gameReset();
        winScore.textContent = ++winCount;
    }
}

function gameLoss() {
    if (livesMeter <= 0) {
        pain.play()
        result.textContent = "YOU DOOM IS AT HAND!!";
        gameReset();
        loseScore.textContent = ++lostCount;
    }
}

function gameReset() {
    resultReset.textContent = "more demons are out there!!! Press space to FIGHT!!!"
    letterList.textContent = keyPressed
    console.log("reset game???")
    console.log("press space to continue???")
    if (event.key === " " && event.key.match(regexSpace)) {
        //if i press the space bar all variables and displays are turned back to blank
        keyPressed = [];
        livesMeter = 9
        randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        answerWord = randomWord.split("");
        blank = " ";
        randomWordDisplay = blank.repeat(randomWord.length);
        split = randomWordDisplay.split("")

        //clear the dom elements
        result.textContent = "";
        resultReset.textContent = "";

        //set dom elements with new items
        lives.textContent = livesMeter;
        // word.textContent = randWord;
        box.textContent = split.join("_");
        gunCock.play();
        // console.log(randWord)
        answerWord
        // return answerWord
    }
}

//KeyStrokes
document.onkeypress = function (event) {
    for (var i = 0; i < answerWord.length; i++) {
        if (event.key === answerWord[i]) {
            split[i] = event.key
            gunShot.play();
            box.textContent = split.join("_")
        }
    }
    //checks between the answerWord and keyPressed array that contains the keys for lives lost
    if (answerWord.indexOf(event.key) === -1 && keyPressed.indexOf(event.key) === -1 && event.key.match(regex)) {
        lives.textContent = --livesMeter
        keyPressed.push(event.key)
    }
    //check if win or lose
    if (gameWin() || gameLoss()) { }
    letterList.textContent = keyPressed;
    guessBox.textContent = event.key;
};
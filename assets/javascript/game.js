//Const array wordlist for calling


// var wordList = ["wordone", "wordtwo", "wordthree", "wordfour"];
// var randWord = wordList[Math.floor(Math.random() * wordList.length)];
// //use split to create array from randWord
// var answerWord = randWord.split("");


function randomWord() {
    var wordList = ["wordone", "wordtwo", "wordthree", "wordfour"];
    var randWord = wordList[Math.floor(Math.random() * wordList.length)];
    var answerWord = randWord.split("");
}

function splitWord() {
    var blank = " ";
    var display = blank.repeat(randWord.length);
    var split = display.split("")
}

//DOM Variables
var lives = document.getElementById("lives");
var box = document.getElementById("box");
var word = document.getElementById("word");
var result = document.getElementById("result");
var testBox = document.getElementById("testBox");
var winScore = document.getElementById("winScore")


//Variables
//Create blank space to help match array length of answerWord
var blank = " ";
//Use repeat blank with randWord length to create two equal length array
var display = blank.repeat(randWord.length);
//split blank into array
//THIS VARIABLE CAUSES THE WIN!!
var split = display.split("")
var livesMeter = 5;
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
box.textContent = display;

//function for gamewin
function gameWin() {
    //If split and answerWord equal each other it causes a win
    if (split.join('') === answerWord.join('')) {
        result.textContent = "THE WORD IS COMPLETE!!"
        gameReset();
        winScore.textContent = ++winCount;
    }
}

function gameLoss() {
    if (livesMeter === 0) {
        result.textContent = "YOU LOSE!!";
        gameReset();
    }
}

function gameReset() {
    var livesMeter = 5;
    console.log("reset game???")
    console.log("press space to continue???")
    if (event.key === " ") {
        lives.textContent = livesMeter;
        keyPressed = [];
        randomWord()

    }
}

//KeyStrokes
document.onkeypress = function key(event) {
    for (var i = 0; i < answerWord.length; i++) {
        if (event.key === answerWord[i]) {
            split[i] = event.key
            box.textContent = split.join("_")
        }
    }
    if (gameWin()) { return gameReset() }
    if (gameLoss()) { return gameReset() }
    if (answerWord.indexOf(event.key) === -1 && keyPressed.indexOf(event.key) === -1 && event.key.match(regex)) {
        lives.textContent = --livesMeter
        keyPressed.push(event.key)
    }
    letterList.textContent = keyPressed;
    guessBox.textContent = event.key;
};
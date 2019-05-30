//Const array wordlist for calling
const wordList = ["wordone", "wordtwo", "wordthree", "wordfour"];
const randWord = wordList[Math.floor(Math.random() * wordList.length)];
//split into array
var splitWord = randWord.split("");


//DOM Variables
var lives = document.getElementById("lives");
var box = document.getElementById("box");
var word = document.getElementById("word");
var result = document.getElementById("result");
var testBox = document.getElementById("testBox");


//Variables
//Create blank
var blank = " ";
//Repeat blank
var display = blank.repeat(randWord.length);
//split blank into array
//THIS VARIABLE CAUSES THE WIN!!
var split = display.split("")
var livesMeter = 10;
//Push keys into array
var keyPressed = [];


//Displays
word.textContent = randWord;
box.textContent = display;

function gameWin() {
    for (var i = 0; i < split.length; i++) {
        if (split.join('') === splitWord.join('')) {
            result.textContent = "THE WORD IS COMPLETE!!"
        } else {
            console.log("word is not complete")
        }
    }
}

function gameLoss() {
    if (livesMeter === 0) {
        result.textContent = "YOU LOSE!!"
    }
}

document.onkeydown = function (k) {
    for (var i = 0; i < split.length; i++) {

    }
    //counter to have a condition that tracks duplicates
    lives.textContent = --livesMeter

}

//KeyStrokes
document.onkeypress = function (event) {
    for (var i = 0; i < splitWord.length; i++) {
        if (event.key === splitWord[i]) {
            split[i] = event.key
            box.textContent = split.join("_")
        }
        if (gameWin()) { }
        if (gameLoss()) { return }
    }
    // lives.textContent = --livesMeter
    keyPressed.push(event.key)
    guessBox.textContent = event.key;
    letterList.textContent = keyPressed;
};

//keyPressed to check if correct or not correct


function keyPressedLoop() {
    for (var i = 0; i, keyPressed.length; i++) {
        if (keyPressed[i] === split[i]) {

        }
    }
}

function counter() {

}
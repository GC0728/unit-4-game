// GLOBAL VARIABLES
var amethystCounter = 0;
var citrineCounter = 0;
var moonstoneCounter = 0;
var sapphireCounter = 0;
var userTotal = 0;
var winsCounter = 0;
var lossesCounter = 0;
const winCheck = [];


// CODE FOR GEM VALUE GENERATOR 
var amethystNum = Math.floor(Math.random() * 12) + 1;
console.log(amethystNum);

var citrineNum = Math.floor(Math.random() * 12) + 1;
console.log(citrineNum);

var moonstoneNum = Math.floor(Math.random() * 12) + 1;
console.log(moonstoneNum);

var sapphireNum = Math.floor(Math.random() * 12) + 1;
console.log(sapphireNum);

var winNum = Math.floor(Math.random() * Math.floor(121));
console.log(winNum);

// Single function that accepts the random generated button click number
function handleBtnClick(event) {
    if (event.currentTarget.id === "amethystBtn") {
        userTotal += amethystNum;
        $("#userTally").text(userTotal);
        checkWinCondition(userTotal, winNum);
    }
    if (event.currentTarget.id === "citrineBtn") {
        userTotal += citrineNum;
        $("#userTally").text(userTotal);
        checkWinCondition(userTotal, winNum);
    }
    if (event.currentTarget.id === "moonstoneBtn") {
        userTotal += moonstoneNum;
        $("#userTally").text(userTotal);
        checkWinCondition(userTotal, winNum);
    }
    if (event.currentTarget.id === "sapphireBtn") {
        userTotal += sapphireNum;
        $("#userTally").text(userTotal);
        checkWinCondition(userTotal, winNum);
    }

};

// Compare userScore to winNum for wins/losses counter
// 08/01/2019: counters/reset userScore works, but dynamic text not updating on webpage
function checkWinCondition(score, winningNum) {
    if (score === winningNum) {
        winsCounter += 1;
        console.log(winsCounter);
        userTotal = 0;
        displayStats(winNum, winsCounter, lossesCounter);
    }
    if (score > winningNum) {
        lossesCounter += 1;
        console.log(lossesCounter);
        userTotal = 0;
        displayStats(winNum, winsCounter, lossesCounter);
    }
};

// Function to for dynamic text updates
function displayStats(num1, num2, num3) {
    $("#winScore").text(num1);
    $("#winStyler").text("Wins: " + num2);
    $("#lossStyler").text("Losses: " + num3);
}; 

// STARTS ALL OTHER EVENTS AND FUNCTIONS
$(document).ready(function() {

$("#winScore").text(winNum);

$("#amethystBtn").click(handleBtnClick);
$("#citrineBtn").click(handleBtnClick);
$("#moonstoneBtn").click(handleBtnClick);
$("#sapphireBtn").click(handleBtnClick);

});


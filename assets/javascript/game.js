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

var winNum: Math.floor(Math.random() * Math.floor(121));
console.log(userWin.winNum);
var userWinCondition = userWin.winNum;
console.log(userWinCondition);

// Single function that accepts the random generated button click number
function handleBtnClick(event) {
    if (event.currentTarget.id === "amethystBtn") {
        userTotal += amethystNum;
        $("#userTally").text(userTotal);
    }
    if (event.currentTarget.id === "citrineBtn") {
        userTotal += citrineNum;
        $("#userTally").text(userTotal);
    }
    if (event.currentTarget.id === "moonstoneBtn") {
        userTotal += moonstoneNum;
        $("#userTally").text(userTotal);
    }
    if (event.currentTarget.id === "sapphireBtn") {
        userTotal += sapphireNum;
        $("#userTally").text(userTotal);
    }
};

function checkWinCondition(userTotal, winNum) {
    if (userTotal === winNum) {
        winsCounter++
    }
    if (userTotal > winNum) {
        lossesCounter++
    }
};
// STARTS ALL OTHER EVENTS AND FUNCTIONS
$(document).ready(function() {

$("#winScore").text(winNum);

$("#amethystBtn").click(handleBtnClick);
$("#citrineBtn").click(handleBtnClick);
$("#moonstoneBtn").click(handleBtnClick);
$("#sapphireBtn").click(handleBtnClick);

checkWinCondition
});


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

// var compNum = Math.floor(Math.random() * 120) + 19;
/* console.log(compNum);
 function compNum(max) {
  var userWin = Math.floor(Math.random() * Math.floor(121));
  return Math.floor(Math.random() * Math.floor(121));
}; */

var userWin = {
    winNum: Math.floor(Math.random() * Math.floor(121)),
};
console.log(userWin.winNum);
var userWinCondition = userWin.winNum;
console.log(userWinCondition);



// STARTS ALL OTHER EVENTS AND FUNCTIONS
$(document).ready(function() {

// $("#winScore").html(compNum(" '<p> Winning Score </p>' " + 121));
$("#winScore").html(userWin.winNum);
// BUTTONS
// #id and button click works
$("#amethystButton").click(function() {
    var winCondition = userTotal += amethystNum;
    $("#userTally").html(userTotal);
    winCheck.push(winCondition);
    const forTheWin = (accumulator, currentValue) => accumulator + currentValue;
    console.log(winCheck.reduce(forTheWin));
    var doYouWin = winCheck.reduce(forTheWin);
//    wincheck();
});

$("#citrineButton").click(function() {
    userTotal += citrineNum;
    $("#userTally").html(userTotal);
    winCheck.push(winCondition);
    const forTheWin = (accumulator, currentValue) => accumulator + currentValue;
    console.log(winCheck.reduce(forTheWin));
    var doYouWin = winCheck.reduce(forTheWin);
});

$("#moonstoneButton").click(function() {
    userTotal += moonstoneNum;
    $("#userTally").html(userTotal);
    winCheck.push(winCondition);
    const forTheWin = (accumulator, currentValue) => accumulator + currentValue;
    console.log(winCheck.reduce(forTheWin));
    var doYouWin = winCheck.reduce(forTheWin);
});

$("#sapphireButton").click(function() {
    userTotal += sapphireNum;
    $("#userTally").html(userTotal);
    winCheck.push(winCondition);
    const forTheWin = (accumulator, currentValue) => accumulator + currentValue;
    var doYouWin = winCheck.reduce(forTheWin);
});

//  **COULD NOT COMPLETE GAME WIN CONDITION LOGIC**
    if (doYouWin === userWinCondition) {
        alert("You suck!")
    }
});


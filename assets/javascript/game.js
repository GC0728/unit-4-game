// GLOBAL VARIABLES
//document.ready(function() {


var amethystCounter = 0;
var citrineCounter = 0;
var moonstoneCounter = 0;
var sapphireCounter = 0;

var userTotal = 0;


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
 console.log(compNum);
function compNum(max) {
  return Math.floor(Math.random() * Math.floor(121));
};
$("#winScore").html(compNum(" '<p> Winning Score </p>' " + 121));
// WIN CONDITION SCORE
$("#winScore").html(compNum);

// BUTTONS
// #id and button click works
$("#amethystButton").click(function() {
    userTotal += amethystNum;
    $("#userTally").html(userTotal);
    
//    wincheck();
});

$("#citrineButton").click(function() {
    userTotal += citrineNum;
    $("#userTally").html(userTotal);
 //   alert(citrineTotal);
});

$("#moonstoneButton").click(function() {
    userTotal += moonstoneNum;
    $("#userTally").html(userTotal);
 //   alert(moonstoneTotal);
});

$("#sapphireButton").click(function() {
    userTotal += sapphireNum;
    $("#userTally").html(userTotal);
  //  alert(sapphireTotal);
});

// NOT WORKING
/*function amethystInsert(amethystClick) {
    var amethystClick = document.getElementById('amethystButton');
    return amethystNum;
};
console.log(amethystClick); */

// FUNCTION TO CREATE GAME WIN NUMBER
/* THIS DOESN'T WORK
function compNum2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
};
console.log(compNum2);
*/

/* var compNum = Math.floor(Math.random()*101) + 19         THIS WORKS
console.log(compNum); */

// CONSOLE LOGS BOOLEAN
// var compNumLim = (compNum <= 120);
// console.log(compNumLim);

var winsCounter = 0;
var lossesCounter = 0;
// FUNCTION TO ADD TO WINS/LOSSES
// $(".class").on("click", function() {

// LOGIC

// On "click" <button> event, insert random number and add random number to current user score
//window.onclick = function(gem1, gem2, gem3, gem4) {
// PUT THIS IN THE DIV CONTAINER, USE #iD SELECTOR
 //    var clickAmethyst = amethyst.click;
   //  console.log(clickAmethyst);
 // DON'T NEED, IT'S THE GEM BUTTONS THAT NEED TO CLICK TO GENERATE NUMBERS    
 /*    document.onclick = function(event) {
    var eventClick = event.click;
    console.log(eventClick); */
 

// MAIN PROCESS


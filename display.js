// NOTE: depends on game.js

var game = null;

function setup(){
    var width = 100;
    var height = 100;
    game = createGameState();
    frameRate(2);
    createCanvas(width, height); 
}

function draw(){
    
}

var pointSize = 10;
var pointSpacing = 20;
var colors = [
    "#3f51b5",
    "#03a9f5",
    "#ea1e63",
    "#fec107"
];

function drawPoint(x,y,colorIndex){
    console.log(`drawPoint: ${keyCode}`);
}

function keyPressed() {
    console.log(`keyPressed: ${keyCode}`);
}
// NOTE: depends on game.js
var game = null;

function setup(){
    var width = 400;
    var height = 400;
    game = createGameState();
    frameRate(2);
    createCanvas(width, height); 
}

function draw(){
    background("yellow");
    drawGameState(game);
}

// converts logical grid into physical display
function drawPoint(x,y,colorIndex){
    ellipse(
        x * pointSpacing + margin,
        y * pointSpacing + margin,
        pointSize);
}

// physical units
var pointSize = 40;
var pointSpacing = 50;
var margin = 50;
var colors = [
    "#3f51b5",
    "#03a9f5",
    "#ea1e63",
    "#fec107"
];

function keyPressed() {
    console.log(`keyPressed: ${keyCode}`);
}
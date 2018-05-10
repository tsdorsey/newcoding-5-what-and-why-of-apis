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
    fill("red");
    drawPoint(0,0);
    fill("blue");
    drawPoint(1,0);
    fill("green");
    drawPoint(2,0);
    drawPoint(3,0);
    drawPoint(1,1);
    drawPoint(2,1);
    drawPoint(3,1);
}

// converts logical grid into physical display
function drawPoint(x,y,colorIndex){
    ellipse(
        x * pointSpacing,
        y * pointSpacing,
        pointSize);
}

// physical units
var pointSize = 10;
var pointSpacing = 20;
var colors = [
    "#3f51b5",
    "#03a9f5",
    "#ea1e63",
    "#fec107"
];

function keyPressed() {
    console.log(`keyPressed: ${keyCode}`);
}
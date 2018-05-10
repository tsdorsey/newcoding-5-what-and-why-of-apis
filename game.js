// functions

function createGameState(){
    var game = {};
    game.playerX = 5;
    game.playerY = 5;

    var grid = [];
    grid.push([1,1,1,1,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,1,1,1,1]);

    game.grid = grid;

    return game;

}
function createEmptyGrid(){}
function createLevel(){}
function setRandomCoin(){}

function drawGameState(game){
    // draw the player
    fill("red");
    drawPoint(game.playerX, game.playerY);
}

function updateGameState(){}
function addNextCoin(){}
function handleKeyboard(){}
function checkPlayerPosition(){}
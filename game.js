// functions

function createGameState(){
    var game = {};
    game.playerX = 5;
    game.playerY = 5;

    var grid = [];
    grid.push([1,1,1,1,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,0,0,0,1]);
    grid.push([0,0,0,0,0]);
    grid.push([1,0,0,0,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,1,1,1,1]);

    game.grid = grid;

    game.rows = grid.length;
    game.cols = grid[0].length;

    return game;

}
function createEmptyGrid(){}
function createLevel(){}
function setRandomCoin(){}

function drawGameState(game){
    // draw the walls
    for(var c = 0; c < game.cols; c++){
        for(var r = 0; r < game.rows; r++){
            drawPoint(c, r, game.grid[r][c]);
        }    
    }
    
    // draw the player
    fill("red");
    drawPoint(game.playerX, game.playerY,2);

}

function updateGameState(){}
function addNextCoin(){}
function handleKeyboard(){}
function checkPlayerPosition(){}
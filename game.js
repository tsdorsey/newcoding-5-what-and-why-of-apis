// functions

function createGameState(){
    var game = {};

    game.isDead = false;
    game.playerX = 2;
    game.playerY = 2;

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

function updateGameState(game){
    // check if player hit wall
    var x = game.playerX;
    var y = game.playerY;
    if (game.grid[y][x] == 1) game.isDead = true;
}

function addNextCoin(){}
function handleKeyboard(){}
function checkPlayerPosition(){}
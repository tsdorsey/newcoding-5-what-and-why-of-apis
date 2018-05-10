## Great job, students.

I know we went fast last night, and it may not have felt super awesome doing so much copying from my repo.  However, the good news is that we covered enough concepts for you to make a legit game.

Your assignment this week is to add more features to your game.  I'd like you to add at least 5 new features to your game.

**Q: What if you get stuck?**
A: Push your code (even if it's broken) to GitHub and then message the group on Discord.  There are lots of mentors that would be happy to help you debug your code.

What follows is a list of ideas with a few tips on how to get started with each one.

#### Bigger, More Interesting Levels
Instead of a 5x7 grid, try something like 24x32.  In order to fit that on your screen, you'll have to adjust the values of pointSize and pointSpacing.

#### Code-Generated Levels
Use loops and if-statements to generate your level.

#### Multiple Levels
After collecting a certain number of coins, reset the game state with a new level.  To do this, consider replacing the code about the grid with a function that might look like the following:

```
function loadLevel(level){
  if (level == 1){
    var grid = [];
    // FILL THIS IN
    return grid;
  }

  if (level == 2){
    var grid = [];
    // FILL THIS IN
    return grid;
  }
}
```

#### Randomly-Placed Walls
Randomly pick a point and then extend it vertically or horizontally several units.

#### Player Moves Without Individual Key Press
Right now, the playerX and playerY only change when you press an arrow key.  Instead, have the arrow keys change properties named speedX and speedY.  Then, when you update the game state, you can change  playerX and playerY on the basis of speedX and speedY.

#### More Coins
Instead of a single coin, use arrays to place several coins on the grid.

#### Disappearing Coin
The coin randomly moves to a new spot every 5 seconds.

#### Full Screen
Check out the p5 documentation.  :-)

#### Dumb Enemy
Make a dumb enemy (think about adding enemyX and enemyY to the game state) that slowly moves around the screen at random.  If the enemy hits you, you die.  If the enemy hits the coin, you lose points.

#### Coin-Chasing Enemy
Compare the enemy coordinates with the coin coordinates and slowly move your enemy toward the coin.

#### Player-Chasing Enemy
Same idea as the coin-chasing enemy except that it chases you.

#### Multiple Enemies
Use arrays to track and display multiple enemies.

#### Time Limit
Check on the p5 documentation for ways to measure elapsed time.  Maybe you have 30 seconds to score as many points as possible.  Just like we did with the text, display time remaining on a different part of the canvas.

#### Time Limit + Extension
Each time you collect a coin, your time limit is extended.

#### Lasers (More Advanced)
You can shoot lasers in front of you by pressing SPACEBAR.  Doing so would kill any enemy.  Add a property such as laserCharge which must be at 100 in order to fire the laser.  After you fire the laser, the charge goes back to zero and recharges over time.  To do so, you can add a little more charge each time you update the game state, up to a maximum of 100.

Killing the enemies would require knowing the direction of your player (probably determined by speedX and speedY but there are other ways you could represent it).  You might want to make your player "dot" a triangle which could indicate direction.   If anyone wants to do this, I can answer questions in Discord.

#### Snake Tail
Each time you eat a coin, you grow a tail that gets longer.  To do this, you could make a new grid that similar to the "wall" grid we created.  Each time a player is at a position, you set the value at those coordinates to the length of the snake.  On each update, simply decrement (subtract one) from each value.  Values less than zero mean the snake's body is no longer there.  If anyone wants to do this, I can answer questions in Discord.

#### Walls Don't Kill
Instead of killing the player, they are just a boundary.  In the code where you change the player's position, you'd simply have to first check if that new position is a wall.  If it is a wall, then don't change the player's position.

#### PacMan (Advanced)
Although it might seem crazy, it wouldn't take that many new lines of code to implement something really full level of PacMan.

First, you'd want a larger logical grid.  On that same grid where we said 1 is a wall and 0 is empty, you could add 2 as a pellet and 3 as a big power pellet.  You could add enemies that randomly wander the map by changing directions when they hit a wall.

When you eat the power pellet, colliding with enemies wouldn't kill you but instead reset them.

If anyone wants to do this, I can answer questions in Discord.

#### Level Editor
You'd probably copy this as a separate project, but use what we learned in week 2 about mouse coordinates.  Clicking could toggle between a wall and the background.  You could print out a string with JavaScript that you could then paste into your main game.

#### Sound
Figure out how to use the sound library (https://p5js.org/reference/#/libraries/p5.sound) to add sound.

#### Color Matching Game (Advanced)
Use the basic concepts from class to build an entirely different kind of game.  Color matching games are relatively simple using the ideas of a grid and a game state.

If anyone wants to do this, I can answer questions in Discord.

#### Tetris Game (Advanced)
Another good grid game.
If anyone wants to do this, I can answer questions in Discord.

#### Minesweeper (Advanced)
Another good grid game.
If anyone wants to do this, I can answer questions in Discord.

#### Sudoku (Advanced)
Another good grid game.
If anyone wants to do this, I can answer questions in Discord.

#### Reversi, Checkers, Chess (Advanced)
Lots of good grid board games.
If anyone wants to do this, I can answer questions in Discord.

#### Spaceship Game (Advanced)
Maybe the basic game state isn't a grid, but you'd still likely use an array to keep track of enemies and bullets.
If anyone wants to do this, I can answer questions in Discord.


...the possibilities are truly endless.

Recommended tutorials that will use a similar approach:

#### Breakout
https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

#### Color-matching game
http://codingwithsara.com/javascript-canvas-game-tutorial/

**Q: Why didn't we use a game framework and make a cooler game?**
A: My goal is to teach the fundamentals, especially the concepts of the relationship between game state, user input and the display.  Those ideas are critical for working on any type of game within any game framework.  I also thought it would be valuable to build on what we learned last week with p5.
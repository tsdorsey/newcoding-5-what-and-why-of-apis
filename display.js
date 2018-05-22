var game = null;
var lastFrameTime = null;
var view = {
  width: 30,
  height: 30,
  scale: 30,
};
var pressedKeys = trackInput();

function setup() {
  lastFrameTime = Date.now();
  frameRate(30);
  createCanvas(view.width * view.scale, view.height * view.scale);

  game = createGame(view);
}

function draw() {
  var now = Date.now();
  var elapsed = now - lastFrameTime;

  game.updateState(elapsed, pressedKeys);
  game.draw(view);

  lastFrameTime = now;
}

var keyTracker = {};
var keymap = {
  37: 'player_0_left',
  38: 'player_0_up',
  39: 'player_0_right',
  40: 'player_0_down',

  65: 'player_1_left',
  87: 'player_1_up',
  68: 'player_1_right',
  83: 'player_1_down',
};

function trackInput() {
  return keyTracker;
}

function keyPressed() {
  var code = String(keyCode);
  console.log('keyPressed', code);
  var keyName = keymap[code];
  if (!keyName) {
    return;
  }
  keyTracker[keyName] = true;
}

function keyReleased() {
  var code = String(keyCode);
  console.log('keyReleased', code);
  var keyName = keymap[code];
  if (!keyName) {
    return;
  }
  delete keyTracker[keyName];
}

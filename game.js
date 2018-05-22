// functions

function createGame(config) {
  var level = getLevel(config, getPlayers(2));
  return level;
}

function getPlayers(count) {
  var players = [];
  for (var pI = 0; pI < count; pI++) {
    players.push(makePlayer(pI));
  }
  return players;
}

function getLevel(config, players) {
  var levelApi = makeLevelApi(config);

  var state = {
    time: 0,
  };

  var apiUpdate = levelApi.updateState;
  levelApi.updateState = function(elapsed, pressedKeys) {
    apiUpdate(elapsed, pressedKeys);
    // TODO: Spawn enemies.
    // TODO: Check countown timer.
    // TODO: Check for player death.
    // TODO: Check score.

    state.time += elapsed;
  };

  // Add the players to the object map.
  for (var pI = 0; pI < players.length; pI++) {
    levelApi.addItem(players[pI]);
  }

  // TODO: Add or load level objects here.

  // Make some coins.
  for (var cI = 0; cI < 15; cI++) {
    levelApi.addItem(makeCoin());
  }

  // Make some goblins.
  for (var cI = 0; cI < 3; cI++) {
    levelApi.addItem(makeGoblin());
  }

  return levelApi;
}

function makeLevelApi(config, initialItems) {
  var itemMap = {};

  function openSpot(itemRadius) {
    var items = Object.values(itemMap);

    for (var sI = 0; sI < 999; sI++) {
      var x = random(config.width);
      var y = random(config.height);

      var collided = false;
      for (var cI = 0; cI < items.length; cI++) {
        collided = items[cI].isColliding({ x, y }, itemRadius);
        if (collided) {
          break;
        }
      }

      if (!collided) {
        return { x, y };
      }
    }

    return false;
  }

  function removeItem(id) {
    var item = itemMap[id];
    if (item) {
      item.destroyed();
      delete itemMap[id];
    }
  }

  function addItem(item, pos) {
    var id = item.type + Math.random();
    if (!pos) {
      pos = openSpot(item.getRadius());
      if (pos === false) {
        console.error('Failed to get an open position for', id);
        return;
      }
    }

    var toRemove = function() {
      removeItem(id);
    };

    itemMap[id] = item;
    item.spawn(id, pos, toRemove);
    item.spawned();
  }

  function updateState(elapsed, pressedKeys) {
    var items = Object.values(itemMap);

    // Update all item states.
    for (var i = 0; i < items.length; i++) {
      items[i].updateState(elapsed, pressedKeys, items);
    }

    // do level bounds collision checks.
    for (var i = 0; i < items.length; i++) {
      var pos = items[i].getPosition();
      var rad = items[i].getRadius();

      if (pos.x - rad < 0) {
        pos.x = rad;
      }
      if (pos.x + rad > config.width) {
        pos.x = config.width - rad;
      }
      if (pos.y - rad < 0) {
        pos.y = rad;
      }
      if (pos.y + rad > config.height) {
        pos.y = config.height - rad;
      }
      items[i].setPosition(pos);
    }

    // do internal collision checks.
    for (var i = 0; i < items.length; i++) {
      for (var o = i + 1; o < items.length; o++) {
        if (
          items[i].isColliding(items[o].getPosition(), items[o].getRadius())
        ) {
          items[i].didCollide(items[o]);
          items[o].didCollide(items[i]);
        }
      }
    }
  }

  function draw(view) {
    var items = Object.values(itemMap);
    background(color(240, 240, 240));
    for (var dI = 0; dI < items.length; dI++) {
      items[dI].draw(view);
    }
  }

  return { updateState, draw, addItem };
}

function makeItemApi(type) {
  var state = {
    type: type,
    radius: 0.5,
    posX: 0,
    posY: 0,
  };

  // To be overridden.
  function spawned() {}
  function destroyed() {}
  function updateState(elapsed, pressedKeys, items) {}
  function draw(view) {}
  function didCollide(other) {}
  function isColliding(otherPos, otherRadius) {
    return false;
  }

  // To be used as is.
  function spawn(id, pos, destroyCallback) {
    state.id = id;
    setPosition(pos);
    state.destroyCallback = destroyCallback;
  }
  function id() {
    return state.id;
  }
  function destroy() {
    state.destroyCallback();
  }
  function getRadius() {
    return state.radius;
  }
  function getPosition() {
    return { x: state.posX, y: state.posY };
  }
  function setPosition(pos) {
    state.posX = pos.x;
    state.posY = pos.y;
  }

  return {
    state: state,
    api: {
      type,
      spawned,
      destroyed,
      spawn,
      updateState,
      destroy,
      draw,
      didCollide,
      id,
      getRadius,
      getPosition,
      setPosition,
      isColliding,
    },
  };
}

function makePlayer(number) {
  var maxVel = 1 / 3000;

  var item = makeItemApi('player');
  var state = item.state;
  var api = item.api;

  state.radius = 1;
  state.velX = 0;
  state.velY = 0;

  function move(elapsed, pressedKeys) {
    var pos = api.getPosition();
    pos.x += state.velX * elapsed;
    pos.y += state.velY * elapsed;
    api.setPosition(pos);

    if (pressedKeys[`player_${number}_left`]) {
      state.velX = maxVel * elapsed * -1;
    } else if (pressedKeys[`player_${number}_right`]) {
      state.velX = maxVel * elapsed;
    } else {
      state.velX = 0;
    }

    if (pressedKeys[`player_${number}_up`]) {
      state.velY = maxVel * elapsed * -1;
    } else if (pressedKeys[`player_${number}_down`]) {
      state.velY = maxVel * elapsed;
    } else {
      state.velY = 0;
    }
  }

  api.updateState = function(elapsed, pressedKeys, items) {
    move(elapsed, pressedKeys);
  };

  api.isColliding = function(otherPos, otherRadius) {
    var pos = api.getPosition();
    var radius = api.getRadius();
    return (
      Math.pow(otherPos.x - pos.x, 2) + Math.pow(otherPos.y - pos.y, 2) <=
      Math.pow(otherRadius + radius, 2)
    );
  };

  api.didCollide = function(other) {
    console.log(other.type);
    switch (other.type) {
      case 'coin':
        other.destroy();
        break;
      case 'goblin':
        api.destroy();
        break;
    }
  };

  api.draw = function(view) {
    var pos = api.getPosition();
    fill(0);
    ellipse(
      pos.x * view.scale,
      pos.y * view.scale,
      api.getRadius() * view.scale * 2
    );
  };

  return api;
}

function makeCoin() {
  var item = makeItemApi('coin');
  var state = item.state;
  var api = item.api;

  api.draw = function(view) {
    var pos = api.getPosition();
    fill('gold');
    ellipse(
      pos.x * view.scale,
      pos.y * view.scale,
      api.getRadius() * view.scale * 2
    );
  };

  return api;
}

function makeGoblin() {
  var item = makeItemApi('goblin');
  var state = item.state;
  var api = item.api;

  api.draw = function(view) {
    var pos = api.getPosition();
    fill('red');
    rectMode(CENTER);
    rect(
      pos.x * view.scale,
      pos.y * view.scale,
      api.getRadius() * view.scale * 2,
      api.getRadius() * view.scale * 2
    );
  };

  api.didCollide = function(other) {
    console.log(other.type);
    switch (other.type) {
      case 'player':
        state.radius += 0.3;
        break;
    }
  };

  return api;
}

const attributes = ['', 'name'];

function displayRemoveChildren(node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
}

function addNode(tag, parent) {
  var node = document.createElement(tag);
  if (parent && parent.appendChild) {
    parent.appendChild(node);
  }
  return node;
}

function addText(text, parent) {
  var node = document.createTextNode(text);
  if (parent && parent.appendChild) {
    parent.appendChild(node);
  }
  return node;
}

function doSearch() {
  var outputDiv = document.querySelector('#search-results');
  displayRemoveChildren(outputDiv);

  var query = document.querySelector('#search-input').value;

  if (query.length < 2) {
    addText('Enter a longer query', outputDiv);
    return;
  }

  addText(`Searching for ${query}...`, outputDiv);

  searchByName(query)
    .then(function(results) {
      var pokemon = [];
      for (var pI = 0; pI < results.length; pI++) {
        var name = results[pI][1];
        pokemon.push(getPokemon(name));
      }
      return Promise.all(pokemon);
    })
    .then(function(pokemons) {
      var message = `Found ${pokemons.length} results for ${query}`;

      displayRemoveChildren(outputDiv);
      addText(message, outputDiv);
      outputDiv.appendChild(displayPokemonList(pokemons));
    });
}

function displayPokemonList(pokemons) {
  var table = addNode('table');
  var head = addNode('thead', table);
  var body = addNode('tbody', table);

  for (var aI = 0; aI < attributes.length; aI++) {
    var th = addNode('th', head);
    addText(attributes[aI], th);
  }

  for (var pI = 0; pI < pokemons.length; pI++) {
    var tr = addNode('tr', body);

    var imgUrl = pokemons[pI].sprites.front_default;
    if (!imgUrl) {
      imgUrl = 'missing.png';
    }
    var img = addNode('img', addNode('td', tr));
    img.src = imgUrl;

    for (var aI = 1; aI < attributes.length; aI++) {
      addText(pokemons[pI][attributes[aI]], addNode('td', tr));
    }
  }

  return table;
}

function displayMakeTeam() {}
function displayDeleteTeam(teamId) {}

function displayPokemonTeams() {}
function displayPokemonTeam(team) {}

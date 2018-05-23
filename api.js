var pd = new Pokedex.Pokedex({
  protocol: 'https',
  timeout: 20 * 1000,
});

var teamTable = 'ptb_teams';
if (!localStorage.getItem(teamTable)) {
  localStorage.setItem(teamTable, JSON.stringify({}));
}

function getPokemon(id) {
  return pd.getPokemonByName(id);
}

function searchByName(query) {
  return pd.getPokemonsList().then(function(res) {
    var matches = [];

    for (var pI = 0; pI < res.results.length; pI++) {
      var pokemon = res.results[pI];
      var score = 0;
      if (pokemon.name.includes(query)) {
        score += 1;
        score += query.length / pokemon.name.length;
      }
      if (pokemon.name.startsWith(query)) {
        score += 1;
      }

      if (score > 0) {
        matches.push([score, pokemon.name]);
      }
    }

    matches.sort();
    matches.reverse();

    return matches;
  });
}

function createTeam(name) {}
function getTeams() {}
function getTeam(id) {}
function deleteTeam(id) {}
function editTeam(id, name) {}

function addToTeam(teamId, pokemonId) {}
function removeFromTeam(teamId, pokemonId) {}

function resetPokemonTable() {
  localStorage.removeItem(pokemonTable);
}
function resetTeamTable() {
  localStorage.removeItem(teamTable);
}
function resetAllTables() {
  resetPokemonTable();
  resetTeamTable();
}

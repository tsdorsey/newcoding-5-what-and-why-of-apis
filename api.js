const pd = new Pokedex.Pokedex({
  protocol: 'https',
  timeout: 15 * 1000,
});

function getAllPokemon() {}
function getPokemon(id) {}
function searchByName(query) {}

function createTeam(name) {}
function getTeams() {}
function getTeam(id) {}
function deleteTeam(id) {}
function editTeam(id, name) {}

function addToTeam(teamId, pokemonId) {}
function removeFromTeam(teamId, pokemonId) {}

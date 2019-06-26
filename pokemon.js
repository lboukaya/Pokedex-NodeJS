var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

P.getPokemonByName(1, function (response, error) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});


P.getPokemonsList({
  limit: 151,
  offset: 0
}, (response) => console.log(response));
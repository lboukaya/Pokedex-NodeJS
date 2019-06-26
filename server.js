var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.render('Pokedex');
})
app.get('/:pokemonName', function(req, res){
    res.render('Pokedex', {pokemon: req.params.pokemonName});
})
app.listen(3000, function(){
    console.log('Server Ready');
})
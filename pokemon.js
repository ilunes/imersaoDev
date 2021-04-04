var bulbasaur = {
  nome: "Bulbasaur" ,
  link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
}
var charmander = {
  nome: "Charmander" ,
  link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
}
var squirtle = {
  nome: "Squirtle" ,
  link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
}
var pikachu = {
  nome: "Pikachu" ,
  link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
}

var pokemons = [bulbasaur, charmander, squirtle, pikachu]
var aleatorio

function sortear(){
  aleatorio = parseInt(Math.random()*pokemons.length)
  //console.log(aleatorio)
  var divPokemon = document.getElementById('pokemon')
  html = "<img class='pokemon' src='" + pokemons[aleatorio].link + "'></br>"
  html+= "<label for='palpite'>Qual é esse Pokémon?</label><br>"
  html+= "<input type='text' id='digitado' name='input' placeholder='Digite aqui'>"
  html+= "<input type='submit' value='Verificar' onclick='testar()'/>"
  divPokemon.innerHTML = html
  document.getElementById('resultado').innerHTML = ''
  
}

function testar(){
  var teste = document.getElementById('digitado').value.toLowerCase();
  var h2 = document.getElementById('resultado')
  var html = '';
  if(pokemons[aleatorio].nome.toLowerCase()==teste){
    html = '<h1>Acertou !!!</h1>'
  }else {
    html = '<h1>Errado !!!</h1>'
  }
  h2.innerHTML = html
}
/*
document.querySelector('html').onclick = function() {
  var pokemon = prompt('Qual o nome desse pikachu ??').toLowerCase();
  if (pokemon == "pikachu"){
    alert("Acertou miseravi!! ")
  }else {
    alert("Não foi dessa vez!\nClique na tela para tentar denovo")
  }
} 
//quando clica na página
*/

var jogo0 = {
  nome: "Terraria",
  linkImg: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1590092560",
  atributos:{
    preco: 19.99,
    analiseTotal: 713015,
    analisePorcento: 97,
    //dataLancamento: "16/mai/2011"
  },
}
var jogo1 = {
  nome: "Portal 2",
  linkImg: "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg?t=1610490805",
  atributos:{
    preco: 20.69,
    analiseTotal: 240963,
    analisePorcento: 98,
    //dataLancamento: "19/abr/2011"
  }
}
var jogo2 = {
  nome: "Counter-Strike: Global Offensive",
  linkImg: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1612812939",
  atributos:{
    preco: 0,
    analiseTotal: 5425116,
    analisePorcento: 88,
    //dataLancamento: "21/ago/2012"
  }
}
var cartaMaquina
var cartaJogador
var jogos = [jogo0, jogo1, jogo2]

function sortearCarta(){
  var numCartaJogador = parseInt(Math.random()*jogos.length)
  var numCartaMaquina = parseInt(Math.random()*jogos.length)
  while(numCartaJogador == numCartaMaquina){
    var numCartaMaquina = parseInt(Math.random()*jogos.length)
  }
  cartaJogador = jogos[numCartaJogador]
  cartaMaquina = jogos[numCartaMaquina]
  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false
  opcoes()
  imagemJogador()
  console.log(cartaJogador)
}
function imagemJogador(){
  var link = document.getElementById("imagemJogador")
  var imagem = '<img id="imagemJogador" name="imagemJogador" src="'+ cartaJogador.linkImg +'">'
  link.innerHTML = imagem
}
function imagemMaquina(){
  var link = document.getElementById("imagemMaquina")
  var imagem = '<img id="imagemMaquina" name="imagemMaquina" src="'+ cartaMaquina.linkImg +'">'
  link.innerHTML = imagem
}

function opcoes(){
  var listarAtributos = document.getElementById("opcoes")
  var opcoesHTML = ""
  for (var atributo in cartaJogador.atributos){
    opcoesHTML += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  listarAtributos.innerHTML = opcoesHTML
}

function obterAtributoRadio(){
  var radio = document.getElementsByName('atributo')
  for(i = 0; i < radio.length; i++){
    if(radio[i].checked){
      return radio[i].value
    }
  }
}
function resultado(atributoRadio){
  var resultado = document.getElementById("resultado")
  var resultadoHTML = atributoRadio + " : " + cartaJogador.atributos[atributoRadio] + "<br>VS<br>"+
      atributoRadio + " : " + cartaMaquina.atributos[atributoRadio]
  resultado.innerHTML = resultadoHTML
}

function jogar(){
  var atributoRadio = obterAtributoRadio();
  if(cartaJogador.atributos[atributoRadio]> cartaMaquina.atributos[atributoRadio]){
    alert("Vitória")
  }else if(cartaJogador.atributos[atributoRadio]<cartaMaquina.atributos[atributoRadio]){
    alert("Derrota")
  }else{
    alert("empate")
  }
  resultado(atributoRadio)
  imagemMaquina()
}

var cartaPaulo = {
    nome: "Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    trunfo: false,
    antiTrunfo: false,
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    trunfo: false,
    antiTrunfo: false,
    atributos: {
        ataque: 75,
        defesa: 90,
        magia: 85
    }
}

var cartaGui = {
    nome: "Lorde Darth Vader",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
    trunfo: false,
    antiTrunfo: false,
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaLol = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    trunfo: false,
    antiTrunfo: false,
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

var cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    trunfo: false,
    antiTrunfo: false,
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaHarry = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    trunfo: false,
    antiTrunfo: false,
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    trunfo: false,
    antiTrunfo: false,
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    trunfo: false,
    antiTrunfo: false,
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}

var cartaTrunfo = {
    nome: "Goku",
    imagem: "https://img.quizur.com/f/img5c884840a62cc9.48055575.jpg?lastEdited=1552435268",
    trunfo: true,
    antiTrunfo: false,
    atributos: {
        ataque: 8001,
        defesa: 8001,
        magia: 8001
    }
}

var cartaAntiTrunfo = {
    nome: "Chichi",
    imagem: "https://i.pinimg.com/736x/d3/2a/85/d32a85b7ac317fd06e66b0023328d7cd.jpg",
    trunfo: false,
    antiTrunfo: true,
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 60
    }
}

var cartaSantan = {
    nome: "Mr.Satan",
    imagem: "https://2img.net/h/images6.fanpop.com/image/photos/38100000/Mr-Satan-Hercule-dragon-ball-z-38149468-500-401.jpg",
    trunfo: false,
    antiTrunfo: true,
    atributos: {
        ataque: 20,
        defesa: 20,
        magia: 0
    }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaLol, cartaNaruto, cartaHarry, cartaBatman, cartaMarvel, cartaTrunfo, cartaAntiTrunfo, cartaSantan]
//    0           1           2          3         4
var placarJogador=0
var placarMaquina=0

attDados()

function attDados(){
  var divPlacar = document.getElementById('placar')
  var htmlPlacar = "Jogador  " + placarJogador + " - " + placarMaquina + "  Máquina<br>"
  divPlacar.innerHTML = htmlPlacar
  
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var htmlQuantidadeCartas = "Cartas restantes: " + cartas.length
  divQuantidadeCartas.innerHTML = htmlQuantidadeCartas
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina,1)
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador,1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
  
    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if(cartaJogador.trunfo==true && cartaMaquina.antiTrunfo==true){
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        placarMaquina++
    }else if(cartaMaquina.trunfo==true && cartaJogador.antiTrunfo==true){
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        placarJogador++
    }else{
      
      if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado] ) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        placarJogador++
      } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
          htmlResultado = '<p class="resultado-final">Perdeu</p>'
          placarMaquina++
      } else {
          htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
      
    }
  
    exibeCartaMaquina()
    attDados()
    document.getElementById('btnJogar').disabled = true
    if(cartas.length<=1){
      if(placarJogador > placarMaquina){
        alert("Você Venceu !!!")
        htmlResultado = '<p class="resultado-final">Venceu</p>'
      }else if(placarMaquina > placarJogador){
        alert("Você Perdeu")
        htmlResultado = '<p class="resultado-final">Derrota</p>'
      }else {
        alert("Empatou")
        htmlResultado = '<p class="resultado-final">Empate</p>'
      }
    }else{
      document.getElementById('btnProximaRodada').disabled = false
    }
  divResultado.innerHTML = htmlResultado
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div><div id="carta-maquina" class="carta"></div>`
  
  document.getElementById('btnProximaRodada').disabled = true
  document.getElementById('btnSortear').disabled = false
}

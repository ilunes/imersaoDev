var paulo = {
  nome: "paulo",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
}
var rafa = {
  nome: "rafa",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
}

var jogadores = [paulo, rafa]

exibirResultados(jogadores)

function exibirResultados(jogadores){
  var html = ""
  for(var i = 0; i < jogadores.length; i++){
    jogadores[i].pontos = calcularPontos(jogadores[i])
    html+= "<tr><td>" + jogadores[i].nome + "</td>"
    html+= "<td>" + jogadores[i].vitoria + "</td>"
    html+= "<td>" + jogadores[i].empate + "</td>"
    html+= "<td>" + jogadores[i].derrota + "</td>"
    html+= "<td>" + jogadores[i].pontos + "</td>"
    html+= "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html+= "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html+= "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
  jogadores[i].vitoria++
  exibirResultados(jogadores)
}
function adicionarEmpate(i){
  jogadores[i].empate++
  exibirResultados(jogadores)
}
function adicionarDerrota(i){
  jogadores[i].derrota++
  exibirResultados(jogadores)
}

function calcularPontos(jogador){
  var pontos = jogador.vitoria*3 + jogador.empate
  return pontos
}


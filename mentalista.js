document.getElementById("clickButton").onclick = function(){
  var tentativas = document.getElementById("tentativas").value
  var min = document.getElementById("minimo").value
  var max = document.getElementById("maximo").value 
  var segredo = parseInt(Math.random()* max) + min
  for(var x = tentativas; tentativas > 0 ;tentativas--){
    var chute = parseInt(prompt("Acerte o valor de mínimo: " + min + " e máximo: " + max + "\nTentativas restantes: " + tentativas))
    if(chute == segredo){
      alert("Você venceu!!!\nParabéns\nSobrou : " + tentativas + " Tentativas")
      break;
    }else if(chute > segredo){
      if(max >= chute){ max = chute - 1}
    }else if(chute < segredo){
      if(min <= chute){ min = chute + 1}
    }
  }
  if(tentativas < 1){
    alert("Você usou todas as Tentativas\nTente novamente")
  }
  /*
  document.getElementById('clickButton').disabled = true*/
}

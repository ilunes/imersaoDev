// calculo com o botão

function converterGrausCelsius(){
  var fahrenheit = 0
  var input = document.getElementById('fahrenheit')
  //(0 °C × 9/5) + 32 = 32 °F
  fahrenheit = document.getElementById('graus-celsius-input').value
  fahrenheit = (fahrenheit * 9/5) + 32
  input.innerHTML = '<div id="fahrenheit"><input id="fahrenheit-input" type="number"  value="' + fahrenheit.toFixed(1) + '"></div>'
}
function converterFahrenheit(){
  var grausCelsius = 0
  var input = document.getElementById('graus-celsius')
  //(32 °F − 32) × 5/9 = 0 °C
  grausCelsius = document.getElementById('fahrenheit-input').value
  grausCelsius = (grausCelsius -32) * (5/9)
  input.innerHTML = '<div id="graus-celsius"><input id="graus-celsius-input" type="number" value="' + grausCelsius.toFixed(1) + '"></div>'
  
}


/*
Legenda v == variável
prompt(" " + v)== tela de alerta para recever variavel
alert(" " + v) == tela de alerta
parseFloat(v)  == converte em float
parseInt(v) == converte em inteiro
v.toFixed(v) == converte em numero de casa decimais

button {
  html{
    <button> Faça o cálculo clicando aqui</button>
  }
  js{
    var button = document.querySelector('button');

    button.onclick = function(){}
  }
}



*/

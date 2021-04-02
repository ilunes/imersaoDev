// calculo com o botão


var button = document.querySelector('button');//declara o botão

button.onclick = function(){  //função para quando clicado no botão
  var fahrenheit = prompt('Qual é o valor em Graus Celsius?');
  fahrenheit = (parseFloat(fahrenheit)*9/5)+32
  alert('O valor em Fahrenheit é: ' + fahrenheit.toFixed(1) );
 
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

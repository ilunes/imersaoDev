
var linkImg = ["https://m.media-amazon.com/images/M/MV5BMGMyNTZmNzktMWRjMi00Y2YyLTkyOWEtYjY4NWYyZDNmNWE4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR148,0,182,268_AL_.jpg",
               "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", 
               "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL_.jpg", 
               "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", 
               "https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"];

var nomeFilme = ["The Flash (2022)",
           "Interestelar (2014)",
           "Magnatas do Crime (2019)",
           "Capitão América: O Primeiro Vingador (2011)",
           "Destruição Final: O Último Refúgio (2020)"];

function exibir(){
  var escolha = document.getElementById("filmeExibir").value
  
  var h3 = document.querySelector("h3")
  var html=""
  for(var i = 0 ; i < nomeFilme.length; i++){
    if( escolha-1 == i ){
    html+=  nomeFilme[i]
    html+= "<br><img src=" + linkImg[i] + ">"
    }
  }
  h3.innerHTML = html
}








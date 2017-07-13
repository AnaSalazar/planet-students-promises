function getJSON(url) {
  return new Promise (function(resolve, reject){
    var ajax = new XMLHttpRequest();
    ajax.open("GET",url);
    ajax.send();
    ajax.onreadystatechange = function(){
      if(ajax.readyState == 4){
        resolve(JSON.parse(ajax.responseText));
      }
    }
  })
}

getJSON("data/earth-like-results.json")
  .then(function(mensaje){return(getJSON(mensaje.results[0]))})
  .then(function(resultado){imprimir(resultado)})

var plantilla = "<div class='row'>" +
  "<div class='col s12 m6'>" + "<div class='card'>"
  + "<div class='card-content white-text'>" + '<img src="" alt="planetas">'
  + "<span class='card-title'>__planeta__</span>" + "<p>__dato1__</p>" +
  "<p>__dato2__</p>" + "</div>" + "</div>" + "</div>" +"</div>";

var imprimir = function(resultado){
  var plantillaPlaneta = "";
  plantillaPlaneta += plantilla.replace("__planeta__", resultado.pl_name)
  console.log(plantillaPlaneta);
  var espacio = document.getElementById('espacioExoplanetas');
  console.log(espacio);
  espacio.innerHTML(plantillaPlaneta);
  console.log(espacio);
};

// document.onready()

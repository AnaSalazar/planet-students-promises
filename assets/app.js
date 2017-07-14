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
  .then(function(mensaje){return(mensaje.results)})
  .then(function(exoplanetas){
    exoplanetas.forEach(function(exoplaneta){
      getJSON(exoplaneta)
        .then(function(exoplaneta){
          console.log(exoplaneta)
          tarjeta(exoplaneta);
        })
    })
  })

function tarjeta (exoplaneta) {
  var divRow = document.createElement("div");
  var divCol = document.createElement("div");
  var divCard = document.createElement("div");
  var divCardContent = document.createElement("div");
  var imagen = document.createElement("img");
  var nombre = document.createElement("p");
  var dato1 = document.createElement("p");
  var dato2 = document.createElement("p");

  divRow.className = "row";
  divCol.className = "col s12 offset-m3 m6 center";
  divCard.className = "card blue-grey darken-1";
  divCardContent.className = "card-content white-text";
  imagen.className = "s8";
  nombre.className = "card-title";

  imagen.src = "archivos/exoplanetas.jpg"

  nombre.innerText = exoplaneta.pl_name;
  dato1.innerText = "ORBPER: " + exoplaneta.pl_orbper;
  dato2.innerText = "TELESCOPE: " + exoplaneta.pl_telescope;

  var espacio = document.getElementById("espacioExoplanetas");
  divCardContent.appendChild(imagen);
  divCardContent.appendChild(nombre);
  divCardContent.appendChild(dato1);
  divCardContent.appendChild(dato2);
  divCard.appendChild(divCardContent);
  divCol.appendChild(divCard);
  divRow.appendChild(divCol);
  espacio.appendChild(divRow);
}

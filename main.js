
function calcular() {
  
  var cursistas = document.getElementById("cursistas").value;
  var resultado = cursistas * 250;
  window.location.href = "pagina2.html?resultado=" + resultado;
}

var resultado = new URLSearchParams(window.location.search).get("resultado");
document.getElementById("resultado").textContent = resultado;
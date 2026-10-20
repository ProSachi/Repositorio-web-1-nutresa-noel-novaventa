var lista = document.getElementById("lista-nutricion");

window.nutricionServicio.listarCalorias().then(function (calorias) {
  for (var i = 0; i < calorias.length; i++) {
    var receta = calorias[i];
    lista.innerHTML += "<li>" + receta.nombre + " - " + receta.kcal + " kcal</li>";
  }
});

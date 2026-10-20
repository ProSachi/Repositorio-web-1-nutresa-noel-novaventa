var calorias = [
  { nombre: "Arepa rellena con queso", kcal: 320 },
  { nombre: "Pasta con salsa casera", kcal: 420 },
  { nombre: "Postre frio de cafe", kcal: 260 },
  { nombre: "Brownie con chocolate", kcal: 310 },
  { nombre: "Perro caliente casero", kcal: 380 },
  { nombre: "Cheesecake de galletas", kcal: 350 },
  { nombre: "Ensalada fria de pasta", kcal: 290 },
  { nombre: "Frappe de cappuccino", kcal: 180 },
  { nombre: "Galletas rellenas de chocolate", kcal: 220 },
  { nombre: "Perro especial ranchero", kcal: 450 }
];

var lista = document.getElementById("lista-nutricion");

for (var i = 0; i < calorias.length; i++) {
  var receta = calorias[i];
  lista.innerHTML += "<li>" + receta.nombre + " - " + receta.kcal + " kcal</li>";
}

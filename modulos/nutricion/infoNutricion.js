let selector;
let listaIngredientes;
let estado;
let platos = [];

function iniciarNutricion() {
  selector = document.getElementById("platoSelect");
  listaIngredientes = document.getElementById("listaIngredientes");
  estado = document.getElementById("nutricion-estado");

  selector.addEventListener("change", mostrarIngredientes);
  listaIngredientes.addEventListener("change", actualizarNutricion);

  cargarPlatos();
}

async function cargarPlatos() {
  try {
    platos = await window.nutricionServicio.listarTodos();
    selector.innerHTML = "";

    if (!platos.length) {
      selector.innerHTML =
        '<option value="">No hay platos disponibles</option>';
      estado.textContent = "No se encontraron platos para mostrar.";
      limpiarNutricion();
      return;
    }

    platos.forEach(function (plato) {
      let opcion = document.createElement("option");
      opcion.value = String(plato.id);
      opcion.textContent = plato.nombre;
      selector.appendChild(opcion);
    });

    selector.value = String(platos[0].id);
    estado.textContent = "Información nutricional cargada correctamente.";
    mostrarIngredientes();
  } catch (error) {
    selector.innerHTML = '<option value="">Error al cargar los platos</option>';
    estado.setAttribute("role", "alert");
    estado.textContent =
      "No fue posible cargar los platos. Revisa los archivos del módulo.";
    console.error("Error al cargar nutrición:", error);
    limpiarNutricion();
  }
}

function obtenerPlatoSeleccionado() {
  let id = Number(selector.value);
  return platos.find(function (plato) {
    return plato.id === id;
  });
}

function mostrarIngredientes() {
  let plato = obtenerPlatoSeleccionado();
  listaIngredientes.innerHTML = "";

  if (!plato) {
    limpiarNutricion();
    return;
  }

  plato.ingredientes.forEach(function (ingrediente, indice) {
    let tarjeta = document.createElement("article");
    tarjeta.className = "nutricion-ingrediente";

    let etiqueta = document.createElement("label");
    etiqueta.className = "nutricion-ingrediente-nombre";

    let casilla = document.createElement("input");
    casilla.type = "checkbox";
    casilla.className = "ingrediente-check";
    casilla.dataset.indice = String(indice);
    casilla.checked = true;

    etiqueta.appendChild(casilla);
    etiqueta.appendChild(document.createTextNode(" " + ingrediente.nombre));

    let detalle = document.createElement("p");
    detalle.className = "nutricion-ingrediente-detalle";
    detalle.textContent =
      ingrediente.calorias +
      " kcal · " +
      ingrediente.proteinas +
      " g proteínas · " +
      ingrediente.carbohidratos +
      " g carbohidratos · " +
      ingrediente.grasas +
      " g grasas";

    tarjeta.appendChild(etiqueta);
    tarjeta.appendChild(detalle);
    listaIngredientes.appendChild(tarjeta);
  });

  actualizarNutricion();
}

function actualizarNutricion() {
  let plato = obtenerPlatoSeleccionado();
  let totales = {
    calorias: 0,
    proteinas: 0,
    carbohidratos: 0,
    grasas: 0,
  };

  if (plato) {
    let casillas = listaIngredientes.querySelectorAll(".ingrediente-check");
    casillas.forEach(function (casilla) {
      if (!casilla.checked) return;

      let ingrediente = plato.ingredientes[Number(casilla.dataset.indice)];
      if (!ingrediente) return;

      totales.calorias += ingrediente.calorias;
      totales.proteinas += ingrediente.proteinas;
      totales.carbohidratos += ingrediente.carbohidratos;
      totales.grasas += ingrediente.grasas;
    });
  }

  document.getElementById("calorias").textContent = totales.calorias + " kcal";
  document.getElementById("proteinas").textContent = totales.proteinas + " g";
  document.getElementById("carbohidratos").textContent =
    totales.carbohidratos + " g";
  document.getElementById("grasas").textContent = totales.grasas + " g";
}

function limpiarNutricion() {
  ["calorias", "proteinas", "carbohidratos", "grasas"].forEach(
    function (id, indice) {
      let unidad = [" kcal", " g", " g", " g"][indice];
      document.getElementById(id).textContent = "0" + unidad;
    },
  );
}

document.addEventListener("DOMContentLoaded", iniciarNutricion);

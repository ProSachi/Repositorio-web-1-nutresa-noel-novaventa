(function () {
  const estado = document.getElementById("recetario-estado");
  const galeria = document.getElementById("galeria-recetas");
  const formulario = document.getElementById("formulario-filtros");
  const btnRestablecer = document.getElementById("btn-restablecer");

  // Busca el nombre de la categoría a partir del idCategoríaReceta
  function nombreCategoria(id) {
    const categoria = categoriasReceta.find(c => c.id === id);
    return categoria ? categoria.nombre : "Sin categoría";
  }

  function renderizarGaleria(recetas) {
    galeria.innerHTML = "";

    if (recetas.length === 0) {
      estado.textContent = "No se encontraron recetas que coincidan con los filtros aplicados.";
      estado.classList.remove("oculto");
      return;
    }

    estado.classList.add("oculto");
    recetas.forEach(receta => {
      const tarjeta = document.createElement("article");
      tarjeta.className = "tarjeta-receta";
      tarjeta.innerHTML = `
        <h3>${receta.título}</h3>
        <p>${receta.descripción}</p>
        <div class="tarjeta-detalles">
          <span class="badge">${nombreCategoria(receta.idCategoríaReceta)}</span>
          <span class="badge">⏱ ${receta.tiempoPreparaciónMin} min</span>
          <span class="badge">👥 ${receta.porciones} porciones</span>
        </div>
      `;
      galeria.appendChild(tarjeta);
    });
  }

  function aplicarFiltros() {
    const tiempo = document.getElementById("filtro-tiempo").value;
    const porciones = document.getElementById("filtro-porciones").value;
    const texto = document.getElementById("filtro-nombre").value.toLowerCase();

    const filtradas = recetario.filter(receta => {
      const pasaTiempo = tiempo === "todos" || receta.tiempoPreparaciónMin <= parseInt(tiempo, 10);
      const pasaPorciones = porciones === "todos" || receta.porciones >= parseInt(porciones, 10);
      const pasaNombre = texto === "" || receta.título.toLowerCase().includes(texto);
      return pasaTiempo && pasaPorciones && pasaNombre;
    });

    renderizarGaleria(filtradas);
  }

  function restablecer() {
    formulario.reset();
    renderizarGaleria(recetario);
  }

  formulario.addEventListener("input", aplicarFiltros);
  btnRestablecer.addEventListener("click", restablecer);

  renderizarGaleria(recetario);
})();

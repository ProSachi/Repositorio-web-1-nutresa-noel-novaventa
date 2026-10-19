(function () {
  
  let recetasLocales = []; 
  
  // Elementos del DOM
  const estado = document.getElementById("recetario-estado");
  const galeria = document.getElementById("galeria-recetas");
  const formulario = document.getElementById("formulario-filtros");
  const btnRestablecer = document.getElementById("btn-restablecer");
  const filtroTiempo = document.getElementById("filtro-tiempo");

  
  function renderizarGaleria(recetas) {
    galeria.innerHTML = ""; 

    if (recetas.length === 0) {
      
      estado.textContent = "No se encontraron recetas que coincidan con los filtros aplicados.";
      estado.classList.remove("oculto");
    } else {
      estado.classList.add("oculto");
      recetas.forEach(receta => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-receta";
        tarjeta.innerHTML = `
          <h3>${receta.nombreReceta}</h3>
          <div class="tarjeta-detalles">
            <span class="badge">⏱ ${receta.minutos} min</span>
            <span class="badge">👥 ${receta.porciones} porciones</span>
          </div>
        `;
        galeria.appendChild(tarjeta);
      });
    }
  }

  function aplicarFiltros() {
    const tiempoSeleccionado = filtroTiempo.value;

    const recetasFiltradas = recetasLocales.filter(receta => {
      // 
      if (tiempoSeleccionado === "todos") return true;
      
      
      return receta.minutos <= parseInt(tiempoSeleccionado, 10);
    });

    renderizarGaleria(recetasFiltradas);
  }
  
  function restablecer() {
    formulario.reset(); // Vuelve el <select> a la opción "todos"
    renderizarGaleria(recetasLocales); 
  }


  async function iniciarRecetario() {
    if (!estado) return;

    try {
      recetasLocales = await window.recetarioServicio.listarTodos();
      
      
      renderizarGaleria(recetasLocales);
      
      
      formulario.addEventListener("change", aplicarFiltros);
      btnRestablecer.addEventListener("click", restablecer);
      
    } catch (error) {
      estado.classList.remove("oculto");
      estado.setAttribute("role", "alert");
      estado.textContent = "No fue posible cargar la base del recetario.";
      console.error(error);
    }
  }

  document.addEventListener("DOMContentLoaded", iniciarRecetario);
})();

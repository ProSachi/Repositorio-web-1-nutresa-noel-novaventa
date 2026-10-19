/**
 * Módulo de Recetario y Contenido - Proyecto Sazón
 * Historia de Usuario: G2-FOT-M01 / FotoReceta
 * Descripción: Modelo y renderizado dinámico de fotos de recetas en el DOM.
 */

// 1. Estructura de Datos / Entidad FotoReceta (5 atributos de la BBDD)
const listaFotosReceta = [
  {
    idFoto: 1,
    idReceta: 101,
    urlFoto: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    esPrincipal: true,
    fechaSubida: "2026-10-15"
  },
  {
    idFoto: 2,
    idReceta: 101,
    urlFoto: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    esPrincipal: false,
    fechaSubida: "2026-10-16"
  }
];

/**
 * Renderiza la galería de fotografías asociadas a una receta en el DOM.
 * @param {Array} fotos - Listado de objetos FotoReceta.
 */
function renderizarGaleriaFotos(fotos) {
  const contenedor = document.getElementById("galeria-fotos") || document.body;

  // Limpiar contenedor
  const galeriaHTML = document.createElement("div");
  galeriaHTML.className = "galeria-receta-container";

  fotos.forEach((foto) => {
    const tarjetaFoto = document.createElement("div");
    tarjetaFoto.className = `tarjeta-foto ${foto.esPrincipal ? "foto-principal" : ""}`;

    tarjetaFoto.innerHTML = `
      <div class="foto-wrapper">
        <img src="${foto.urlFoto}" alt="Foto de la receta ${foto.idReceta}" class="img-receta" />
        ${foto.esPrincipal ? '<span class="badge-principal">Foto Principal</span>' : ''}
      </div>
      <div class="foto-info">
        <small>Subida el: ${foto.fechaSubida}</small>
      </div>
    `;

    galeriaHTML.appendChild(tarjetaFoto);
  });

  contenedor.appendChild(galeriaHTML);
}

// 2. Inicialización al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderizarGaleriaFotos(listaFotosReceta);
});
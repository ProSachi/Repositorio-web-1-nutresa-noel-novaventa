(function () {
  // Servicio local del módulo. Puede cambiarse por una API más adelante.
  window.nutricionServicio = {
    async listarTodos() {
      return Promise.resolve(window.platosNutricionData || []);
    },
  };
})();

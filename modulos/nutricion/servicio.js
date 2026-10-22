(function () {
  "use strict";

  window.nutricionServicio = {
    async listarTodos() {
      const platos = window.platosNutricionData;

      if (!Array.isArray(platos)) {
        throw new Error("No se cargaron los datos de platos de nutrición.");
      }

      return platos;
    },
  };
})();

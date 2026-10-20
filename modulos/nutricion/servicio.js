(function () {
  window.nutricionServicio = {
    async listarTodos() {
      return Promise.resolve(window.platosNutricionData || []);
    },
    // Aporte HU (José David): calorías totales por plato, para ordenar.
    async listarCalorias() {
      return Promise.resolve(
        (window.platosNutricionData || []).map(function (plato) {
          var total = (plato.ingredientes || []).reduce(function (suma, ing) {
            return suma + (ing.calorias || 0);
          }, 0);
          return { id: plato.id, nombre: plato.nombre, kcal: total };
        })
      );
    }
  };
})();

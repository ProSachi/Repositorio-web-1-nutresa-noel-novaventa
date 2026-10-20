(function () {
  window.nutricionServicio = {
    async listarTodos() {
      return Promise.resolve(window.platosNutricionData || []);
    },
  };
})();

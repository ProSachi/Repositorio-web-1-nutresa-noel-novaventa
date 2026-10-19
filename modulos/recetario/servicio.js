(function () {
  window.recetarioServicio = {
    async listarTodos() {
     return Promise.resolve(window.recetasData || []);
    }
  };
})();
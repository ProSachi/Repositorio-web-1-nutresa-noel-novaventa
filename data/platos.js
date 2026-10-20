(function () {
  // Datos locales del módulo de nutrición: recetas con productos de la familia Nutresa.
  // Valores aproximados por porción; verificar con la tabla nutricional del empaque.
  window.platosNutricionData = [
    {
      id: 1,
      nombre: "Pasta Doria con jamón Zenú y verduras",
      ingredientes: [
        { nombre: "Pasta Doria cocida (1 taza)", calorias: 220, proteinas: 8, carbohidratos: 43, grasas: 1 },
        { nombre: "Jamón de pollo Zenú (2 lonjas)", calorias: 50, proteinas: 7, carbohidratos: 2, grasas: 2 },
        { nombre: "Verduras salteadas", calorias: 35, proteinas: 2, carbohidratos: 7, grasas: 0 }
      ]
    },
    {
      id: 2,
      nombre: "Galletas Saltín Noel con jamón Pietrán y aguacate",
      ingredientes: [
        { nombre: "Galletas Saltín Noel (6 unidades)", calorias: 130, proteinas: 3, carbohidratos: 21, grasas: 4 },
        { nombre: "Jamón Pietrán (2 lonjas)", calorias: 55, proteinas: 7, carbohidratos: 1, grasas: 2 },
        { nombre: "Aguacate", calorias: 80, proteinas: 1, carbohidratos: 4, grasas: 7 }
      ]
    },
    {
      id: 3,
      nombre: "Salchicha Zenú con papa y ensalada",
      ingredientes: [
        { nombre: "Salchicha Zenú (2 unidades)", calorias: 220, proteinas: 9, carbohidratos: 3, grasas: 19 },
        { nombre: "Papa cocida", calorias: 87, proteinas: 2, carbohidratos: 20, grasas: 0 },
        { nombre: "Ensalada", calorias: 26, proteinas: 2, carbohidratos: 5, grasas: 1 }
      ]
    },
    {
      id: 4,
      nombre: "Desayuno Tosh con papaya y Colcafé",
      ingredientes: [
        { nombre: "Granola Tosh (40 g)", calorias: 170, proteinas: 4, carbohidratos: 28, grasas: 5 },
        { nombre: "Papaya", calorias: 43, proteinas: 0, carbohidratos: 11, grasas: 0 },
        { nombre: "Colcafé con leche (1 taza)", calorias: 70, proteinas: 2, carbohidratos: 10, grasas: 2 }
      ]
    },
    {
      id: 5,
      nombre: "Tallarines Doria con carne magra y tomate",
      ingredientes: [
        { nombre: "Tallarines Doria cocidos (1 taza)", calorias: 220, proteinas: 8, carbohidratos: 43, grasas: 1 },
        { nombre: "Carne de res magra", calorias: 180, proteinas: 26, carbohidratos: 0, grasas: 8 },
        { nombre: "Salsa de tomate natural", calorias: 30, proteinas: 1, carbohidratos: 6, grasas: 0 }
      ]
    },
    {
      id: 6,
      nombre: "Chocolate Cordillera con galletas Ducales y banano",
      ingredientes: [
        { nombre: "Chocolate Cordillera (25 g)", calorias: 125, proteinas: 2, carbohidratos: 16, grasas: 7 },
        { nombre: "Galletas Ducales (3 unidades)", calorias: 110, proteinas: 2, carbohidratos: 17, grasas: 4 },
        { nombre: "Banano", calorias: 89, proteinas: 1, carbohidratos: 23, grasas: 0 }
      ]
    },
    {
      id: 7,
      nombre: "Chorizo Zenú con arroz y ensalada",
      ingredientes: [
        { nombre: "Chorizo Zenú (1 unidad)", calorias: 230, proteinas: 10, carbohidratos: 2, grasas: 20 },
        { nombre: "Arroz cocido", calorias: 130, proteinas: 3, carbohidratos: 28, grasas: 1 },
        { nombre: "Ensalada", calorias: 26, proteinas: 2, carbohidratos: 5, grasas: 1 }
      ]
    },
    {
      id: 8,
      nombre: "Merienda con chocolatina Jet, banano y Colcafé",
      ingredientes: [
        { nombre: "Chocolatina Jet (20 g)", calorias: 105, proteinas: 1, carbohidratos: 13, grasas: 6 },
        { nombre: "Banano", calorias: 89, proteinas: 1, carbohidratos: 23, grasas: 0 },
        { nombre: "Colcafé con leche (1 taza)", calorias: 70, proteinas: 2, carbohidratos: 10, grasas: 2 }
      ]
    }
  ];
})();
class CategoriaReceta {
  constructor(nombre, descripcion, estado) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.estado = estado;
  }
  toString() {
    return `Categoria: ${this.nombre} - Descripcion: ${this.descripcion} - Estado: ${this.estado}`;
  }
  crear() {
    return new Promise((resolve, reject) => {
      if (this.nombre) resolve(this);
      else reject("Error al guardar la categoria");
    });
  }
  actualizar() {
    return this.crear();
  }
}
const form = document.getElementById('form-categoria');
const errorNombre = document.getElementById('error-nombre');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();
  const estado = document.getElementById('estado').value;

  if (!nombre || nombre === "" || nombre.length > 50) {
    errorNombre.style.display = "block";
    errorNombre.textContent = "El Nombre es obligatorio, no vacio y maximo 50 caracteres";
    return;
  }
  errorNombre.style.display = "none";

  const categoria = new CategoriaReceta(nombre, descripcion, estado);
  
  categoria.crear()
    .then(() => {
      mensaje.style.color = "green";
      mensaje.textContent = "Categoria guardada correctamente: " + categoria.toString();
    })
    .catch(() => {
      mensaje.style.color = "red";
      mensaje.textContent = "Error al guardar la categoria";
    });
});

document.getElementById('btn-cancelar').addEventListener('click', () => {
  form.reset();
  errorNombre.style.display = "none";
  mensaje.textContent = "";
});
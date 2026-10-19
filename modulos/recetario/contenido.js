# Historia de Usuario: Galería Visual y Gestión Frontend de Fotos de Receta

**Código / ID:** HU-FRONT-FOT-01 (Adaptación de G2-FOT-M01)  
**Módulo:** Grupo 2 · Recetario y Contenido — Proyecto Sazón  
**Rol / Actor:** Usuario / Chef  
**Prioridad:** Alta  
**Estimación:** 5 Puntos de Historia (Sprint 1 — Vencimiento: 30 de octubre)  
**Asignado a:** Miguel Gómez Aguilar (MG)

## Descripción
**Como** usuario / chef de la plataforma Sazón,  
**Quiero** visualizar una galería interactiva con las imágenes asociadas a una receta y contar con un formulario frontend para subir/gestionar las fotos pertenecientes a la entidad `FotoReceta` (tabla `fotos_receta`),  
**Para** apreciar la presentación visual del platillo, identificar la foto principal y mejorar la experiencia de navegación en el recetario.

## Mapeo de Atributos (Entidad BBDD vs. Frontend JS)

| Atributo BBDD | Tipo Dato Backend | Propiedad JS / DOM | Descripción y Uso en Frontend |
| :--- | :--- | :--- | :--- |
| `id_foto` | Long / INT | `idFoto` | Identificador único de la fotografía |
| `id_receta` | Long / INT | `idReceta` | ID de la receta enlazada (Clave Foránea) |
| `url_foto` | String / VARCHAR | `urlFoto` | Dirección de la imagen inyectada en el `src` del `<img>` |
| `es_principal` | Boolean / TINYINT | `esPrincipal` | Determina si la foto lleva la etiqueta/badge de "Portada" |
| `fecha_subida` | LocalDateTime / DATE | `fechaSubida` | Fecha de carga visualizada en la galería |

---

## Criterios de Aceptación (Frontend & JS)

1. **Renderizado Dinámico de la Galería:**
   - Mediante JavaScript (`fotoReceta.js`), la aplicación debe consumir el arreglo de objetos de la entidad `FotoReceta` (con sus 5 atributos) y renderizarlos en el contenedor `<div id="galeria-fotos">`.

2. **Distintivo de Foto Principal:**
   - Si la propiedad `esPrincipal` es igual a `true`, la interfaz debe agregar automáticamente una clase CSS (`.foto-principal`) y mostrar un badge que indique que es la imagen destacada de la receta.

3. **Formulario de Carga Interactiva (DOM Listener):**
   - La vista debe incluir un formulario `<form id="form-foto-receta">` con campos para ingresar la `urlFoto` y marcar si `esPrincipal`.
   - Al enviar el formulario, el evento `submit` debe ser capturado por JavaScript, previniendo la recarga de página (`e.preventDefault()`) y agregando la foto dinámicamente al DOM.

4. **Control de Errores e Imágenes Rotas:**
   - Si la URL suministrada falla al cargar, JS debe capturar el evento `error` en la etiqueta `<img>` y reemplazar la imagen dañada por un *placeholder* predeterminado de Sazón.
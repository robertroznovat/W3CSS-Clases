// Alternar Modo Nocturno aplicando clase al Body

function toggleNocturno() {
  document.body.classList.toggle("dark-mode");
}

// FUNCION AGRANDAR
let factorEscala = 1.0;

function ajustarTexto(factor) {
  // Ajustamos el factor sumando o restando de forma limpia
  if (factor > 1) factorEscala += 0.1;
  if (factor < 1) factorEscala -= 0.1;

  // Límites estrictos de seguridad visual
  if (factorEscala < 0.8) factorEscala = 0.8;
  if (factorEscala > 1.4) factorEscala = 1.4;

  // En lugar de forzar al contenedor padre y saturar el renderizado,
  // cambiamos el tamaño directamente a las tarjetas de las diapositivas
  let diapositivas = document.querySelectorAll(".slide-card");
  diapositivas.forEach(function(tarjeta) {
    tarjeta.style.fontSize = factorEscala + "em";
  });
}



/*
 * SIDEBAR: abrir y cerrar una barra lateral.
 * Este código es independiente de las clases visuales de W3.CSS.
 * Solución de posicionamiento absoluto compatible con W3.CSS v6.

 * LOGICA DE CONTROL DE ACCESIBILIDAD Y MENÚS
 * Ejecución segura una vez cargada la estructura HTML.
 */

document.addEventListener("DOMContentLoaded", function () {
  // El modo oscuro que ya te funcionaba se queda aquí arriba intacto
  console.log("Script dark.js cargado correctamente y listo.");
});

// Funciones globales para los botones onclick del HTML
function w3_open() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar) {
    sidebar.style.display = "block";
  }
}

function w3_close() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar) {
    sidebar.style.display = "none";
  }
}
//  Código JavaScript de la documentación ejercicio de pestañas de contenido clase 36
/* =========================================================
   Documentación ejercicio de pestañas de contenido clase 36
   ========================================================= */
function openCity(cityName) {
  document.querySelectorAll(".city").forEach((city) => {
    city.style.display = "none";
  });

  document.getElementById(cityName).style.display = "block";
}

/* =========================================================
   3. ACTIVE/CURRENT TAB — PESTAÑA ACTIVA
   ========================================================= */

function openCityActive(evt, cityName) {
  const cities = document.querySelectorAll(".city-active");
  const buttons = document.querySelectorAll(".tablink-active-demo");

  cities.forEach(function (city) {
    city.style.display = "none";
  });

  buttons.forEach(function (button) {
    button.classList.remove("w3-red");
  });

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add("w3-red");
}

/* =========================================================
   4. VERTICAL TABS — PESTAÑAS VERTICALES
   ========================================================= */

function openCityVertical(cityName) {
  document.querySelectorAll(".city-vertical").forEach(function (city) {
    city.style.display = "none";
  });

  document.getElementById(cityName).style.display = "block";
}

/* =========================================================
   5. ANIMATED TAB CONTENT — CONTENIDO ANIMADO
   ========================================================= */

function openCityAnimated(cityName) {
  const cities = document.querySelectorAll(".city-animated");

  cities.forEach(function (city) {
    city.style.display = "none";
  });

  document.getElementById(cityName).style.display = "block";
}

/* =========================================================
   6. TABBED IMAGE GALLERY — GALERÍA DE IMÁGENES
   ========================================================= */

function openGalleryImage(imageName) {
  const pictures = document.querySelectorAll(".gallery-picture");

  pictures.forEach(function (picture) {
    picture.style.display = "none";
  });

  document.getElementById(imageName).style.display = "block";
}

/* =========================================================
   7. TABS IN A GRID — PESTAÑAS EN CUADRÍCULA
   ========================================================= */

function openCityGrid(evt, cityName) {
  const cities = document.querySelectorAll(".city-grid");
  const buttons = document.querySelectorAll(".grid-tab-demo");

  cities.forEach(function (city) {
    city.style.display = "none";
  });

  buttons.forEach(function (button) {
    button.classList.remove("grid-tab-selected");
  });

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add("grid-tab-selected");
}

/* =========================================================
   8. TABS IN A ROW — PESTAÑAS EN UNA FILA
   ========================================================= */

function openCityRow(cityName) {
  const cities = document.querySelectorAll(".city-row");

  cities.forEach(function (city) {
    city.style.display = "none";
  });

  document.getElementById(cityName).style.display = "block";
}
// fin clase 36 de pestañas de contenido

// =========================================================
//   JAVASCRIPT DE LA LECCIÓN 46
// Coloca este bloque una sola vez en el HTML del dashboard.
//Todas las clases, variables y funciones llevan el sufijo 46
//para evitar conflictos con otras lecciones.
//=========================================================

//
// ---------------------------------------------------------
// 2. Presentación manual
// ---------------------------------------------------------
let slideIndex46 = 1;

function plusDivs46(n) {
  showDivs46((slideIndex46 += n));
}

function showDivs46(n) {
  const slides = document.querySelectorAll(".slides46");

  if (slides.length === 0) return;

  if (n > slides.length) slideIndex46 = 1;
  if (n < 1) slideIndex46 = slides.length;

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[slideIndex46 - 1].style.display = "block";
}

// ---------------------------------------------------------
// 4. Presentación automática
// ---------------------------------------------------------
let autoIndex46 = 0;
let autoTimer46 = null;
let autoRunning46 = false;

function startAuto46() {
  const slides = document.querySelectorAll(".autoSlides46");

  if (slides.length === 0 || autoRunning46) return;

  autoRunning46 = true;

  autoTimer46 = setInterval(() => {
    slides[autoIndex46].style.display = "none";

    autoIndex46 = (autoIndex46 + 1) % slides.length;

    slides[autoIndex46].style.display = "block";
  }, 2000);
}

function toggleAuto46() {
  if (autoRunning46) {
    clearInterval(autoTimer46);
    autoTimer46 = null;
    autoRunning46 = false;

    document.getElementById("autoStatus46").textContent =
      "Presentación detenida";
  } else {
    startAuto46();

    document.getElementById("autoStatus46").textContent =
      "Presentación en marcha";
  }
}

// ---------------------------------------------------------
// 5. Presentación de bloques HTML
// ---------------------------------------------------------
let htmlIndex46 = 1;

function changeHtml46(n) {
  const slides = document.querySelectorAll(".htmlSlides46");

  if (slides.length === 0) return;

  htmlIndex46 += n;

  if (htmlIndex46 > slides.length) htmlIndex46 = 1;
  if (htmlIndex46 < 1) htmlIndex46 = slides.length;

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[htmlIndex46 - 1].style.display = "block";
}

// ---------------------------------------------------------
// 7. Indicadores numéricos
// ---------------------------------------------------------
let indicatorIndex46 = 1;

function showIndicator46(n) {
  const slides = document.querySelectorAll(".indicatorSlides46");

  if (slides.length === 0) return;

  if (n > slides.length) n = 1;
  if (n < 1) n = slides.length;

  indicatorIndex46 = n;

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[indicatorIndex46 - 1].style.display = "block";
}

function changeIndicator46(n) {
  showIndicator46(indicatorIndex46 + n);
}

// ---------------------------------------------------------
// 8. Indicadores con puntos
// ---------------------------------------------------------
let dotIndex46 = 1;

function showDot46(n) {
  const slides = document.querySelectorAll(".dotSlides46");

  if (slides.length === 0) return;

  if (n > slides.length) n = 1;
  if (n < 1) n = slides.length;

  dotIndex46 = n;

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[dotIndex46 - 1].style.display = "block";
}

// ---------------------------------------------------------
// 9. Miniaturas
// ---------------------------------------------------------
let thumbIndex46 = 1;

function showThumb46(n) {
  const slides = document.querySelectorAll(".thumbSlides46");

  if (slides.length === 0) return;

  if (n > slides.length) n = 1;
  if (n < 1) n = slides.length;

  thumbIndex46 = n;

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[thumbIndex46 - 1].style.display = "block";
}

// ---------------------------------------------------------
// 10. Dos presentaciones independientes
// ---------------------------------------------------------
const multiIndex46 = {
  A: 1,
  B: 1,
};

function moveMulti46(group, direction) {
  const className = group === "A" ? ".multiA46" : ".multiB46";
  const slides = document.querySelectorAll(className);

  if (slides.length === 0) return;

  multiIndex46[group] += direction;

  if (multiIndex46[group] > slides.length) {
    multiIndex46[group] = 1;
  }

  if (multiIndex46[group] < 1) {
    multiIndex46[group] = slides.length;
  }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[multiIndex46[group] - 1].style.display = "block";
}

// ---------------------------------------------------------
// 11. Animaciones de entrada
// ---------------------------------------------------------
let animatedIndex46 = 1;

function moveAnimated46(n) {
  const slides = document.querySelectorAll(".animatedSlides46");

  if (slides.length === 0) return;

  animatedIndex46 += n;

  if (animatedIndex46 > slides.length) animatedIndex46 = 1;
  if (animatedIndex46 < 1) animatedIndex46 = slides.length;

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[animatedIndex46 - 1].style.display = "block";
}

// ---------------------------------------------------------
// 12. Animación de desvanecimiento
// ---------------------------------------------------------
let fadeIndex46 = 1;

function moveFade46(n) {
  const slides = document.querySelectorAll(".fadeSlides46");

  if (slides.length === 0) return;

  fadeIndex46 += n;

  if (fadeIndex46 > slides.length) fadeIndex46 = 1;
  if (fadeIndex46 < 1) fadeIndex46 = slides.length;

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[fadeIndex46 - 1].style.display = "block";
}

// ---------------------------------------------------------
// Inicialización: mostrar la primera diapositiva de cada grupo.
// ---------------------------------------------------------
showDivs46(1);
changeHtml46(0);
showIndicator46(1);
showDot46(1);
showThumb46(1);
moveAnimated46(0);
moveFade46(0);

// Iniciar el slideshow automático al cargar el script.
startAuto46();

// =========================================================
//  //   JAVASCRIPT DE LA LECCIÓN 47
//   Coloca este bloque una sola vez en el dashboard.
//  No copies además los scripts individuales de los ejemplos.
//  ========================================================= -->

// ---------------------------------------------------------
// Funciones generales para abrir y cerrar ventanas.
// ---------------------------------------------------------
function openModal47(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "block";
}

function closeModal47(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}

// ---------------------------------------------------------
// 6. Cambiar la animación del contenido de la modal.
// ---------------------------------------------------------
function openAnimatedModal47(animationClass) {
  const modal = document.getElementById("modalAnimation47");
  const content = document.getElementById("modalAnimationContent47");

  const animations = [
    "w3-animate-zoom",
    "w3-animate-top",
    "w3-animate-bottom",
    "w3-animate-left",
    "w3-animate-right",
    "w3-animate-opacity",
  ];

  // Eliminar las clases anteriores para aplicar solo la elegida.
  content.classList.remove(...animations);
  content.classList.add(animationClass);

  modal.style.display = "block";
}

// ---------------------------------------------------------
// 7. Ampliar una imagen individual.
// ---------------------------------------------------------
function openImageModal47(element) {
  document.getElementById("imageModalContent47").src = element.src;
  document.getElementById("imageModal47").style.display = "block";
}

// Evitar que un clic sobre la imagen ampliada cierre el fondo.
document
  .getElementById("imageModalContent47")
  .addEventListener("click", (event) => {
    event.stopPropagation();
  });

// ---------------------------------------------------------
// 8. Abrir una imagen de la galería.
// ---------------------------------------------------------
function openGallery47(element) {
  document.getElementById("galleryImage47").src = element.src;
  document.getElementById("galleryImage47").alt = element.alt;
  document.getElementById("galleryModal47").style.display = "block";
}

document.getElementById("galleryImage47").addEventListener("click", (event) => {
  event.stopPropagation();
});

// ---------------------------------------------------------
// 10. Mostrar las pestañas dentro de la modal.
// ---------------------------------------------------------
function showModalTab47(tabId, button) {
  const tabs = document.querySelectorAll(".modalTab47");

  tabs.forEach((tab) => {
    tab.style.display = "none";
  });

  document.getElementById(tabId).style.display = "block";
}

// ---------------------------------------------------------
// 11 y 12. Cerrar solo cuando se pulsa el fondo exterior.
// ---------------------------------------------------------
function closeOutsideModal47(event, modal) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// ---------------------------------------------------------
// 12. Lightbox: imágenes, índice y navegación.
// ---------------------------------------------------------
const lightboxImages47 = [
  { src: "/img/img_nature_wide.jpg", alt: "Naturaleza" },
  { src: "img/img_snow_wide.jpg", alt: "Nieve" },
  { src: "img/img_mountains_wide.jpg", alt: "Montañas" },
];

let lightboxIndex47 = 0;

function openLightbox47(index) {
  lightboxIndex47 = index;
  showLightboxImage47();
  document.getElementById("lightbox47").style.display = "block";
}

function showLightboxImage47() {
  const image = lightboxImages47[lightboxIndex47];

  document.getElementById("lightboxImage47").src = image.src;
  document.getElementById("lightboxImage47").alt = image.alt;
  document.getElementById("lightboxCaption47").textContent = image.alt;
}

function changeLightbox47(direction) {
  lightboxIndex47 =
    (lightboxIndex47 + direction + lightboxImages47.length) %
    lightboxImages47.length;

  showLightboxImage47();
}

// Evitar que los controles del lightbox cierren el fondo.
document
  .querySelectorAll("#lightbox47 .w3-modal-content")
  .forEach((content) => {
    content.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

// ---------------------------------------------------------
// Cerrar modales con Escape.
// ---------------------------------------------------------
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll("#s47 .w3-modal").forEach((modal) => {
      modal.style.display = "none";
    });
  }
});

// ---------------------------------------------------------
// Aplicar el resaltado de sintaxis de W3Schools.
// ---------------------------------------------------------
if (typeof w3CodeColor === "function") {
  w3CodeColor();
}

// =========================================================
// 50. W3.CSS FILTERS
// Funciones para filtrar tablas, listas y menús.
// =========================================================

// ---------------------------------------------------------
// 1. FILTRAR FILAS DE LA TABLA
// Busca en todas las celdas de cada fila.
// ---------------------------------------------------------
function filtrarTabla50() {
  const input = document.getElementById("filtroTabla50");
  const tabla = document.getElementById("tablaClientes50");
  const filas = tabla.querySelectorAll("tbody tr");

  const filtro = input.value.toLowerCase();

  filas.forEach((fila) => {
    const texto = fila.textContent.toLowerCase();

    // Mostrar la fila si contiene el texto buscado.
    fila.style.display = texto.includes(filtro) ? "" : "none";
  });
}

// ---------------------------------------------------------
// 2. FILTRAR ELEMENTOS DE LA LISTA
// Cada elemento li se evalúa por separado.
// ---------------------------------------------------------
function filtrarLista50() {
  const input = document.getElementById("filtroLista50");
  const elementos = document.querySelectorAll("#listaNombres50 li");

  const filtro = input.value.toLowerCase();

  elementos.forEach((elemento) => {
    const texto = elemento.textContent.toLowerCase();

    elemento.style.display = texto.includes(filtro) ? "" : "none";
  });
}

// ---------------------------------------------------------
// 3. ABRIR Y CERRAR EL MENÚ
// Alterna la visibilidad del desplegable.
// ---------------------------------------------------------
function alternarMenu50() {
  const menu = document.getElementById("menuSecciones50");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// ---------------------------------------------------------
// 4. FILTRAR LOS ENLACES DEL MENÚ
// Solo se buscan enlaces dentro de este desplegable.
// ---------------------------------------------------------
function filtrarMenu50() {
  const input = document.getElementById("filtroMenu50");
  const menu = document.getElementById("menuSecciones50");
  const enlaces = menu.querySelectorAll("a");

  const filtro = input.value.toLowerCase();

  // Mantener abierto el menú mientras se busca.
  menu.style.display = "block";

  enlaces.forEach((enlace) => {
    const texto = enlace.textContent.toLowerCase();

    enlace.style.display = texto.includes(filtro) ? "" : "none";
  });
}

// =========================================================
// 51. MATERIAL DESIGN
// Funciones de interacción para los ejemplos de la lección.
// =========================================================

// ---------------------------------------------------------
// 1. CERRAR UNA TARJETA DE DESCARGA
// Recibe el ID del bloque que queremos ocultar.
// ---------------------------------------------------------
function cerrarDescarga51(id) {
  const descarga = document.getElementById(id);

  if (descarga) {
    descarga.style.display = "none";
  }
}

// ---------------------------------------------------------
// 2. MOSTRAR UN AVISO DE NAVEGACIÓN
// Actualiza el texto informativo de la barra.
// ---------------------------------------------------------
function mostrarAviso51(seccion) {
  const aviso = document.getElementById("avisoNavegacion51");

  if (aviso) {
    aviso.textContent = "Has seleccionado: " + seccion;
  }
}

// =========================================================
// 52. W3.CSS CASE STUDY
// Control de la barra lateral del caso práctico.
// =========================================================

// ---------------------------------------------------------
// 1. ABRIR LA BARRA LATERAL
// Cambia la visualización de oculta a visible.
// ---------------------------------------------------------
function abrirSidebar52() {
  const sidebar = document.getElementById("sidebarCaso52");

  if (sidebar) {
    sidebar.style.display = "block";
  }
}

// ---------------------------------------------------------
// 2. CERRAR LA BARRA LATERAL
// Oculta el menú cuando el usuario lo cierra
// o selecciona uno de sus enlaces.
// ---------------------------------------------------------
function cerrarSidebar52() {
  const sidebar = document.getElementById("sidebarCaso52");

  if (sidebar) {
    sidebar.style.display = "none";
  }
}

// ---------------------------------------------------------
// Gestionar el envío de prueba del
// formulario de inscripción
//   05 Tajetas
// ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formInscripcion");

  if (formulario) {
    formulario.addEventListener("submit", function (event) {
      // Evitar el envío tradicional y la recarga de la página
      event.preventDefault();

      // Mostrar un mensaje de confirmación
      alert("¡Inscripción de prueba recibida!");
    });
  }
});


// ==================================================
// BUSCADOR DE LECCIONES
// ==================================================

const lessonSearch = document.getElementById("lessonSearch");
const lessonLinks = document.querySelectorAll(".demo-nav a");

lessonSearch.addEventListener("input", function () {
  const searchText = this.value.toLowerCase().trim();

  lessonLinks.forEach(function (link) {
    const lessonText = link.textContent.toLowerCase();

    if (lessonText.includes(searchText)) {
      link.style.display = "flex";
    } else {
      link.style.display = "none";
    }
  });
});


// ==================================================
// CABECERA DESPLEGABLE
// ==================================================

const headerToggle = document.getElementById("headerToggle");
const headerContent = document.getElementById("headerContent");

if (headerToggle && headerContent) {
  headerToggle.addEventListener("click", function () {
    const isOpen = headerContent.classList.toggle("active");

    headerToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

//  El truco maestro: un script de 3 líneas que borra las sangrías feas antes de mostrar el código
 
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll("pre code").forEach(function (element) {
        element.textContent = element.textContent.trim();
      });
//Prism.highlightAll();
    });
  
// =========================================================
// 23. 🌙 Modo oscuro (Dark Mode) en W3.CSS
// Control de modal del caso práctico.
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  // 1. Selección de elementos
  const botonAbrir = document.getElementById('btn-abrir-modal');
  const botonCerrarX = document.getElementById('btn-cerrar-x');
  const botonCerrarAbajo = document.getElementById('btn-cerrar-abajo');
  const contenedorModal = document.getElementById('modal-dark-demo');

  // Solo ejecutamos el código si el modal existe en el HTML
  if (contenedorModal) {
    // Buscamos la caja blanca que está dentro de este modal específico
    const cajaContenido = contenedorModal.querySelector('.w3-modal-content');

    // 2. Adaptado a tu cuadrícula (.mynav) o barra estándar (.w3-sidebar)
    const barraLateral = document.querySelector('.mynav, .w3-sidebar');

    // 3. Función para abrir y alinear el modal a la derecha
    function mostrarModal() {
      // Si la barra lateral existe y es visible, medimos su ancho. En móvil será 0.
      const anchoSidebar = barraLateral ? barraLateral.offsetWidth : 0;

      if (cajaContenido) {
        // En pantallas de más de 600px desplazamos a la derecha; en móvil centramos
        if (window.innerWidth > 600) {
          cajaContenido.style.marginLeft = anchoSidebar + 'px';
        } else {
          cajaContenido.style.marginLeft = 'auto';
        }
      }

      // Hacemos visible el modal
      contenedorModal.style.display = 'block';
    }

    // 4. Función para cerrar el modal
    function ocultarModal() {
      contenedorModal.style.display = 'none';
    }

    // 5. Asignación segura de los eventos 'click' (solo si cada botón existe)
    if (botonAbrir) botonAbrir.addEventListener('click', mostrarModal);
    if (botonCerrarX) botonCerrarX.addEventListener('click', ocultarModal);
    if (botonCerrarAbajo) botonCerrarAbajo.addEventListener('click', ocultarModal);
  }
});

// ==================================================
// s35
// ==================================================
// 1. Función para abrir y cerrar el modal
function w3_open_s35() {
  document.getElementById("mySidebar35").style.display = "block";
}

function w3_close_s35() {
  document.getElementById("mySidebar35").style.display = "none";
}

// 11. ANIMACIÓN (Ejemplo interactivo con Sidebar)
function w3_open() {
    document.getElementById("mySidebars35").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebars35").style.display = "none";
}

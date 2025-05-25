import { Developer } from './modules/Developer.js';

const santi = new Developer(
  "Santiago",
  "Soy un programador junior apasionado por el backend, MongoDB y Node.js. Me estoy formando paso a paso, aplicando buenas practicas."
);

// Proyectos con links reales o ejemplos
santi.agregarProyecto(
  "eCommerce MongoDB",
  "Proyecto de ventas con colecciones desnormalizadas, clases y validaciones.",
  "https://github.com/Santiago7i/Review_NodeJs_Acevedo_Santiago"
);

santi.agregarProyecto(
  "Gestión Escolar",
  "Proyecto de un Sistema escolar usando MongoDB, POO y agregaciones.",
  "https://github.com/Santiago7i/Proyecto_NodeJS_AcevedoSantiago"
);

santi.agregarProyecto(
  "Portafolio Web",
  "Este portafolio hecho en HTML, CSS y JavaScript.",
  "https://github.com/Santiago7i/Portafolio_SantiagoAcevedo"
);

// Puedes seguir agregando más así:
santi.agregarProyecto(
  "Calculadora",
  "Calculadora usando modulos ECMA",
  "https://github.com/Santiago7i/Calculadora_Node.js"
);

document.getElementById("bio").textContent = santi.obtenerResumen();
document.getElementById("lista-proyectos").innerHTML = santi.listarProyectos();

export class Developer {
  constructor(nombre, descripcion, proyectos = []) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.proyectos = proyectos;
  }

  agregarProyecto(nombre, descripcion, link) {
    this.proyectos.push({ nombre, descripcion, link });
  }

  obtenerResumen() {
    return `${this.descripcion}`;
  }

  listarProyectos() {
    return this.proyectos.map(p => `
      <li>
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <a href="${p.link}" target="_blank">Ver en GitHub</a>
      </li>
    `).join("");
  }
}

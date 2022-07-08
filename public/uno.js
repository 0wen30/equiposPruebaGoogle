const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const traerEquipos = async () => {
  try {
    const listaEquipos = document.querySelector('#listaEquipos');
    removeAllChildNodes(listaEquipos);
    const respuesta = await fetch("api/equipos");
    const datos = await respuesta.json();
    datos.forEach((equipo)=>listaEquipos.innerHTML += `<li>${equipo.nombre}</li>`)
  } catch (e) {
    console.log(e);
  }
}

const agregarEquipo = async (nombreEquipo) => {
  try {
    const respuesta = await fetch("api/equipos", {
      method: 'POST',
      body: JSON.stringify({ nombre: nombreEquipo }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    traerEquipos();
  } catch (e) {
    console.log(e);
  }
}

const main = () => {
  traerEquipos();
  document.querySelector('#formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    agregarEquipo(document.querySelector('#nombreEquipo').value);
  });
}

window.onload = main();
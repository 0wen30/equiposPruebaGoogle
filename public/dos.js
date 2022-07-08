const agregarEquipo = async (nombreEquipo) => {
  try {
    const respuesta = await fetch("http://localhost:5000/api/equipos", {
      method: 'POST',
      body: JSON.stringify({ nombre: nombreEquipo }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    const datos = await J
    console.log();
  } catch (e) {
    console.log(e);
  }
}

const main = () => {
  document.querySelector('#formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    agregarEquipo(document.querySelector('#nombreEquipo').value);
  });
}

window.onload = main();
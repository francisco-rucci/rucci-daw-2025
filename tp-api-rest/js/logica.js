var URL_API = 'https://rickandmortyapi.com/api/character';
var contenedor = document.getElementById('contenedor-personajes');
var mensajes = document.getElementById('contenedor-mensajes');

document.getElementById('boton-todos').addEventListener('click', function () {
  obtenerPersonajes(URL_API);
});

document.getElementById('boton-filtrar').addEventListener('click', function () {
  var nombre = document.getElementById('filtro-nombre').value;
  var estado = document.getElementById('filtro-estado').value;
  var especie = document.getElementById('filtro-especie').value;
  var tipo = document.getElementById('filtro-tipo').value;
  var genero = document.getElementById('filtro-genero').value;

  var url = URL_API + "/?name=" + nombre + "&status=" + estado + "&species=" + especie + "&type=" + tipo + "&gender=" + genero;
  obtenerPersonajes(url);
});

function obtenerPersonajes(url) {
  mensajes.innerHTML = '';
  contenedor.innerHTML = '';

  fetch(url)
    .then(function (respuesta) {
      if (!respuesta.ok) {
        throw new Error("Error en la solicitud");
      }
      return respuesta.json();
    })
    .then(function (datos) {
      mostrarPersonajes(datos.results);
    })
    .catch(function (error) {
      mensajes.innerHTML = 'Ocurrió un error al obtener los personajes.';
    });
}

function mostrarPersonajes(personajes) {
  personajes.forEach(function (personaje) {
    var tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-personaje';
    tarjeta.innerHTML =
      '<img src="' + personaje.image + '" alt="' + personaje.name + '">' +
      '<h3>' + personaje.name + '</h3>' +
      '<p>Estado: ' + personaje.status + '</p>' +
      '<p>Especie: ' + personaje.species + '</p>' +
      '<p>Género: ' + personaje.gender + '</p>';
    contenedor.appendChild(tarjeta);
  });
}

var nav = document.getElementsByClassName('estilo-nav')[0];
var enlaces = nav.getElementsByTagName('a');

for (var i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('mouseover', function(event){
        event.target.style.color = 'red';
    });

    enlaces[i].addEventListener('mouseout', function(event) {
    event.target.style.color = '';
  });
}



var asides = document.getElementsByTagName('aside');

for (var i = 0; i < asides.length; i++) {
  var enlaces = asides[i].getElementsByTagName('a');

  for (var j = 0; j < enlaces.length; j++) {
    enlaces[j].addEventListener('mouseover', function(event) {
      var articulo = event.target.closest('article');
      if (articulo) {
        articulo.style.backgroundColor = '#f0f0f0';
      }
    });

    enlaces[j].addEventListener('mouseout', function(event) {
      var articulo = event.target.closest('article');
      if (articulo) {
        articulo.style.backgroundColor = '';
      }
    });
  }
}



var seccion = document.getElementsByClassName('contacto');
var divContacto = seccion[0].getElementsByTagName('div')[0];
var enlace = divContacto.getElementsByTagName('a')[0];

divContacto.addEventListener('mouseover', function() {
  divContacto.style.backgroundColor = '#a0a0a0';
});

divContacto.addEventListener('mouseout', function() {
  divContacto.style.backgroundColor = '#c1c7c7';
});

divContacto.addEventListener('click', function() {
  window.location.href = enlace.href;
});
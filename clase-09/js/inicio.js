function validarNombre(nombre) {
  return nombre.length > 6 && nombre.indexOf(" ") !== -1;
}

function validarEmail(email) {
  return email.indexOf("@") !== -1 && email.indexOf(".") !== -1;
}

function validarContraseña(pass) {
  return pass.length >= 8;
}

function validarEdad(edad) {
  return !isNaN(edad) && Number(edad) > 18;
}

function validarTelefono(tel) {
  return /^\d{7,}$/.test(tel);
}

function validarDireccion(dir) {
  return dir.length >= 5;
}

function validarCiudad(ciudad) {
  return ciudad.length >= 3;
}

function validarCodigoPostal(cp) {
  return /^\d{4,8}$/.test(cp);
}

function validarDni(dni) {
  return /^\d{7,9}$/.test(dni);
}


function agregarEventosValidacion(idCampo, idError, validarFunc, mensajeError) {
  var campo = document.getElementById(idCampo);
  var error = document.getElementById(idError);

  campo.addEventListener("blur", function () {
    var valor = campo.value.trim();
    if (!validarFunc(valor)) {
      error.textContent = mensajeError;
    } else {
      error.textContent = "";
    }
  });

  campo.addEventListener("focus", function () {
    error.textContent = "";
  });
}


window.onload = function () {
  agregarEventosValidacion("nombreCompleto", "errorNombreCompleto", validarNombre, "Debe tener más de 6 caracteres y un espacio.");
  agregarEventosValidacion("email", "errorEmail", validarEmail, "Debe ser un email válido.");
  agregarEventosValidacion("contraseña", "errorContraseña", validarContraseña, "Debe tener al menos 8 caracteres.");
  agregarEventosValidacion("edad", "errorEdad", validarEdad, "Debe ser mayor a 18.");
  agregarEventosValidacion("telefono", "errorTelefono", validarTelefono, "Debe contener solo números y tener al menos 7 dígitos.");
  agregarEventosValidacion("direccion", "errorDireccion", validarDireccion, "Debe tener al menos 5 caracteres.");
  agregarEventosValidacion("ciudad", "errorCiudad", validarCiudad, "Debe tener al menos 3 letras.");
  agregarEventosValidacion("codigoPostal", "errorCodigoPostal", validarCodigoPostal, "Debe tener entre 4 y 8 números.");
  agregarEventosValidacion("dni", "errorDni", validarDni, "Debe tener entre 7 y 9 números.");


  var boton = document.getElementById("btnEnviar");
  boton.addEventListener("click", function () {
    var nombre = document.getElementById("nombreCompleto").value.trim();
    var email = document.getElementById("email").value.trim();
    var contraseña = document.getElementById("contraseña").value.trim();
    var edad = document.getElementById("edad").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var direccion = document.getElementById("direccion").value.trim();
    var ciudad = document.getElementById("ciudad").value.trim();
    var codigoPostal = document.getElementById("codigoPostal").value.trim();
    var dni = document.getElementById("dni").value.trim();

    var valido = true;
    var errores = "";

    if (!validarNombre(nombre)) {
      document.getElementById("errorNombreCompleto").textContent = "Debe tener más de 6 caracteres y un espacio.";
      errores += "- Nombre inválido\n";
      valido = false;
    }
    if (!validarEmail(email)) {
      document.getElementById("errorEmail").textContent = "Debe ser un email válido.";
      errores += "- Email inválido\n";
      valido = false;
    }
    if (!validarContraseña(contraseña)) {
      document.getElementById("errorContraseña").textContent = "Debe tener al menos 8 caracteres.";
      errores += "- Contraseña inválida\n";
      valido = false;
    }
    if (!validarEdad(edad)) {
      document.getElementById("errorEdad").textContent = "Debe ser mayor a 18.";
      errores += "- Edad inválida\n";
      valido = false;
    }
    if (!validarTelefono(telefono)) {
      document.getElementById("errorTelefono").textContent = "Debe contener solo números y tener al menos 7 dígitos.";
      errores += "- Teléfono inválido\n";
      valido = false;
    }
    if (!validarDireccion(direccion)) {
      document.getElementById("errorDireccion").textContent = "Debe tener al menos 5 caracteres.";
      errores += "- Dirección inválida\n";
      valido = false;
    }
    if (!validarCiudad(ciudad)) {
      document.getElementById("errorCiudad").textContent = "Debe tener al menos 3 letras.";
      errores += "- Ciudad inválida\n";
      valido = false;
    }
    if (!validarCodigoPostal(codigoPostal)) {
      document.getElementById("errorCodigoPostal").textContent = "Debe tener entre 4 y 8 números.";
      errores += "- Código Postal inválido\n";
      valido = false;
    }
    if (!validarDni(dni)) {
      document.getElementById("errorDni").textContent = "Debe tener entre 7 y 9 números.";
      errores += "- DNI inválido\n";
      valido = false;
    }

    if (valido) {
      alert(
        "Formulario enviado correctamente:\n" +
        "Nombre: " + nombre + "\n" +
        "Email: " + email + "\n" +
        "Edad: " + edad + "\n" +
        "Teléfono: " + telefono + "\n" +
        "Dirección: " + direccion + "\n" +
        "Ciudad: " + ciudad + "\n" +
        "Código Postal: " + codigoPostal + "\n" +
        "DNI: " + dni
      );
    } else {
      alert("Errores en el formulario:\n" + errores);
    }
  });
};
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 700) { // Ajusta el valor según sea necesario
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

function ValidarLogin(){
    var usuario = document.getElementById("usuario").value;
    var contrasenia = document.getElementById("contrasenia").value;
    var validator = true;
    if (usuario.length>=8) {
      document.getElementById("ErrorUsuario").style.display = "none";
    } else {
      var validator = false;
      document.getElementById("ErrorUsuario").style.display = "block";
    }

    if (contrasenia.length>=8) {
      document.getElementById("ErrorContrasenia").style.display = "none";
    } else {
      var validator = false;
      document.getElementById("ErrorContrasenia").style.display = "block";
    }

    if (validator==true) {
      if (usuario == "Kevin2006" && contrasenia == "SAO.2006") {
        alert("Esta es una cuenta de administrador");
      } else {
        alert("Ingresaste exitosamente!");
      }
    }

    if (validator==true) {
      document.getElementById("formulario").submit();
    }
}

function ValidarRegister(){
  var usuario = document.getElementById("usuario").value;
  var contrasenia = document.getElementById("contrasenia").value;
  var email = document.getElementById("email").value;
  var nombre = document.getElementById("nombre").value;
  var validator = true;

  if (email.length>0) {
    document.getElementById("ErrorEmail").style.display = "none";
  } else {
    var validator = false;
    document.getElementById("ErrorEmail").style.display = "block";
  }

  if (nombre.length>0) {
    document.getElementById("ErrorName").style.display = "none";
  } else {
    var validator = false;
    document.getElementById("ErrorName").style.display = "block";
  }

  if (usuario.length>=8) {
    document.getElementById("ErrorUsuario").style.display = "none";
  } else {
    var validator = false;
    document.getElementById("ErrorUsuario").style.display = "block";
  }

  if (contrasenia.length>=8) {
    document.getElementById("ErrorContrasenia").style.display = "none";
  } else {
    var validator = false;
    document.getElementById("ErrorContrasenia").style.display = "block";
  }

  if (validator==true) {
    if (usuario == "Kevin2006" && contrasenia == "SAO.2006") {
      alert("Esta cuenta ya existe, por favor inicia sesión");
      validator = false;
    } else {
      alert("Ingresaste exitosamente!");
    }
  }

  if (validator==true) {
    document.getElementById("formulario").submit();
  }
}

function ValidarEmail(){
  var email = document.getElementById("email").value;
  var validator = true;

  if (email.length>0) {
    document.getElementById("ErrorEmail").style.display = "none";
  } else {
    var validator = false;
    document.getElementById("ErrorEmail").style.display = "block";
  }

  if (validator==true) {
    if (email == "Kevin2006" || email == "HatsuneMiku@gmail.com") {
      alert("Este email o usuario no esta disponible");
      var validator = false;
    } else {
      alert("Se ha enviado un mail a tu buzon!");
    }
  }

  if (validator==true) {
    document.getElementById("formulario").submit();
  }
}

// Sistema de pago

function ValidarPayment(){
  var nombre = document.getElementById("nombre").value;
  var direccion = document.getElementById("direccion").value;
  var email = document.getElementById("email").value;
  var ciudad = document.getElementById("ciudad").value;
  var codigoPostal = document.getElementById("Codigop").value;
  var titular = document.getElementById("titular").value;
  var numeroTarjeta = document.getElementById("Nt").value;
  var fechaCaducidad = document.getElementById("FdC").value;
  var codigoSeguridad = document.getElementById("CdS").value;

  var validator = true;

  // Nombre
  if (nombre == "") {
      document.getElementById("ErrorName").style.display = "block";
      validator = false;
  } else {
      document.getElementById("ErrorName").style.display = "none";
  }

  // Dirección
  if (direccion == "") {
      document.getElementById("ErrorDireccion").style.display = "block";
      validator = false;
  } else {
      document.getElementById("ErrorDireccion").style.display = "none";
  }

  // Email
  if (email == "") {
      document.getElementById("ErrorEmail").style.display = "block";
      validator = false;
  } else {
      document.getElementById("ErrorEmail").style.display = "none";
  }

  // Ciudad
  if (ciudad == "") {
      document.getElementById("ErrorCiudad").style.display = "block";
      validator = false;
  } else {
      document.getElementById("ErrorCiudad").style.display = "none";
  }

  // Código Postal
  if (codigoPostal.length != 4) {
      document.getElementById("ErrorCodigop").style.display = "block";
      validator = false;
  } else {
      document.getElementById("ErrorCodigop").style.display = "none";
  }

  // Titular de la tarjeta
  if (titular == "") {
      document.getElementById("ErrorTitular").style.display = "block";
      validator = false;
  } else {
      document.getElementById("ErrorTitular").style.display = "none";
  }

  // Número de tarjeta
  if (numeroTarjeta.length != 16) {
      document.getElementById("ErrorNt").style.display = "block";
      validator = false;
  } else {
      document.getElementById("ErrorNt").style.display = "none";
  }

  // Fecha de caducidad
  if (fechaCaducidad == "") {
      document.getElementById("ErrorFdC").style.display = "block";
      validator = false;
  } else {
      document.getElementById("ErrorFdC").style.display = "none";
  }

  // Código de seguridad
  if (codigoSeguridad.length != 3) {
      document.getElementById("ErrorCdS").style.display = "block";
      validator = false;
  } else {
      document.getElementById("ErrorCdS").style.display = "none";
  }

  if (validator == true) {
      document.getElementById("formulario").submit();
      alert("Esta es una cuenta de administrador");
  }
}
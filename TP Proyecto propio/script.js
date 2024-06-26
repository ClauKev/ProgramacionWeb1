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
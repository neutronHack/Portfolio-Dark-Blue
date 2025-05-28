//Funcion para contactar. Click al boton "Contáctame" y redirigir a correo electrónico
document.getElementById("btn-contactame").addEventListener("click", function(e) {
    setTimeout(function() {
        window.location.href = "mailto:jimmycabalz.a.2011@gmail.com";
    }, 1000);
});

//Funcion para contactar. Click al icono de Contacto al final de la pagina y redirigir a correo electrónico
document.getElementById("segundoenvioemail").addEventListener("click", function(e) {
    setTimeout(function() {
        window.location.href = "mailto:jimmycabalz.a.2011@gmail.com";
    }, 1000);
});


//funcion para mostrar u ocultar el menu de navegacion movil
const toggle = document.getElementById("menu_toggle");
const menu = document.getElementById("mobile_menu");

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

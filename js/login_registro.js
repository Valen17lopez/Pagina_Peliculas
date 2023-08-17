document.getElementById("botonregistro").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);
document.getElementById("botoniniciosesion").addEventListener("click", InicioSesion);
//Declaraciom de variables
var contenedor_login_register = document.querySelector(".login_registro");
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario-register");
var caja_trasera_login = document.querySelector(".bienvenida_iniciosesion");
var caja_trasera_register = document.querySelector(".bienvenida_registro");

function register() {
    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left ="410px";
        formulario_login.style.display="none";
        caja_trasera_register.style.opacity="0";
        caja_trasera_login.style.opacity="1"
     }else{
         formulario_register.style.display = "block";
         contenedor_login_register.style.left = "0px";
         formulario_login.style.display = "none";
         caja_trasera_register.style.opacity = "0";
         caja_trasera_login.style.display = "block";
         caja_trasera_login.style.opacity = "1";
     }
 
}

function InicioSesion() {
    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "0";
    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        caja_trasera_login.style.opacity = "0";
    }
}

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block"
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

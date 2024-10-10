let menuVisible = false;
//Oculta o muestra el menu
function mostrarOcultarMenu() {
    if(menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//Oculta el menu una vez que se selecciona una opcion
function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distanciaSkills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        Array.from(habilidades).forEach(function (elemento) {
            elemento.classList.add(elemento.getAttribute("data-skill"));
        })
    }
}

//Se detecta que la vista del elemento es deslizado y aplica animacion de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
} 
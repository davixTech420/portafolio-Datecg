
// public/js/tema.js

const guardarTema = (tema) => {
    localStorage.setItem('tema', tema);
}

const cargarTemaGuardado = () => {
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'dark') {
        temaOscuro();
    } else {
        temaClaro();
    }
}

const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme","dark");
    document.querySelector("body").setAttribute("class","bg-dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-brightness-high text-white");
    document.querySelector("#sec-welcome").setAttribute("class", "bg-dark py-5");
    document.querySelector("#footer").setAttribute("class","bg-dark py-4 mt-auto");
    document.querySelector('#btn-projects').setAttribute("class","btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder");
    
    
    
    
const menu = document.querySelectorAll('#menu');    
menu.forEach(men => {
    men.setAttribute("class","navbar navbar-expand-lg navbar-dark py-3 bg-gray-900");
})

    document.querySelector("#menu").setAttribute("class","navbar navbar-expand-lg navbar-light py-3 bg-gray-900");

    
    
    
    const elementos = document.querySelectorAll('#texW');
elementos.forEach(elemento => {
    elemento.setAttribute("class", "nav-link text-white");
});



    // Guardar el tema seleccionado
    guardarTema('dark');
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme","light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill text-black");
    document.querySelector("body").setAttribute("class","bg-light");
    document.querySelector("#sec-welcome").setAttribute("class", "bg-light py-5");
    document.querySelector("#menu").setAttribute("class","navbar navbar-expand-lg navbar-light bg-white py-3 bg-light");
    document.querySelector("#footer").setAttribute("class","bg-white py-4 mt-auto");
    document.querySelector('#btn-projects').setAttribute("class","btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder");
    
    const elementos = document.querySelectorAll('#texW');
elementos.forEach(elemento => {
    elemento.setAttribute("class", "nav-link text-dark");
});


    // Guardar el tema seleccionado
    guardarTema('light');
}

const cambiarTema = () => {
    if (document.querySelector("body").getAttribute("data-bs-theme") === "light") {
        temaOscuro();
    } else {
        temaClaro();
    }
    // Guardar el tema seleccionado
    guardarTema(document.querySelector("body").getAttribute("data-bs-theme"));
}

// Cargar el tema guardado al cargar la página
window.onload = cargarTemaGuardado;
















/* 
const guardarTema = (tema) => {
    localStorage.setItem('tema', tema);
}

const cargarTemaGuardado = () => {
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'dark') {
        temaOscuro();
    } else {
        temaClaro();
    }
}

const temaOscuro = () => {
    document.body.setAttribute("data-bs-theme","dark");
    document.body.className = "bg-dark";
    document.getElementById("dl-icon").className = "bi bi-brightness-high text-white";
    document.getElementById("sec-welcome").className = "bg-dark py-5";
    document.getElementById("menu").className = "navbar navbar-expand-lg navbar-light py-3 bg-gray-900";
    document.getElementById("footer").className = "bg-dark py-4 mt-auto";
    document.getElementById("btn-projects").className = "btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder";

    // Guardar el tema seleccionado
    guardarTema('dark');
}

const temaClaro = () => {
    document.body.setAttribute("data-bs-theme","light");
    document.getElementById("dl-icon").className = "bi bi-moon-fill text-black";
    document.body.className = "bg-light";
    document.getElementById("sec-welcome").className = "bg-light py-5";
    document.getElementById("menu").className = "navbar navbar-expand-lg navbar-light bg-white py-3 bg-light";
    document.getElementById("footer").className = "bg-white py-4 mt-auto";
    document.getElementById("btn-projects").className = "btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder";

    // Guardar el tema seleccionado
    guardarTema('light');
}

const cambiarTema = () => {
    if (document.body.getAttribute("data-bs-theme") === "light") {
        temaOscuro();
    } else {
        temaClaro();
    }
    // Guardar el tema seleccionado
    guardarTema(document.body.getAttribute("data-bs-theme"));
}

// Cargar el tema guardado al cargar la página
document.addEventListener("DOMContentLoaded", cargarTemaGuardado);

 */
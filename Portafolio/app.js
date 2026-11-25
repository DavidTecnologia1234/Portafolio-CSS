let cambio = document.getElementById("cambio");
let fotoCambio = document.querySelector('#timmy');
cambio.addEventListener("click", () => {
    fotoCambio.src = "https://media1.tenor.com/m/IeCRClL_VyYAAAAC/brain-brain-meme.gif";
});

const botonMenu = document.getElementById("menu-hamburguesa");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("activo");

    const abierto = menu.classList.contains("activo");

    botonMenu.setAttribute("aria-expanded", abierto);
});

const enlaces = menu.querySelectorAll("a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("activo");
        botonMenu.setAttribute("aria-expanded", "false");
    });
});
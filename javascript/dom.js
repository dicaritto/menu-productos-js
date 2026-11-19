import { productos, crearCard } from "./productos.js";

const btn = document.querySelector("#btn");
const menu = document.querySelector("#menu");
const contenedor = document.querySelector("#item");

export function inicializarMenu() {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const valor = menu.value;

//validar que usuario seleccione un producto
        if (valor === "") {
            alert("Selecciona el producto de nuestras opciones de menú");
            return;
        }

    const producto = productos[valor];

// producto en pantalla
contenedor.innerHTML = "";
contenedor.appendChild(crearCard(producto));
});
}
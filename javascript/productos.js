// base de datos simple
export const productos = {
    1: {
        nombre: "Helado",
        precio: "5000",
        img: "img/helado.png",
        alt: "imagen de helado"
    },
    2: {
        nombre: "Hamburguesa",
        precio: "15000",
        img: "img/hamburguesa.png",
        alt: "imagen de hamburguesa"
    },
    3: {
        nombre: "Perro caliente",
        precio: "10000",
        img: "img/perro.png",
        alt: "imagen de perro caliente"
    },
    4: {
        nombre: "Ensalada",
        precio: "8000",
        img: "img/ensalada.png",
        alt: "imagen de ensalada"
    },
};

//crear tarjeta
export function crearCard(producto) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = producto.img;
    img.alt = producto.alt;

    const container = document.createElement("div");
    container.classList.add("container");

    const nombre = document.createElement("h4");
    nombre.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `Precio: $ ${producto.precio} COP`;

    container.append(nombre, precio);
    card.append(img, container);
    return card;
}
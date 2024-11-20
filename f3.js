document.addEventListener("DOMContentLoaded", () => {
  const equipamientoDiv = document.getElementById("equipamiento");

  fetch("http://localhost:5000/productos")
    .then((response) => response.json())
    .then((productos) => {
      productos.forEach((producto) => {
        const productoHTML = `
          <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <button onclick="window.open('${producto.enlace_afiliado}')">Comprar</button>
          </div>
        `;
        equipamientoDiv.innerHTML += productoHTML;
      });
    })
    .catch((error) => console.error("Error cargando los productos:", error));
});

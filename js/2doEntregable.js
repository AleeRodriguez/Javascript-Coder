let carrito = JSON.parse(localStorage.getItem("productsenJson")) || [];

let renderCart = () => {
  let html = ``;
  for (let i = 0; i < carrito.length; i++) {
    html += `
      <div style=" border-radius: 20px; border: 2px solid turquoise;display: inline-block; background-color: turquoise; margin: 5px">
    <p style="visibility:hidden">id:${carrito[i].id}</p>
    <p style="background-color: white">${carrito[i].day}</p>
    <p>Comida: ${carrito[i].food}</p>
    <p>Precio:${carrito[i].price}</p>
    <p>Categoria:${carrito[i].category}</p>
    <p><img style="width: 150px; height: 150px" src="${carrito[i].img}"></p>
    <button style="border-radius:20px; background-color: green;"cursor:pointer;" onclick="removeFromCart(${carrito[i].id});" >Eliminar 🗑️</button>
    </div>`;
  }
  document.getElementById("div-cart").innerHTML = html;
};
renderCart();


let saveToLocalStorage = () => {
  let storageJSON = JSON.stringify(carrito);
  localStorage.setItem("productsEnJson", storageJSON);
};

function renderProductsApi() {
  fetch("../datalocal.json")
    .then((res) => res.json())
    .then((products) => {
      let html = "";
      for (let i = 0; i < products.length; i++) {
        html += `
        <div onclick="addToCart;" style="border-radius:20px; border: 2px solid turquoise;display: inline-block; background-color: turquoise; margin: 5px">
          <p style="visibility:hidden">id:${products[i].id}</p>
          <p style="background-color: white">${products[i].day}</p>
          <p>Comida: ${products[i].food}</p>
          <p>Precio:${products[i].price}</p>
          <p>Categoria:${products[i].category}</p>
          <p><img style="width: 150px; height: 150px;" src="${products[i].img}"></p>
          <button style= "border-radius:20px; background-color: green;" onclick="addToCart(${products[i].id});">Seleccionar 🛒</button>
        </div>`;
      }
      document.getElementById("div-products").innerHTML = html;
    })
    .catch((e) => {
      console.log(e);
    });
}
renderProductsApi();
renderCart();


let addToCart = (id) => {
  fetch("../datalocal.json")
    .then((res) => res.json())
    .then((products) => {
      const foundProduct = products.find((item) => item.id == id);
      carrito.push(foundProduct);
      Swal.fire({
        title: "Producto agregado al carro",
        text: "Queres agregar mas productos?",
        icon: "success",
        confirmButtonText: "Vamos!",
      });
      renderCart();
      saveToLocalStorage();
    })
    .catch((e) => {
      console.log(e);
    });
}
renderCart();

function removeFromCart(id) {
  Swal.fire({
    title: "Está seguro de eliminar el producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      const foundProduct = carrito.find((item) => item.id == id);
      const index = carrito.indexOf(foundProduct);
      carrito.splice(index, 1);
      renderCart();
      saveToLocalStorage();
      Swal.fire({
        title: "Eliminado del carrito!",
        icon: "success",
        text: "El producto fue eliminado de su carrito",
      });
    }
  });
}

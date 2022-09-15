const copyProducts = [...products];
let cart = [];
let categoryFilter = "";

function setCategoryFilter(category) {
  products = [...copyProducts];
  if (category == "No veggie" || category == "veggie") {
    products = products.filter((item) => item.category == category);
  }
  renderProductsApi()
}
/*function renderCart() {
  fetch("../datalocal.json")
    .then((res) => res.json())
    .then((products) => {
  let html = "";
  for (let i = 0; i < cart.length; i++) {
    html =
      html +
      `
    <div style=" border-radius: 20px; border: 2px solid turquoise;display: inline-block; background-color: turquoise; margin: 5px">
    <p style="visibility:hidden">id:${cart[i].id}</p>
    <p style="background-color: white">${cart[i].day}</p>
    <p>Comida: ${cart[i].food}</p>
    <p>Precio:${cart[i].price}</p>
    <p>Categoria:${cart[i].category}</p>
    <p><img style="width: 150px; height: 150px" src="${cart[i].img}"></p>
    <span  ></span>
    <button style="border-radius:20px; background-color: green;"cursor:pointer;" onclick="removeFromCart(${cart[i].id});" >Eliminar 🗑️</button>
    </div>`;
  }
  document.getElementById("div-cart").innerHTML = html;
})}

let saveToLocalStorage = () => {
  let storageJSON = JSON.stringify(cart);
  localStorage.setItem("cartEnJson", cartEnJson);
};

let addToCart = (id) =>{
  fetch("../datalocal.json")
    .then((res) => res.json())
    .then((products) => {
      const foundProduct = products.find((item) => item.id == id);
      cart.push(foundProduct);
      let cartEnJson = JSON.stringify(cart);
      localStorage.setItem("cartEnJson", cartEnJson);
      Swal.fire({
        title: "Producto agregado al carro",
        text: "Queres agregar mas productos?",
        icon: "success",
        confirmButtonText: "Vamos!",
  });
  renderCart();
  saveToLocalStorage();
  console.log(cart);
}

function removeFromCart(id) {
  Swal.fire({
    title: "Está seguro de eliminar el producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      const foundProduct = cart.find((item) => item.id == id);
      const index = cart.indexOf(foundProduct);
      cart.splice(index, 1);
      renderCart();

      let cartEnJson = JSON.stringify(cart);
      localStorage.setItem("cartEnJson", cartEnJson);
      renderCart();
      Swal.fire({
        title: "Eliminado del carrito!",
        icon: "success",
        text: "El producto fue eliminado de su carrito",
      });
    }
  )};
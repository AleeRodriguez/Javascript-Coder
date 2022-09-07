/* Operador Ternario*/
let preguntaInicio = prompt("Hola! queres menu veggie o no veggie?");
preguntaInicio == "no veggie"
  ? alert("Te recomendamos la pestaña No veggie!!")
  : alert("Te recomendamos la pestaña veggie!");

let products = [
  {
    id: 0,
    day: "Lunes",
    food: "Pechuga grille y papas",
    price: 700,
    category: "No veggie",
    img: "https://recetadepollo.org/wp-content/uploads/Pollo-con-papas-en-cu%C3%B1a.jpg",
  },
  {
    id: 1,
    day: "Lunes",
    food: "Tarta de zanahoria",
    price: 700,
    category: "veggie",
    img: "https://www.deliciosi.com/images/2300/2355/tarta-zanahoria-thermomix.jpg",
  },
  {
    id: 2,
    day: "Martes",
    food: "Ensalada con huevo",
    price: 600,
    category: "No veggie",
    img: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/12/recetas-de-ensaladas-con-vegetales-cocina-delirante.jpeg",
  },
  {
    id: 3,
    day: "Martes",
    food: "Ensalada Caesar",
    price: 600,
    category: "No veggie",
    img: "https://cdn.kiwilimon.com/recetaimagen/36391/45060.jpg",
  },
  {
    id: 4,
    day: "Miercoles",
    food: "Wrap de vegetales",
    price: 700,
    category: "veggie",
    img: "https://assets.unileversolutions.com/recipes-v2/214010.jpg",
  },
  {
    id: 5,
    day: "Miercoles",
    food: "Wrap de pollo",
    price: 700,
    category: "No veggie",
    img: "https://recetinas.com/wp-content/uploads/2018/03/wrap-de-pollo.jpg",
  },
  {
    id: 6,
    day: "Jueves",
    food: "berenjena con pure",
    price: 700,
    category: "veggie",
    img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/887/695/products/milanesas-de-berenjena-con-pure-de-cabutia1-ab6d4885fe0aed6d4916019212193770-640-0.jpg",
  },
  {
    id: 7,
    day: "Jueves",
    food: "Milanesa con pure",
    price: 700,
    category: "No veggie",
    img: "https://unareceta.com/wp-content/uploads/2015/06/milanesa-con-pure.jpg",
  },
  {
    id: 8,
    day: "Viernes",
    food: "Ravioles con salsa ",
    price: 700,
    category: "No veggie",
    img: "https://okdiario.com/img/2014/07/04/raviolis-de-tomate-a-las-finas-hierbas-655x368.jpg",
  },
  {
    id: 9,
    day: "Viernes",
    food: "Sorrentinos de la casa ",
    price: 900,
    category: "No veggie",
    img: "https://cdn.buenavibra.es/wp-content/uploads/2021/02/26085022/Webp.net-resizeimage-2021-02-26T085002.689-e1614340828581.jpg",
  },
];
/*Spread de array*/
const copyProducts = [...products];
let cart = [{}];
let categoryFilter = "";

function setCategoryFilter(category) {
  products = [...copyProducts];
  if (category == "No veggie" || category == "veggie") {
    products = products.filter((item) => item.category == category);
  }
  renderProducts();
}
function renderProducts() {
  let html = "";
  for (let i = 0; i < products.length; i++) {
    html =
      html +
      `
    <div onclick="addToCart;" style="border-radius:20px; border: 2px solid turquoise;display: inline-block; background-color: turquoise; margin: 5px">
    <p style="visibility:hidden">id:${products[i].id}</p>
    <p style="background-color: white">${products[i].day}</p>
    <p>Comida: ${products[i].food}</p>
    <p>Precio:${products[i].price}</p>
    <p>Categoria:${products[i].category}</p>
    <p><img style="width: 150px; height: 150px" src="${products[i].img}"></p>
    <button onclick="addToCart(${products[i].id});">Seleccionar 🛒</button>
    </div>`;
  }
  document.getElementById("div-products").innerHTML = html;
}
function renderCart() {
  let html = "";
  for (let i = 0; i < cart.length; i++) {
    html =
      html +
      `
    <div style=" border-radius: 20px; border: 2px solid turquoise;display: inline-block; background-color: turquoise; margin: 5px">
    <p style="font-weight: bold">id:${cart[i].id}</p>
    <p style="background-color: white">${cart[i].day}</p>
    <p>Comida: ${cart[i].food}</p>
    <p>Precio:${cart[i].price}</p>
    <p>Categoria:${cart[i].category}</p>
    <p><img style="width: 150px; height: 150px" src="${cart[i].img}"></p>
    <span  ></span>
    <button style= "cursor:pointer;" onclick="removeFromCart(${cart[i].id});" >Eliminar 🗑️</button>
    </div>`;
  }
  document.getElementById("div-cart").innerHTML = html;
}
function addToCart(id) {
  const foundProduct = products.find((item) => item.id == id);
  cart.push(foundProduct);
  let cartEnJson = JSON.stringify(cart);
  localStorage.setItem("cartEnJson", cartEnJson);
  let carritoRecuperado = localStorage.getItem("cartEnJson");
  carritoRecuperado = JSON.parse(carritoRecuperado);
  Swal.fire({
    title: "Producto agregado al carro",
    text: "Queres agregar mas productos?",
    icon: "success",
    confirmButtonText: "Vamos!",
  });
  renderCart();
}
function removeFromCart(id) {
  cart.splice(id, 1);
  let cartEnJson = JSON.stringify(cart);
  localStorage.setItem("cartEnJson", cartEnJson);
  let carritoRecuperado = localStorage.getItem("cartEnJson");
  carritoRecuperado = JSON.parse(carritoRecuperado);
  Swal.fire({
    title: "Está seguro de eliminar el producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Eliminado del carrito!",
        icon: "success",
        text: "El producto fue eliminado de su carrito",
      });
    }
  });
  renderCart();
}
renderProducts();

/*Desectructuracion de un array*/
const veggies = [
  "berenjena con pure",
  "Wrap de vegetales",
  "tarta de zanahoria",
];
const [frito, horno, alHorno] = veggies;
console.log(frito);

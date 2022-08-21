const products = [
    {id:0, day:'Lunes',food: 'Pechuga grille con pure', price: 700, category: 'carne', img: 'https://recetadepollo.org/wp-content/uploads/Pollo-con-papas-en-cu%C3%B1a.jpg'},
    {id:1, day:'Martes',food: 'Ensalada Caesar', price: 600, category:'ensaladas', img: 'https://cdn.kiwilimon.com/recetaimagen/36391/45060.jpg'},
    {id:2, day:'Miercoles',food: 'Wrap de vegetales', price: 700, category: 'Veggie', img: 'https://assets.unileversolutions.com/recipes-v2/214010.jpg'},
    {id:3, day:'Jueves',food: 'Milanesa con pure', price: 700, category: 'carne', img: 'https://unareceta.com/wp-content/uploads/2015/06/milanesa-con-pure.jpg'},
    {id:4, day:'Viernes',food: 'Ravioles con salsa ', price: 700, category: 'pastas', img: 'https://okdiario.com/img/2014/07/04/raviolis-de-tomate-a-las-finas-hierbas-655x368.jpg'},
];
let cart = [];

function renderProducts() {
    let html = '';
    for (let i = 0; i < products.length; i++){
    html = html + `
    <div onclick="addToCart(${products[i].id});" style="border: 2px solid turquoise;display: inline-block; background-color: turquoise; margin: 5px">
    <p style="font-weight: bold">id:${products[i].id}</p>
    <p style="background-color: white">${products[i].day}</p>
    <p>Comida: ${products[i].food}</p>
    <p>Precio:${products[i].price}</p>
    <p>Categoria:${products[i].category}</p>
    <p><img style="width: 150px; height: 150px" src="${products[i].img}"></p>
    </div>`;
    document.getElementById("div-products").innerHTML = html;
    }
}
function renderCart() {
    let html = '';
    for (let i = 0; i < cart.length; i++){
    html = 
    html + `
    <div style="border: 2px solid turquoise;display: inline-block; background-color: turquoise; margin: 5px">
    <p style="font-weight: bold">id:${cart[i].id}</p>
    <p style="background-color: white">${cart[i].day}</p>
    <p>Comida: ${cart[i].food}</p>
    <p>Precio:${cart[i].price}</p>
    <p>Categoria:${cart[i].category}</p>
    <p><img style="width: 150px; height: 150px" src="${cart[i].img}"></p>
    <span style= "cursor:pointer;" onclick="removeFromCart(${cart[i].id});">🗑️</span>
    </div>`;
    document.getElementById("div-cart").innerHTML = html;
    }
}
function addToCart(id){
    const foundProduct = products.find((item) => item.id == id);
    cart.push(foundProduct);
    renderCart();
}
function removeFromCart(id) {
    cart.splice(id,1);
    renderCart();
}
renderProducts();

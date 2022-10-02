const copyProducts = [...products];
let cart = [];
let categoryFilter = "";

function setCategoryFilter(category) {
  products = [...copyProducts];
  if (category == "No veggie" || category == "veggie") {
    products = products.filter((item) => item.category == category);
  }
  renderProductsApi();
}

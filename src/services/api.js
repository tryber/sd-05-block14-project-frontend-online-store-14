export async function getCategories() {
  fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
  .then((response) => response.json());
}

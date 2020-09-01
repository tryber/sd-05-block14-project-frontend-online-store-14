export async function getCategories() {
  fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url;
  if (categoryId && query) url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  else if (query) url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  else url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const result = fetch(url).then((response) => response.json());
  return result;
}

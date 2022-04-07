import apiFetch from "./api-fetch";

export async function indexProduct() {
  return await apiFetch(`products`);
}

export async function showCategory(ProductID) {
  return await apiFetch(`products/${ProductID}`);
}

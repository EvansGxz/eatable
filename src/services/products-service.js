import apiFetch from "./api-fetch";

export async function indexProduct() {
  return await apiFetch(`products`);
}

export async function showProduct(ProductID) {
  return await apiFetch(`products/${ProductID}`);
}

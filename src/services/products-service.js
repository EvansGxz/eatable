import apiFetch from "./api-fetch";

export async function indexProduct() {
  return await apiFetch(`index`);
}

export async function showCategory(ProductID) {
  return await apiFetch(`product/${ProductID}`);
}

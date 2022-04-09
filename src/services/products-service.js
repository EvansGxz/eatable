import apiFetch from "./api-fetch";

export async function indexProduct() {
  return await apiFetch(`products`);
}

export async function showProduct(ProductID) {
  return await apiFetch(`products/${ProductID}`);
}

export async function updateProduct(id, data) {
  return await apiFetch(`products/${id}`, { body: data, method: "PATCH" });
}

export async function createProduct(data) {
  return await apiFetch(`products/`, { body: data });
}

export async function deleteProduct(id) {
  return await apiFetch(`products/${id}`, { method: "DELETE" });
}

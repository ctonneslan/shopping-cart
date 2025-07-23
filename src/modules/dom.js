import { fetchProducts } from "./api";
import { addToCart } from "./cart";

export async function renderProductList(container) {
  container.innerHTML = "<p>Loading products...</p>";

  const products = await fetchProducts();
  container.innerHTML = "";

  products.forEach((product) => {
    const item = document.createElement("div");
    item.classList.add("product");

    item.innerHTML = `
        <img src="${product.image}" alt="${product.title}" width="100">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <button data-id="${product.id}">Add to Cart</button>
    `;

    item.querySelector("button").addEventListener("click", () => {
      addToCart(product);
    });

    container.appendChild(item);
  });
}

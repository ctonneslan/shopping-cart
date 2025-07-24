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
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <button data-id="${product.id}">Add to Cart</button>
    `;

    item.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(product);
    });

    item.addEventListener("click", () => {
      openModal(product);
    });

    container.appendChild(item);
  });
}

function openModal(product) {
  const modalOverlay = document.getElementById("modal-overlay");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h2>${product.title}</h2>
    <p><strong>$${product.price}</strong></p>
    <p>${product.description}</p>
    <button id="modal-add-to-cart">Add to Cart</button>
  `;

  document.getElementById("modal-add-to-cart").addEventListener("click", () => {
    addToCart(product);
    closeModal();
  });

  document.getElementById("close-modal").addEventListener("click", closeModal);

  modalOverlay.classList.remove("hidden");
}

document.addEventListener("click", (e) => {
  if (e.target.id === "modal-overlay" || e.target.id === "close-modal") {
    closeModal();
  }
});

function closeModal() {
  document.getElementById("modal-overlay").classList.add("hidden");
}

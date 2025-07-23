const cart = [];

export function addToCart(product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartUI();
}

export function removeFromCart(productId) {
  const index = cart.findIndex((p) => p.id === productId);
  if (index !== -1) cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const container = document.querySelector("#cart");
  container.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
        ${item.title} x ${item.quantity} - $${(
      item.price * item.quantity
    ).toFixed(2)}
        <button data-id="${item.id}">Remove</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
      removeFromCart(item.id);
    });

    total += item.price * item.quantity;
    container.appendChild(div);
  });

  document.getElementById("cart-count").textContent = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalDiv = document.createElement("div");
  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
  container.appendChild(totalDiv);
}

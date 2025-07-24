const CART_KEY = "shoppingCart";

export function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (err) {
    console.error("Error saving cart to localStorage:", err);
  }
}

export function loadCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (err) {
    console.error("Error loading cart from localStorage:", err);
    return [];
  }
}

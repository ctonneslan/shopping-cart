import "./styles.css";
import { renderProductList } from "./modules/dom";
import { setupCheckoutForm } from "./modules/checkout";
import { updateCartUI } from "./modules/cart";

document.body.innerHTML = `
    <header>
        <div class="logo">Shoply</div>
        <div class="cart-summary">
            🛒 <span id="cart-count">0</span>
        </div>
    </header>
    <main id="app">
        <div id="products-section">
            <h1>Products</h1>
            <div id="products"></div>
        </div>
        <div id="cart-section">
            <h2>Cart</h2>
            <div id="cart"></div>
            <h3>Checkout</h3>
            <form id="checkout-form">
                <input type="text" id="name" placeholder="Full Name" required>
                <input type="email" id="email" placeholder="Email" required>
                <input type="text" id="card" placeholder="Card Number" maxlength="19" required>
                <input type="text" id="exp" placeholder="MM/YY" maxlength="5" required>
                <input type="text" id="cvv" placeholder="CVV" maxlength="4" required>
                <button type="submit">Place Order</button>
            </form>
        </div>
    </main>
    <div id="modal-overlay" class="hidden">
        <div id="modal">
            <button id="close-modal">&times;</button>
            <div id="modal-content"></div>
        </div>
    </div>    
`;

renderProductList(document.getElementById("products"));
setupCheckoutForm();
updateCartUI();

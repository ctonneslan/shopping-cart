import "./styles.css";
import { renderProductList } from "./modules/dom";

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
        </div>
    </main>    
`;

renderProductList(document.getElementById("products"));

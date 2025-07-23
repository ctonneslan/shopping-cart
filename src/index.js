import "./styles.css";
import { renderProductList } from "./modules/dom";

const app = document.getElementById("app");

app.innerHTML = `
    <div id="products-section">
        <h1>Fake Store</h1>
        <div id="products"></div>
    </div>
    <div id="cart-section">
        <h2>Cart</h2>
        <div id="cart"></div>
    </div>
`;

renderProductList(document.getElementById("products"));

import "./styles.css";
import { renderProductList } from "./modules/dom";

const app = document.getElementById("app");

app.innerHTML = `
    <h1>Fake Store</h1>
    <div id="products"></div>
    <h2>Cart</h2>
    <div id="cart"></div>
`;

renderProductList(document.getElementById("products"));

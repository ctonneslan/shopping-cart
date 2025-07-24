export function setupCheckoutForm() {
  const form = document.getElementById("checkout-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const card = form.card.value.trim();
    const exp = form.exp.value.trim();
    const cvv = form.cvv.value.trim();

    const isValid =
      name &&
      email.includes("@") &&
      /^\d{16,19}$/.test(card.replace(/\s+/g, "")) &&
      /^\d{2}\/\d{2}$/.test(exp) &&
      /^\d{3,4}$/.test(cvv);

    if (!isValid) {
      alert("Please fill in all fields correctly.");
      return;
    }
    alert("🎉 Order placed successfully!");
    form.reset();
  });
}

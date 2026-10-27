// Bootstrap supplies the modal. This event fills it with the chosen product.
const productModal = document.querySelector("#productModal");

productModal.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget;
  document.querySelector("#selected-product").textContent =
    button.dataset.product + " — " + button.dataset.price;
});

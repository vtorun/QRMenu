import { renderDetailPage, renderNotFoundedPage } from "./until.js";

const param = new URLSearchParams(window.location.search);
const id = param.get("id");
const outlet = document.getElementById("outlet");
document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("../db.json");
  const data = await response.json();
  const product = data.menu.find((item) => item.id == id);
  if (!product) {
    renderNotFoundedPage(outlet);
  } else {
    renderDetailPage(product, outlet);
  }
});

import { fetchMenu } from "./api.js";
import { renderCards } from "./until.js";

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMenu();
  renderCards(data.menu);
  const inputs = document.querySelectorAll("#buttons input");
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selected = input.id;
      if (selected === "all") {
        renderCards(data.menu);
      } else {
        const filtered = data.menu.filter((item) => item.category == selected);
        renderCards(filtered);
      }
    });
  });
});

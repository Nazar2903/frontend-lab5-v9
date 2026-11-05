const details = document.getElementById("details");

const tooltip = document.createElement("span");
tooltip.className = "tooltip";
tooltip.textContent = "Дякуючи Вам, ми стаємо кращі! Конкретизуйте мету звернення, будь ласка";
tooltip.style.display = "none";
details.parentNode.appendChild(tooltip);

details.addEventListener("mouseenter", () => {
    details.style.backgroundColor = "#fff4dc";
    details.style.border = "2px solid darkgoldenrod";
    details.style.boxShadow = "0 0 10px rgba(122, 46, 58, 0.5)";
    tooltip.style.display = "block";
});

details.onmouseleave = () => {
    details.style.backgroundColor = "";
    details.style.border = "";
    details.style.boxShadow = "";
    tooltip.style.display = "none";
};

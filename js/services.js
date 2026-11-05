const submenus = document.querySelectorAll(".submenu");

function closeSubmenus() {
    submenus.forEach(submenu => submenu.style.display = "none");
}

closeSubmenus();

document.querySelectorAll(".menu-title").forEach(menuTitle => {
    menuTitle.addEventListener("click", () => {
        const submenu = menuTitle.nextElementSibling;
        const isOpen = submenu.style.display === "block";
        closeSubmenus();
        if (!isOpen) {
            submenu.style.display = "block";
        }
    });
});

document.querySelectorAll(".submenu a").forEach(link => {
    link.addEventListener("click", closeSubmenus);
});

const conditions = [
    "Прання при 30 °C у делікатному режимі. Вовняні вироби - лише ручне прання або хімчистка.",
    "Догляд залежить від тканини клієнта: дотримуйтесь позначок на етикетці тканини.",
    "Штори з блекауту прати при 30 °C без віджиму, оксамит - лише хімчистка, тюль - при 30 °C.",
    "Після підгону виріб прати так само, як до нього. Не прасувати шви на високій температурі.",
    "Перед пранням застібати блискавку повністю. Не прати при температурі вище 40 °C.",
    "Відреставровані та вінтажні речі - лише ручне прання у прохолодній воді або хімчистка."
];

document.querySelectorAll('img[src*="serv"]').forEach((img, i) => {
    const card = document.createElement("div");
    card.className = "flip-card";
    const inner = document.createElement("div");
    inner.className = "flip-inner";
    inner.style.transition = "transform 0.6s";
    const back = document.createElement("div");
    back.className = "flip-back";
    back.innerHTML = "<h4>Умови догляду</h4><p>" + conditions[i] + "</p>";

    img.parentNode.replaceChild(card, img);
    inner.appendChild(img);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener("mouseenter", () => inner.style.transform = "rotateY(180deg)");
    card.addEventListener("mouseleave", () => inner.style.transform = "");
});

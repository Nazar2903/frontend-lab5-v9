const header = document.querySelector("header");
const title = document.querySelector("header h1");
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll("nav li");
const pictures = ["🧵", "✂️", "🪡", "🧶", "📏"];

header.style.overflow = "hidden";

function showPicture() {
    const picture = document.createElement("span");
    picture.textContent = pictures[Math.floor(Math.random() * pictures.length)];
    picture.style.position = "absolute";
    picture.style.zIndex = "-1";
    picture.style.lineHeight = "1";
    picture.style.opacity = "0";
    picture.style.fontSize = parseFloat(getComputedStyle(title).fontSize) * 2 + "px";
    picture.style.left = Math.random() * 90 + "%";
    picture.style.top = Math.random() * 50 + "%";
    header.appendChild(picture);
    picture.animate([{ opacity: 0 }, { opacity: 0.7 }, { opacity: 0 }], 3000).onfinish = () => picture.remove();
}

setInterval(showPicture, 1000);

function checkScreenWidth() {
    if (window.innerWidth <= 768) {
        header.style.display = "grid";
        header.style.gridTemplateColumns = "1fr auto";
        header.style.columnGap = "15px";
        nav.style.gridColumn = "2";
        nav.style.gridRow = "1 / 4";
        navItems.forEach(li => {
            li.style.display = "block";
            li.style.margin = "0 0 5px";
        });
    } else {
        header.style.display = "";
        header.style.gridTemplateColumns = "";
        header.style.columnGap = "";
        nav.style.gridColumn = "";
        nav.style.gridRow = "";
        nav.style.clear = "";
        navItems.forEach(li => {
            li.style.display = "";
            li.style.margin = "";
        });
        if (navItems[navItems.length - 1].offsetTop > navItems[0].offsetTop) {
            nav.style.clear = "both";
        }
    }
    document.body.style.paddingTop = header.offsetHeight + 32 + "px";
}

checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);

function showMessage() {
    alert("Особистий кабінет та реєстрація будуть доступні найближчим часом");
}

const burgerMenu = document.querySelector(".burger-menu");
const navList = document.querySelector(".navlist");
const burgerMenuStick = document.querySelectorAll(".burger-menu span");


burgerMenu.addEventListener('click', () => {
    navList.classList.toggle("active-navlist");
    if (burgerMenuStick) burgerMenuStick.forEach(item => item.classList.toggle("active-burgerMenu"));
})

const imgContainers = document.querySelectorAll(".img-con");

imgContainers.forEach((container) => {
    const images = container.querySelectorAll("img");
    let count = 0;

    setInterval(() => {
        images[count].classList.remove("active");

        count = (count + 1) % images.length;

        images[count].classList.add("active");
    }, 3000);
});


const cartItem = document.getElementById("shop");
const cartCon = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");

cartItem.addEventListener("click", () => {
    cartCon.classList.add("active");
})

closeCart.addEventListener("click", () => {
    cartCon.classList.remove("active");
})
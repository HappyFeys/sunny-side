const btnHamburger = document.getElementById('hamburger');
const menuDeroulant = document.getElementById('menuDeroulant');
const shapeMenu = document.querySelector(".scrolledMenu");

btnHamburger.addEventListener('click', () => {
    menuDeroulant.classList.toggle('flex');
    shapeMenu.classList.toggle('block');
})


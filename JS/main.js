const burgerMenu = document.querySelector('.menu');
const menuBox = document.querySelector('.menu-box');
const closeMenu = document.querySelector('.close-menu');

burgerMenu.addEventListener('click', toggle => {
    menuBox.classList.add('toggle-menu')
    closeMenu.style.display = 'grid';
    burgerMenu.style.display = 'none';
});

closeMenu.addEventListener('click', toggle => {
    menuBox.classList.remove('toggle-menu')
    closeMenu.style.display = 'none';
    burgerMenu.style.display = 'grid';
})

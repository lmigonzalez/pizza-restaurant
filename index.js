const hamburgerMenu = document.querySelector('.hamburger-menu');

const hamburgerElements = document.querySelector('.hamburger-elements');

const elements = document.querySelector('.hamburger-elements').getElementsByTagName('a');


hamburgerMenu.addEventListener('click', openMenu)

function openMenu(){
    hamburgerElements.classList.toggle('menu-togle')
}

Array.prototype.forEach.call(elements, item => {
    item.addEventListener('click', clouseTap)
})

function clouseTap() {
    hamburgerElements.classList.remove('menu-togle')
}
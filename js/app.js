var iconMenu = document.querySelector('.page-header__toggle');
var menu        = document.querySelector('.page-nav');

iconMenu.addEventListener('click', openMenu);

function openMenu() {
	menu.classList.toggle('page-nav--open');
}
import { navBar } from './nav'
import { home } from './home'
import { menu } from './menu'
import { contact } from './contact'
import { footer } from './footer'

const content = document.getElementById('content');

let heroContainer = document.createElement('div');
heroContainer.classList.add('heroContainer');
content.append(heroContainer);

let fadeToBlack = document.createElement('div');
fadeToBlack.classList.add('fadeToBlack');
heroContainer.append(fadeToBlack);

function renderHome() {
    fadeToBlack.innerHTML = "";
    navBar();
    home();
    footer();
}

function renderMenu() {
    fadeToBlack.innerHTML = "";
    navBar();
    menu();
    footer();
}

function renderContact() {
    fadeToBlack.innerHTML = "";
    navBar();
    contact();
    footer();
}

renderHome();

export { content, heroContainer, fadeToBlack, renderHome, renderMenu, renderContact }
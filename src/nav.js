import { content, fadeToBlack, renderContact, renderHome, renderMenu } from './index.js'

function navBar() {

    let header = document.createElement('header');
    header.classList.add('header');
    fadeToBlack.append(header);
    
    let logoText = document.createElement('h2');
    logoText.classList.add('logoText');
    logoText.textContent = "Vongola Burger";

    let menu = document.createElement('ul')

    let linkHome = document.createElement('li')
    let linkHomeA = document.createElement('a')
    linkHomeA.setAttribute('href', "#home");
    linkHomeA.textContent = "Home"
    linkHome.append(linkHomeA)
    linkHome.addEventListener('click', renderHome)

    let linkMenu = document.createElement('li')
    let linkMenuA = document.createElement('a')
    linkMenuA.setAttribute('href', "#menu");
    linkMenuA.textContent = "Menu"
    linkMenu.append(linkMenuA)
    linkMenu.addEventListener('click', renderMenu)

    let linkContact = document.createElement('li')
    let linkContactA = document.createElement('a')
    linkContactA.setAttribute('href', "#contact");
    linkContactA.textContent = "Contact"
    linkContact.append(linkContactA)
    linkContact.addEventListener('click', renderContact)

    let navBar = document.createElement('nav');
    navBar.classList.add('navBar');
    header.append(logoText, navBar)
    navBar.append(menu)
    menu.append(linkHome, linkMenu, linkContact)
}



export { navBar }
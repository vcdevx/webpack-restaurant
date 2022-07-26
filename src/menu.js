import { fadeToBlack } from './index.js'

function menu() {

    const menuList = [
        {
            name: "Vongola Burger Combo",
            price: "$12.99",
            photo: 'img/vongolaBurger.jpg',
        },
        {
            name: "Vongola Deluxe Burger Combo",
            price: "$15.99",
            photo: 'img/vongolaDeluxeBurger.jpg',
        },
        {
            name: "Vongola Black Burger Combo",
            price: "$13.99",
            photo: 'img/vongolaBlackBurger.jpg',
        },
        {
            name: "Vongola Dizzy Burger Combo",
            price: "$14.99",
            photo: 'img/vongolaDizzyBurger.jpg',
        },
    ]

    let main = document.createElement('main')
    main.classList.add('mainContainerMenu')
    fadeToBlack.append(main)

    let center = document.createElement('div')
    center.classList.add('centerContainerMenu')
    main.append(center)

    let menuTitle = document.createElement('h1')
    menuTitle.classList.add('menuTitle')
    menuTitle.textContent = 'Burgers'
    center.append(menuTitle);

    let menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    center.append(menuContainer)

    function renderMenu (item) {

        let menuCard = document.createElement('div')
        menuCard.classList.add('menuCard')

        let menuPhoto = document.createElement('img')
        menuPhoto.classList.add('menuPhoto')
        menuPhoto.src = `${item.photo}`
        menuPhoto.alt = `${item.name}`

        let menuName = document.createElement('p')
        menuName.classList.add('menuName')
        menuName.classList.add('menuContent')
        menuName.textContent = `${item.name}`

        let menuPrice = document.createElement('p')
        menuPrice.classList.add('menuPrices')
        menuPrice.classList.add('menuContent')
        menuPrice.textContent = `${item.price}`

        menuContainer.append(menuCard)
        menuCard.append(menuPhoto, menuName, menuPrice)
    }

    menuList.forEach(renderMenu);
}

export { menu }
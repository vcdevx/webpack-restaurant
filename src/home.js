import { fadeToBlack } from './index.js'

function home() {

    let main = document.createElement('main')
    main.classList.add('mainContainer')
    fadeToBlack.append(main)

    let center = document.createElement('div')
    center.classList.add('centerContainer')
    main.append(center)

    let introHeader = document.createElement('h1')
    introHeader.classList.add('introHeader')
    introHeader.textContent = "Charbroiled To PERFECTION"

    let introText = document.createElement('p')
    introText.classList.add('introText')
    introText.textContent = 'Treat yourself to a new kind of burger. Every Vongola Burger is hand-crafted to the specifications of the one who will be enjoying it. "We let our burgers do the talking."'
    center.append(introHeader, introText)
}

export { home }
import { fadeToBlack } from './index.js'

function footer() {
    let footer = document.createElement('footer')
    fadeToBlack.append(footer)
    
    let copyrightTag = document.createElement('p')
    copyrightTag.classList.add('copyrightTag')
    copyrightTag.textContent = 'Copyright © 2022'
    footer.append(copyrightTag)
}

export { footer }
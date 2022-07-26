import { fadeToBlack } from './index.js'



function contact() {

    const contactList = [
        {
            name: "Vongola Primo",
            title: "Owner/Operator",
            number: "(404) 402-2392",
            email: "Decimo@Vongola.com",
        },
        {
            name: "Vongola Decimo",
            title: "Co-Owner",
            number: "(404) 648-2112",
            email: "Decimo@Vongola.com",
        },
        {
            name: "Vongola Ottavo",
            title: "Main Chef",
            number: "(404) 201-4400",
            email: "Ottavo@Vongola.com"
        },
]

    let main = document.createElement('main')
    main.classList.add('mainContainer')
    fadeToBlack.append(main)

    let center = document.createElement('div')
    center.classList.add('centerContainerBlack')
    main.append(center)

    function renderContacts(item) {
        let contactCard = document.createElement('div')
        contactCard.classList.add('contactCard')

        let contactName = document.createElement('h2')
        contactName.classList.add('contactName')
        contactName.textContent = `${item.name}`

        let contactTitle = document.createElement('p')
        contactTitle.classList.add('contactContent')
        contactTitle.textContent = `${item.title}`

        let contactNumber = document.createElement('p')
        contactNumber.classList.add('contactContent')
        contactNumber.textContent = `${item.number}`

        let contactEmail = document.createElement('p')
        contactEmail.classList.add('contactContent')
        contactEmail.textContent = `${item.email}`

        center.append(contactCard)
        contactCard.append(contactName, contactTitle, contactNumber, contactEmail)
    }

    contactList.forEach(renderContacts);
}


export { contact }
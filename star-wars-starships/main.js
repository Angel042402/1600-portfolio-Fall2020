import { starships } from '../data/starships.js'

const mainContent = document.querySelector('#main')

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

const starshipButton = document.createElement('button')
starshipButton.textContent = 'Starfighters'
mainHeader.appendChild(starshipButton)

const starshipDButton = document.createElement('button')
starshipDButton.textContent = 'Death Star'
mainHeader.appendChild(starshipDButton)

/*const newDiv = document.createElement('div'); //created a new div, I want to use this div to be a container for the images I want to transition from one to another.
newDiv.className = 'container'
document.body.insertBefore(newDiv, mainContent)

const newImg = document.createElement('img')// experimenting with ways to make one background img morph or fade into another
newImg.className = 'background_img_darth'
document.body.insertBefore(newImg, mainContent)*/

const starshipFighter = starships.filter(starships => starships.starship_class === `Starfighter`)

const starshipDestroyer = starships.filter(starships => starships.starship_class === `Deep Space Mobile Battlestation`)

starshipButton.addEventListener('click', () => populateDOM(starshipFighter))

starshipDButton.addEventListener('click', () => populateDOM(starshipDestroyer))

function populateDOM(starships) {
    removeChildren(mainContent)
    starships.forEach(element => {
        const shipFigure = document.createElement('figure')
        const shipImg = document.createElement('img')
        let shipNum = getLastNumber(element.url)
        shipImg.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
        shipImg.addEventListener('error', () => shipImg.hidden = true)// genius level
        const shipCaption = document.createElement('figcaption')
        shipCaption.textContent = element.name

        shipFigure.appendChild(shipImg)
        shipFigure.appendChild(shipCaption)

        mainContent.appendChild(shipFigure)
    })
}


function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start)=='/'){
        start ++
    }
    return(url.slice(start, end))
}
function removeChildren(container) { 
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
}
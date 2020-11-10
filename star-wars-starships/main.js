import { starships } from '../data/starships.js'
import { removeChildren, getLastNumber} from '../utils/index.js'

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

const starshipMfalconButton = document.createElement('button')
starshipMfalconButton.textContent = 'Millennium Falcon'
mainHeader.appendChild(starshipMfalconButton)

const starshipFighter = starships.filter(starships => starships.starship_class === `Starfighter`)

const starshipDestroyer = starships.filter(starships => starships.starship_class === `Deep Space Mobile Battlestation`)

const starshipMillFalcon = starships.filter(starships => starships.starship_class === `Light freighter`)

starshipButton.addEventListener('click', () => populateDOM(starshipFighter))

starshipDButton.addEventListener('click', () => populateDOM(starshipDestroyer))

starshipMfalconButton.addEventListener('click', () => populateDOM(starshipMillFalcon))

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









import { people } from '../data/people.js'
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

const newDiv = document.createElement('div');
newDiv.className = 'container'
document.body.insertBefore(newDiv, mainContent)




/*const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)

const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
mainHeader.appendChild(otherButton)*/

const starshipFighter = starships.filter(starships => starships.starship_class === `Starfighter`)

const starshipDestroyer = starships.filter(starships => starships.starship_class === `Deep Space Mobile Battlestation`)

//const femaleCharaters = people.filter(person => person.gender === 'female')


starshipButton.addEventListener('click', () => populateDOM(starshipFighter))
starshipDButton.addEventListener('click', () => populateDOM(starshipDestroyer))

/*speciesButton.addEventListener('click', () => populateDOM(speciesClassification))*/

//femaleButton.addEventListener('click', () => populateDOM(femaleCharaters))
    
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
//let theUrl = "https://swapi.co/api/people/2/"
//let theUrl2 = "https://swapi.co/api/people/11/"

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




















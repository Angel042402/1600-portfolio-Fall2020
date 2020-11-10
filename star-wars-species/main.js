import { species } from '../data/species.js'
import { removeChildren, getLastNumber } from '../utils/index.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const speciesView = document.querySelector('.main')

const dialog = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')

closeButton.addEventListener('click', () => {
    dialog.classList.toggle("is-active")
})

modalBackground.addEventListener('click', () =>{
    dialog.classList.toggle("is-active")
})

function populateNav(species) {
    species.forEach(specie => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event => {
            let specieName = event.target.textContent
            const foundSpecies = species.find(specie => specie.name === specieName)
            populateSpeciesView(foundSpecies)
        })
        
        let listItem = document.createElement('li')
        listItem.textContent = specie.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    })

}

function populateSpeciesView(speciesData) {
    removeChildren(speciesView)
    // use createElement to make new img elements*/
    let speciesImg = document.createElement("img")
    let speciesNum = getLastNumber(speciesData.url)
    // set their src to the url below
    speciesImg.src = `https://starwars-visualguide.com/assets/img/species/${speciesNum}.jpg`
    // make speciesNum like charNum from the characters page
    speciesImg.addEventListener('error', () => {
        speciesImg.hidden = true
        dialog.classList.toggle("is-active")// genius level 965!!
    })

    speciesView.appendChild(speciesImg)

    }
    populateNav(species)

    /*const shipFigure = document.createElement('figure')
        const shipImg = document.createElement('img')
        let shipNum = getLastNumber(element.url)
        shipImg.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
        shipImg.addEventListener('error', () => shipImg.hidden = true)// genius level
        const shipCaption = document.createElement('figcaption')
        shipCaption.textContent = element.name

        shipFigure.appendChild(shipImg)
        shipFigure.appendChild(shipCaption)

        mainContent.appendChild(shipFigure)
    })*/
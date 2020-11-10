import { species } from '../data/species.js'
import { removeChildren, getLastNumber } from '../utils/index.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const speciesView = document.querySelector('.main')

const dialog = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')

/*const newDiv = document.createElement('div'); //created a new div, I want to use this div to be a container for the images I want to transition from one to another.
newDiv.className = 'container'
document.body.insertBefore(newDiv, dialog)*/

//const mainImage = document.querySelector('.main')

//const newImg = document.createElement('img')// experimenting with ways to make one background img morph or fade into another
//newImg.className = 'Darth-image'
//document.body.insertBefore(newImg, mainImage)


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

    
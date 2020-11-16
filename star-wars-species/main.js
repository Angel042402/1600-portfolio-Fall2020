import { species } from '../data/species.js'
import { removeChildren, getLastNumber, addStarField } from '../utils/index.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const speciesView = document.querySelector('.main')
//let figCaption = document.createElement('figcaption') trying to figure out how to add a figcaption     

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
        //speciesFigcaption.textContent = specie.name trying to figure out how to add a figcaption
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
    //figcaption.appendChild(speciesFigcaption) trying to figure out how to add a figcaption
}

function populateSpeciesView(speciesData) {
    removeChildren(speciesView)
    // use createElement to make new img elements*/
    let speciesImg = document.createElement("img")
    speciesImg.className = 'speciesImg'//needed to give the image a class to separate it from the starField img so the css wouldn't conflict
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
        
    addStarField(document.querySelector('body'), 1000)
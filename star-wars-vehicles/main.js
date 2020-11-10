import { vehicles } from '../data/vehicles.js'
import { removeChildren, getLastNumber } from '../utils/index.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('main') //vehicleView

function populateNav(vehicles) {
    vehicles.forEach(vehicle => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event => {
            let vehicleName = event.target.textContent
            const foundVehicle = vehicles.find(vehicle => vehicle.name === vehicleName)
            populateVehicleView(foundVehicle)
        })
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
        let listItem = document.createElement('li')
        listItem.textContent = vehicle.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    })

}

function populateVehicleView(vehicleData) {
    removeChildren(vehicleView)
    // use createElement to make new img elements
    let vehicleImg = document.createElement("img")
    let vehicleNum = getLastNumber(vehicleData.url)
    // set their src to the url below
    vehicleImg.src = `https://starwars-visualguide.com/assets/img/vehicles/${vehicleNum}.jpg`
    // make shipNum like charNum from the characters page
    vehicleImg.addEventListener('error', () => vehicleImg.hidden = true)// genius level 965!!
    vehicleView.appendChild(vehicleImg)
}

populateNav(vehicles)
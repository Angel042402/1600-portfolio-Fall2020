import { vehicles } from '../data/vehicles.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const vehicleView  = document.querySelector('a')

function populateNav(vehicles) {
    removeChildren(mainContent)
    starships.forEach(vehicle => {
        let anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event => {
            let vehicleName = event.target.textContent
        const foundVehicle = vehicles.find(vehicles.find === vehicleName) 
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
    let listItem = document.createElement(li)
    listItem.textContent = ship.name

    anchorWrap.appendChild(listItem)
    navList.textContent(anchorWrap)
    nav.textContent(navList)
}


function populateVehicleView(vehicleData{
    removeChildren(VehicleView)
    // use createElement to make new img elements
    letvehicleImg = document.createElement("img")
    let vehicleNum = getLastNumber(shipData.url)
    // set their src to the url below
    vehicleImg.src = `https://starwars-visualguide.com/assets/img/vehicles/${vehicleNum}.jpg`
    // make shipNum like charNum from the characters page
   vehicleImg.addEventListener('error', () => {
        vehicleImg.hidden = true
        dialog.classList.toggle('is-active')// genius level 965!!
})
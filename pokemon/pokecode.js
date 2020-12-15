//import { removeChildren} from '../utils/index.js/'
//Reusable async function to fetch data from the provided url
async function getAPIData(url) {
    try {
        const response = await fetch(url)//gets the contents of the url
        const data = await response.json()//contents of url are stored in 'data'
        return data
    } catch (error) {//can console.error() to see error in console, like console.log()
        console.error(error)
    }
}
// now, use the async getAPIData function
function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then//a call to get data from the api ,chain a then method
        (async (data) => {//await the api call
            for (const pokemon of data.results) {//loops thru the data for results array
                await getAPIData(pokemon.url).then((pokeData) => {//pass an individual pokemon its url property, chain a 'then' because its async., get back pokeData from the url for an individual pokemon
                    console.log(pokeData)
                    populatePokeCard(pokeData)
                })
            }
        })
}
// grid for cards
const pokemonGrid = document.querySelector('.pokemonGrid')
let card = document.querySelector('.card')

//const mainContent = document.querySelector('#poke-main')

//make a div for buttons
const mainPokeDiv = document.querySelector('div')
mainPokeDiv.className = 'poke-container'

//make buttons to load cards
/*const loadButton = document.createElement('button')
loadButton.textContent = 'Load Pokemon'
mainPokeDiv.appendChild(loadButton)*/

//load pokemon cards
/*loadButton.addEventListener('click', () => {
    loadPage()
    loadButton.disabled = true //populates cards once then disables the load button
})*/

//add fire chars
const fireButton = document.createElement('button')
fireButton.textContent = 'Pure Fire-type Pokemon'
mainPokeDiv.appendChild(fireButton)

fireButton.addEventListener('click', () => {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`).then// get pokemon 37 thru 727
        (async (data) => {// I have to make a call to data
            console.log(data.results)
            {
                data.results.forEach(async (pokemon) => {
                    await getAPIData(pokemon.url).then(
                        (pokeData) => {
                            let pokeType = pokeData.types[0].type.name

                            if (pokeType === 'fire') {//get pokemon - 'fire'-
                                populatePokeCard(pokeData)//populate card with pokeData 
                                fireButton.disabled = true 
                            } else {
                                console.log('Not a Fire Pokemon')
                            }

                        }
                    )
                }
                )
            }
        })
})

//add water chars
const waterButton = document.createElement('button')
waterButton.textContent = 'Pure Water-type Pokemon'
mainPokeDiv.appendChild(waterButton)

waterButton.addEventListener('click', () => {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`).then// get pokemon 37 thru 727
        (async (data) => {// I have to make a call to data
            console.log(data.results)
            {
                data.results.forEach(async (pokemon) => {
                    await getAPIData(pokemon.url).then(
                        (pokeData) => {
                            let pokeType = pokeData.types[0].type.name

                            if (pokeType === 'water') {//get pokemon - 'fire'-
                                populatePokeCard(pokeData)//populate card with pokeData 
                                waterButton.disabled = true  
                            } else {
                                console.log('Not a Water Pokemon')
                            }

                        }
                    )
                }
                )
            }
        })
})

//add electric chars
const electricButton = document.createElement('button')
electricButton.textContent = 'Pure Electric-type Pokemon'
mainPokeDiv.appendChild(electricButton)

electricButton.addEventListener('click', () => {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`).then// get pokemon 37 thru 727
        (async (data) => {// I have to make a call to data
            console.log(data.results)
            {
                data.results.forEach(async (pokemon) => {
                    await getAPIData(pokemon.url).then(
                        (pokeData) => {
                            let pokeType = pokeData.types[0].type.name

                            if (pokeType === 'electric') {//get pokemon - 'electric'-
                                populatePokeCard(pokeData)//populate card with pokeData 
                                electricButton.disabled = true 
                            } else {
                                console.log('Not a Electric Pokemon')
                            }

                        }
                    )
                }
                )
            }
        })
})

//add normal chars
const poisonButton = document.createElement('button')
poisonButton.textContent = 'Pure Poison-type Pokemon'
mainPokeDiv.appendChild(poisonButton)

poisonButton.addEventListener('click', () => {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`).then// get pokemon 37 thru 727
        (async (data) => {// I have to make a call to data
            console.log(data.results)
            {
                data.results.forEach(async (pokemon) => {
                    await getAPIData(pokemon.url).then(
                        (pokeData) => {
                            let pokeType = pokeData.types[0].type.name

                            if (pokeType === 'poison') {//get pokemon - 'fire'-
                                populatePokeCard(pokeData)//populate card with pokeData
                                poisonButton.disabled = true   
                            } else {
                                console.log('Not a Poison Pokemon')
                            }

                        }
                    )
                }
                )
            }
        })
})
//const fireArray = [37, 38, 58, 59, 77]

//an individual pokemon is passed to the function, populate cards and toggle flip the card
function populatePokeCard(pokemon) {
    //removeChildren(mainPokeDiv)
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })
    let frontLabel = document.createElement('p')
    frontLabel.textContent = pokemon.name
    pokeCard.appendChild(populateCardFront(pokemon))
    pokeCard.appendChild(populateCardBack(pokemon))
    pokeScene.appendChild(pokeCard)
    pokemonGrid.appendChild(pokeScene)
}

//make card front with images and names
function populateCardFront(pokemon) {
    let cardFront = document.createElement('div')
    cardFront.className = 'card__face card__face--front'
    let frontLabel = document.createElement('p')
    let frontImage = document.createElement('img')
    frontImage.className = 'poke_image'
    frontLabel.textContent = pokemon.name
    frontImage.src = `../personal-portfolio/images/pokemon/${getImageFileName(pokemon)}.png`
    cardFront.appendChild(frontImage)
    cardFront.appendChild(frontLabel)
    frontLabel.textContent = `${pokemon.name}`
    return cardFront
}

//make card back with abilities and stats
function populateCardBack(pokemon) {
    let cardBack = document.createElement('div')
    cardBack.className = 'card__face card__face--back'//you can set more than one class by separating with a space
    let backLabel = document.createElement('p')
    backLabel.textContent = `Abilities:`
    let abilityList = document.createElement('ul')
    pokemon.abilities.forEach(ability => {
        let abilityName = document.createElement('li')
        abilityName.textContent = ability.ability.name
        abilityList.appendChild(abilityName)
    })
    let movesLabel = document.createElement('h3')
    movesLabel.textContent = 'Stats:'
    let moveAccuracy = document.createElement('h4')
    let pokeWeight = document.createElement('h5')
    pokeWeight.textContent = `Weight: ${pokemon.weight} lbs.`
    /*let backImage = document.createElement('img')
    backImage.className = 'card_back_image'
    backImage.src = '../personal-portfolio/images/pokemon/test_img.png'*/
    cardBack.appendChild(backLabel)
    cardBack.appendChild(abilityList)
    cardBack.appendChild(movesLabel)
    cardBack.appendChild(moveAccuracy)
    cardBack.appendChild(pokeWeight)
    return cardBack
}

//get character moves and power
function getBestAccuracyAndPower(pokemoves) {
    return pokemoves.reduce((mostAccurate, move) => {
        getAPIData(move.move.url).then
            (async (data) => {
                console.log(data.accuracy, data.power)
            })

    }, {});
}

//get images by their id number
function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 99) {
        return `0${pokemon.id}`
    }
}

// get pokemon stats
function Pokemon(name, height, weight, abilities, moves) {
    this.name = name
    this.height = height
    this.weight = weight
    this.abilities = abilities
    this.id = 900
    this.moves = moves
}
//make personal pokemon array
/*let angelmon = new Pokemon('Angelmon', 620, 400, ['junkfood-consumption', 'cat-whisperer', 'most-excellent-grandma'])
console.log(angelmon)*/

//make a new pokemon
function createNewPokemon(name) {
    return new Pokemon(name, 620, '400', ['junkfood-consumption', 'cat-whisperer', 'most-excellent-grandma'])
}



/*fireButton.addEventListener('click', () => {
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then
    (async (data) => {
        for (const pokemon of data.results) {
            await getAPIData('https://pokeapi.co/api/v2/type/10').then((pokeData) => {
                console.log(pokeData)
                populatePokeCard(pokeData)
            })
        }
    }
) */


/*function findType(pokemon) {
    for (i = 0; i > pokemon.length - 1; i++) {
        if (pokemon.move.move.name === 'fire') {

            console.log(pokemon)
        }
    }
}*/

/*const morePokeButton = document.createElement('button')
morePokeButton.className = 'more-pokemon'
morePokeButton.textContent = 'load more Pokemon!'
pokeHeader.appendChild(morePokeButton)*/

/*morePokeButton.addEventListener('click', () => {
    let pokeName = prompt("What's your new Pokemon's name?");
    populatePokeCard(createNewPokemon(pokeName))
})*/

/*const newButton = document.querySelector('#newPokemon')

newButton.addEventListener('click', () => {
    let pokeName = prompt("What's your new Pokemon's name?");
    populatePokeCard(createNewPokemon(pokeName))
  })*/
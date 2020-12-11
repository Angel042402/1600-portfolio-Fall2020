//Reusable async function to fetch data from the provided url
async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
// now, use the async getAPIData function
function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then
        (async (data) => {
            for (const pokemon of data.results) {
                await getAPIData(pokemon.url).then((pokeData) => {
                    console.log(pokeData)
                    populatePokeCard(pokeData)
                })
            }
        })
}
//make grid for cards
const pokemonGrid = document.querySelector('.pokemonGrid')
let card = document.querySelector('.card')


//make a div for buttons
const mainPokeDiv = document.querySelector('div')
mainPokeDiv.className = 'poke-container'


//make buttons to load cards
const loadButton = document.createElement('button')
loadButton.textContent = 'Load Pokemon'
mainPokeDiv.appendChild(loadButton)

//load pokemon cards
loadButton.addEventListener('click', () => {
    loadPage()
    loadButton.disabled = true //populates cards once then disables the load button
})

const fireButton = document.createElement('button')
fireButton.textContent = 'Fire Pokemon'
mainPokeDiv.appendChild(fireButton)

/*fireButton.addEventListener('click', () => {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then
        (async (data) => {
            for (const pokemon of data.results) {
                await getAPIData('https://pokeapi.co/api/v2/type/10').then((pokeData) => {
                    console.log(pokeData)
                    populatePokeCard(pokeData)
                })
            }
        })
    })*/


//populate cards and toggle flip
function populatePokeCard(pokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })
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
    let backImage = document.createElement('img')
    backImage.className = 'card_back_image'
    backImage.src = '../personal-portfolio/images/pokemon/test_img.png'
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

/*function getPokeType(pokemon) {
    if (pokemon.moves.move.name === 'fire') {
        return `${pokemon.moves.move.name}`
        console.log(pokemon.moves.move.name)
    
    }
}*/

// get pokemon stats
/*function Pokemon(name, height, weight, abilities, moves) {
    this.name = name
    this.height = height
    this.weight = weight
    this.abilities = abilities
    this.id = 900
    this.moves = moves
}
//make personal pokemon array
let angelmon = new Pokemon('Angelmon', 62, 'Uh, no. Just no', ['junkfood-consumption', 'cat-whisperer', 'most-excellent-grandma'])
console.log(angelmon)
//make a new pokemon
function createNewPokemon(name) {
    return new Pokemon(name, 62, 'Uh, no. Just no', ['junkfood-consumption', 'cat-whisperer', 'most-excellent-grandma'])
}*/



/*fireButton.addEventListener('click', () => {
    getAPIData(`https://pokeapi.co/api/v2/type/10`).then
        (async (data) => {
            let fireMoves = document.createElement('ul')
            data.moves.forEach(move => {
                console.log(move.moves)
                let fireItem = document.createElement('li')
                moveItem.textContent = move.moves
                mudMoves.appendChild(fireItem)
            })
            if (fireMoves === 'fire') {
                let fireImage = document.createElement('img')
                fireImage.src = `../personal-portfolio/images/pokemon/001.png`
                pokemonGrid.appendChild(fireMoves)
                pokemonGrid.appendChild(fireImage)
            }
        })
})*/


function findType(pokemon) {
    for (i = 0; i > pokemon.length - 1; i++) {
        if (pokemon.move.move.name === 'fire') {

            console.log(pokemon)
        }
    }
}

/*const morePokeButton = document.createElement('button')
morePokeButton.className = 'more-pokemon'
morePokeButton.textContent = 'load more Pokemon!'
pokeHeader.appendChild(morePokeButton)*/

/*morePokeButton.addEventListener('click', () => {
    let pokeName = prompt("What's your new Pokemon's name?");
    populatePokeCard(createNewPokemon(pokeName))
})*/

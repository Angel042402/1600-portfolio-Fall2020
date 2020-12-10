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

const pokeHeader = document.querySelector('header')
pokeHeader.className = 'poke-header'

const loadButton = document.createElement('button')
loadButton.textContent = 'Load Pokemon'
pokeHeader.appendChild(loadButton)

const morePokeButton = document.createElement('button')
morePokeButton.className = 'more-pokemon'
morePokeButton.textContent = 'load more Pokemon!'
pokeHeader.appendChild(morePokeButton)

loadButton.addEventListener('click', () => {
    loadPage()
    loadButton.disabled = true //populates cards once then disables the load button
})

morePokeButton.addEventListener('click', () => {
    let pokeName = prompt("What's your new Pokemon's name?");
    populatePokeCard(createNewPokemon(pokeName))
})

const pokemonGrid = document.querySelector('.pokemonGrid')
let card = document.querySelector('.card')

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
    //const mostAccurateMove = getBestAccuracyAndPower(pokemon.moves)
    //moveAccuracy.textContent = `${mostAccurateMove.move.name}`
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

function getBestAccuracyAndPower(pokemoves) {
    return pokemoves.reduce((mostAccurate, move) => {
        //console.log(move.move.url)
        getAPIData(move.move.url).then
            (async (data) => {
                /*let mudMoves = document.createElement('ul')
                data.moves.forEach(move =>{*/
                console.log(data.accuracy, data.power)
                /*let moveItem = document.createElement('li')
                moveItem.textContent = move.move.name
                mudMoves.appendChild(moveItem)*/
            })
        //return mostAccurate.accuracy > move.accuracy ? mostAccurate : move;
    }, {});
}

function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 99) {
        return `0${pokemon.id}`
    }
}
function Pokemon(name, height, weight, abilities, moves) {
    this.name = name
    this.height = height
    this.weight = weight
    this.abilities = abilities
    this.id = 900
    this.moves = moves
}

let angelmon = new Pokemon('Angelmon', 62, 'Uh, no. Just no', ['junkfood-consumption', 'cat-whisperer', 'most-excellent-grandma'])
console.log(angelmon)

function createNewPokemon(name) {
    return new Pokemon(name, 62, 'Uh, no. Just no', ['junkfood-consumption', 'cat-whisperer', 'most-excellent-grandma'])
}
/*mudsDaleButton.addEventListener('click', () => {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/750`).then
    (async (data) => {
        let mudMoves = document.createElement('ul')
        data.moves.forEach(move =>{
            console.log(move.move.name)
            let moveItem = document.createElement('li')
            moveItem.textContent = move.move.name
            mudMoves.appendChild(moveItem)
        })
        let mudImage = document.createElement('img')
        mudImage.src = `../personal-portfolio/images/pokemon/750.png`
        pokemonGrid.appendChild(mudMoves)
        pokemonGrid.appendChild(mudImage)
    })
})*/
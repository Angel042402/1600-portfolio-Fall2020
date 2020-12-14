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

//add fire chars
const fireButton = document.createElement('button')
fireButton.textContent = 'Fire Pokemon'
mainPokeDiv.appendChild(fireButton)

fireButton.addEventListener('click', () => {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=692&offset=36`).then// get pokemon 37 thru 727
        (async (data) => {// I have to make a call for each individual pokemon's url, this is for charmander's 1 :move: {name: "fire-punch", url: "https://pokeapi.co/api/v2/pokemon/37"
            {
                await getAPIData('https://pokeapi.co/api/v2/pokemon/37').then((pokeData) => {//get pokemon - 'fire'-
                    let firePoke = pokemon[i]
                    for (i = 0; i > pokeArray.length - 1; i++) {
                       ( pokeArray.type.type.name === 'fire')
                        firePoke + 1
                        //console.log(pokeData)
                        populatePokeCard(pokeData)//populate card with pokeData
                    }
                })
            }
        }
    )
})
       

/*for (let i = 0; i < 9; i++) {
    str = str + i;
  }*/
const fireArray = [37, 38, 58, 59, 77]

                //an individual pokemon is passed to the function, populate cards and toggle flip the card
                function populatePokeCard(pokemon) {
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
    getAPIData(`https://pokeapi.co/api/v2/type/10`).then
        (async (data) => {
            let fireMoves = document.createElement('ul')
            data.moves.forEach(move => {
                console.log(move.moves)
                let fireItem = document.createElement('li')
                moveItem.textContent = move.moves
                mudMoves.appendChild(fireItem)
            })
                let fireImage = document.createElement('img')
                fireImage.src = `../personal-portfolio/images/pokemon/001.png`
                pokemonGrid.appendChild(fireMoves)
                pokemonGrid.appendChild(fireImage)
            }
        })
})*/

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
    /*const mudButton = document.createElement('button')
fireButton.textContent = 'Mud Pokemon'
mainPokeDiv.appendChild(mudButton)

mudButton.addEventListener('click', () => {
   getAPIData(`https://pokeapi.co/api/v2/pokemon/750`).then
       (async (data) => {
           let mudMoves = document.createElement('ul')
           data.moves.forEach(move => {
               console.log(move.move.name)
               let moveItem = document.createElement('li')
               moveItem.textContent = move.move.name
               mudMoves.appendChild(moveItem)
           })
           let mudImage = document.createElement('img')
           mudImage.src = `../images/pokemon/750.png`
           pokemonGrid.appendChild(mudMoves)
           pokemonGrid.appendChild(mudImage)
   })
}) 
*/
//let mudMoves = document.createElement('ul')
//data.moves.forEach(move => {
 /*   console.log(move.move.name)
    let moveItem = document.createElement('li')
    moveItem.textContent = move.move.name
    mudMoves.appendChild(moveItem)
})
let mudImage = document.createElement('img')
mudImage.src = `../images/pokemon/750.png`
pokemonGrid.appendChild(mudMoves)
pokemonGrid.appendChild(mudImage)   */ 
/*const mudButton = document.createElement('button')
fireButton.textContent = 'Mud Pokemon'
mainPokeDiv.appendChild(mudButton)

mudButton.addEventListener('click', () => {
   getAPIData(`https://pokeapi.co/api/v2/pokemon/750`).then
       (async (data) => {
           let mudMoves = document.createElement('ul')
           data.moves.forEach(move => {
               console.log(move.move.name)
               let moveItem = document.createElement('li')
               moveItem.textContent = move.move.name
               mudMoves.appendChild(moveItem)
           })
           let mudImage = document.createElement('img')
           mudImage.src = `../images/pokemon/750.png`
           pokemonGrid.appendChild(mudMoves)
           pokemonGrid.appendChild(mudImage)
   })
}) 
*/
/*const newButton = document.querySelector('#newPokemon')

newButton.addEventListener('click', () => {
    let pokeName = prompt("What's your new Pokemon's name?");
    populatePokeCard(createNewPokemon(pokeName))
  })*/
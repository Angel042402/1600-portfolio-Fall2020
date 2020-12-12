import { senators } from '../data/senators.js'
//import { representatives } from '../data/representatives.js'
import { removeChildren } from '../utils/index.js'

const senatorGrid = document.querySelector('.senatorGrid')

const seniorityButton = document.querySelector('#seniorityButton')
const birthdayButton = document.querySelector('#birthdayButton')
const representButton = document.querySelector('#representButton')

const loadButton = document.createElement('button')
loadButton.textContent = 'Load Senators'

loadButton.addEventListener('click', () => {
  loadPage()
  loadButton.disabled = true //populates cards once then disables the load button
})

seniorityButton.addEventListener('click', () => {
    senioritySort()
})

birthdayButton.addEventListener('click', () => {
  birthdaySort()
})

//fill page with senators
function populateSenatorDiv(simpleSenators) {
    removeChildren(senatorGrid)
    simpleSenators.forEach(senator => {
        let senDiv = document.createElement('div')
        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')
        let partyIcon = document.createElement('i')
        if (senator.party === 'R') partyIcon.className = 'fas fa-republican'
        if (senator.party === 'D') partyIcon.className = 'fas fa-democrat'
        if (senator.party === 'ID') partyIcon.className = 'fas fa-star'
        figImg.src = senator.imgURL
        figCaption.textContent = senator.name
  
        figCaption.appendChild(partyIcon)
        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senDiv.appendChild(senFigure)
        //senDiv.appendChild(progressBars(senator))
        senatorGrid.appendChild(senDiv)
    })
  }

  function getSimplifiedSenators(senatorArray) {
    return senatorArray.map(senator => {
        let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: parseInt(senator.seniority, 10),
            missedVotesPct: senator.missed_votes_pct,
            party: senator.party,
            loyaltyPct: senator.votes_with_party_pct,
            date_of_birth: senator.date_of_birth
        }
    })
  }
 const mostSeniority = getSimplifiedSenators(senators).reduce((acc, senator) => acc.seniority > senator.seniority ? acc : senator)

  const missedVotes = getSimplifiedSenators(senators).reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)

  const filterSenators = (prop, value) => {
    return senators.filter(senator => {
        return senator[prop] === value
    })
  }
  
  const republicans = filterSenators('party', 'R')
  const democrats = filterSenators('party', 'D')
  
  let loyalArray = []

const mostLoyal = getSimplifiedSenators(senators).reduce((acc, senator) => {
    if (senator.loyaltyPct === 100) {
        loyalArray.push(senator)
    }
    return acc.loyaltyPct > senator.loyaltyPct ? acc : senator
})

// sort by value
function senioritySort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return parseInt(a.seniority) - parseInt(b.seniority)
    })
    )
  }

  function birthdaySort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return parseInt(a.date_of_birth) - parseInt(b.date_of_birth)
    })
    )
  }

  //by default on page load, shows all senators unsorted
  populateSenatorDiv(getSimplifiedSenators(senators))

  /*function houseSort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return parseInt(a.seniority) - parseInt(b.seniority)
    })
    )
  }*/

  //populateRepresentativeDiv(getSimplifiedRepresentative(representatives))
  //const houseOfCongress = document.querySelector('houseButton')

/*houseButton.addEventListener('click', () => {
  houseSort()
})*/
// trying to assign a font color based on party
  /*function branchSort() {
    const congressBranch = senator.title
    if (congressBranch == 'Senator'){
      senatorColor.style.color = 'red'
    }
    if (senator.party === 'D') {
      senatorColor.style.fontcolor('blue')
    }
    if (senator.party === 'ID') {
      senatorColor.style.fontcolor('white')
    }
  }*/
  // sort by legislative branch
  /*function titleSort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort(title => {
        return senators.title
    })
    )
  }*/
   /*function getSimplifiedRepresentative(representativeArray) {
    return representativeArray.map(representative => {
        let middleName = representative.middle_name ? ` ${representative.middle_name} ` : ` `
        return {
            id: representative.id,
            name: `${representative.first_name}${middleName}${representative.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${representative.govtrack_id}-200px.jpeg`,
            seniority: parseInt(representative.seniority, 10),
            missedVotesPct: representative.missed_votes_pct,
            party: representative.party,
            loyaltyPct: representative.votes_with_party_pct,
            date_of_birth: representative.date_of_birth
        }
    })
  }*/

  /*function populateDOM(representatives) {
    removeChildren(mainContent)
    representatives.forEach(element => {
        let error = false
        const repFigure = document.createElement('figure')
        const repImg = document.createElement('img')
        let repNum = getLastNumber(element.url)
        repImg.src = `https://www.govtrack.us/static/legislator-photos/${representative.govtrack_id}-200px.jpeg`
        const repCaption = document.createElement('figcaption')
        repCaption.textContent = element.name
        shipImg.addEventListener('error', () => {
            repImg.hidden = true
            repCaption.hidden = true // genius level 
        })*/

  /*function getSimplifiedCongress(senatorArray represenativeArray) {
    return senatorArray.map(senator => {
        let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: parseInt(senator.seniority, 10),
            missedVotesPct: senator.missed_votes_pct,
            party: senator.party,
            loyaltyPct: senator.votes_with_party_pct,
            date_of_birth: senator.date_of_birth
            
        }
    })
  }*/
  /*representButton.addEventListener('click', () => {
  populateRepresentativeDiv(simpleRepresentatives)
})*/
//populate cards and toggle flip
/*function populateSenatorCard(senators) {
  let senatorScene = document.createElement('div')
  senatorScene.className = 'scene'
  let senatorCard = document.createElement('div')
  senatorCard.className = 'card'
  senatorCard.addEventListener('click', () => {
  senatorCard.classList.toggle('is-flipped')
  })
  senatorCard.appendChild(populateCardFront(senators))
  senatorCard.appendChild(populateCardBack(senators))
  senatorScene.appendChild(senatorCard)
  senatorGrid.appendChild(senatorScene)
}
//make card front with images and names
function populateCardFront(senator) {
  let cardFront = document.createElement('div')
  cardFront.className = 'card__face card__face--front'
  let frontLabel = document.createElement('p')
  let frontImage = document.createElement('img')
  frontImage.className = 'senator_image'
  frontLabel.textContent = senator.name
  frontImage.src = `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`
  cardFront.appendChild(frontImage)
  cardFront.appendChild(frontLabel)
  frontLabel.textContent = `${senator.name}`
  return cardFront
}
//make card back with abilities and stats
function populateCardBack(senators) {
  let cardBack = document.createElement('div')
  cardBack.className = 'card__face card__face--back'//you can set more than one class by separating with a space
  let backLabel = document.createElement('p')
  backLabel.textContent = `stats:`
  /*let abilityList = document.createElement('ul')
  pokemon.abilities.forEach(ability => {
      let abilityName = document.createElement('li')
      abilityName.textContent = ability.ability.name
      abilityList.appendChild(abilityName)*/
  
  //let movesLabel = document.createElement('h3')
  //movesLabel.textContent = 'Stats:'
 //let moveAccuracy = document.createElement('h4')

  /*let senatorRank = document.createElement('h5')
  pokeWeight.textContent = `rank: ${state_rank}.`
  let backImage = document.createElement('img')
  backImage.className = 'card_back_image'
  backImage.src = '../personal-portfolio/images/congress/american-4402598_1920.jpg'
  cardBack.appendChild(backLabel)
  //cardBack.appendChild(abilityList)
  cardBack.appendChild(movesLabel)
  //cardBack.appendChild(moveAccuracy)
  cardBack.appendChild(state_rank)
  return cardBack
}*/
/*function Senator(name, senate_class, state_rank, state) {
  this.name = name
  this.senate_class = senate_class
  this.state_rank = state_rank
  this.state = state
  //this.moves = moves
}*/
  
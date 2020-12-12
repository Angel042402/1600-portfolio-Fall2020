import { representatives } from '../data/representatives.js'
import { removeChildren } from '../utils/index.js'

const representativeGrid = document.querySelector('.representativeGrid')

const seniorityButton = document.querySelector('#seniorityButton')
const birthdayButton = document.querySelector('#birthdayButton')
//const representButton = document.querySelector('#representButton')

/*const loadButton = document.createElement('button')
loadButton.textContent = 'Load Senators'

loadButton.addEventListener('click', () => {
  loadPage()
  loadButton.disabled = true //populates cards once then disables the load button
})*/

seniorityButton.addEventListener('click', () => {
    senioritySort()
})

birthdayButton.addEventListener('click', () => {
  birthdaySort()
})

function populateRepresentativeDiv(simpleRepresentatives) {
    removeChildren(representativeGrid)
    simpleRepresentatives.forEach(representative => {
        let repDiv = document.createElement('div')
        let repFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')
        let partyIcon = document.createElement('i')
        if (representative.party === 'R') partyIcon.className = 'fas fa-republican'
        if (representative.party === 'D') partyIcon.className = 'fas fa-democrat'
        if (representative.party === 'ID') partyIcon.className = 'fas fa-star'
        figImg.src = representative.imgURL
        figCaption.textContent = representative.name
  
        figCaption.appendChild(partyIcon)
        repFigure.appendChild(figImg)
        repFigure.appendChild(figCaption)
        repDiv.appendChild(repFigure)
        //senDiv.appendChild(progressBars(senator))
        representativeGrid.appendChild(repDiv)
    })
  }

  function getSimplifiedRepresentatives(representativeArray) {
    return representativeArray.map(representative => {
        let middleName = representative.middle_name ? ` ${representative.middle_name} ` : ` `
        return {
            id: representative.id,
            name: `${representative.first_name}${middleName}${representative.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${representative.govtrack_id}-200px.jpeg`,
            seniority: parseInt(representative.seniority, 10),
            missedVotesPct: representative.missed_votes_pct,
            party: representative.party,
            loyaltyPct:representative.votes_with_party_pct,
            date_of_birth: representative.date_of_birth
        }
    })
  }
  //const mostSeniority = getSimplifiedSenators(senators).reduce((acc, senator) => acc.seniority > senator.seniority ? acc : senator)
 const mostSeniority = getSimplifiedRepresentatives(representatives).reduce((acc, representative) => acc.seniority > representative.seniority ? acc : representative)
 //const missedVotes = getSimplifiedSenators(senators).reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)
  const missedVotes = getSimplifiedRepresentatives(representatives).reduce((acc, representative) => acc.missedVotesPct > representative.missedVotesPct ? acc : representative)

  const filterRepresentatives = (prop, value) => {
    return representatives.filter(representative => {
        return representative[prop] === value
    })
  }
  
  const republicans = filterRepresentatives('party', 'R')
  const democrats = filterRepresentatives('party', 'D')
  
  let loyalArray = []

const mostLoyal = getSimplifiedRepresentatives(representatives).reduce((acc, representative) => {
    if (representative.loyaltyPct === 100) {
        loyalArray.push(representative)
    }
    return acc.loyaltyPct > representative.loyaltyPct ? acc : representative
})

// sort by value
function senioritySort() {
    populateRepresentativeDiv(getSimplifiedRepresentatives(representatives).sort((a, b) => {
        return parseInt(a.seniority) - parseInt(b.seniority)
    })
    )
  }

  function birthdaySort() {
    populateRepresentativeDiv(getSimplifiedRepresentatives(representatives).sort((a, b) => {
        return parseInt(a.date_of_birth) - parseInt(b.date_of_birth)
    })
    )
  }

  //by default on page load, we show all senators unsorted
  populateRepresentativeDiv(getSimplifiedRepresentatives(representatives))
  /*function populateRepresentativeDiv(simpleRepresentatives) {
    removeChildren(representativeGrid)
    simpleRepresentatives.forEach(representative => {
        let repDiv = document.createElement('div')
        let repFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')
        let partyIcon = document.createElement('i')
        if (representative.party === 'R') partyIcon.className = 'fas fa-republican'
        if (representative.party === 'D') partyIcon.className = 'fas fa-democrat'
        if (representative.party === 'ID') partyIcon.className = 'fas fa-star'
        figImg.src = representative.imgURL
        figCaption.textContent =representative.name
  
        figCaption.appendChild(partyIcon)
        repFigure.appendChild(figImg)
        repFigure.appendChild(figCaption)
        repDiv.appendChild(repFigure)
        //senDiv.appendChild(progressBars(senator))
        representativeGrid.appendChild(repDiv)
    })
  }*/
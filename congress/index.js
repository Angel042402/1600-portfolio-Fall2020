import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'
import { removeChildren } from '../utils/index.js'

const senatorGrid = document.querySelector('.senatorGrid')
const representativeGrid = document.querySelector('.representativeGrid')
//const seniorityButton = document.querySelector('#seniorityButton')
//const birthdayButton = document.querySelector('#birthdayButton')
//const houseOfCongress = document.querySelector('houseButton')

houseButton.addEventListener('click', () => {
  houseSort()
})

seniorityButton.addEventListener('click', () => {
    senioritySort()
})

birthdayButton.addEventListener('click', () => {
  birthdaySort()
})

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
        figCaption.textContent =representative.name
  
        figCaption.appendChild(partyIcon)
        repFigure.appendChild(figImg)
        repFigure.appendChild(figCaption)
        repDiv.appendChild(repFigure)
        //senDiv.appendChild(progressBars(senator))
        representativeGrid.appendChild(repDiv)
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

  function getSimplifiedRepresentative(representativeArray) {
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

  // sort by legislative branch
  /*function titleSort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort(title => {
        return senators.title
    })
    )
  }*/

  function houseSort() {
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

  //by default on page load, we show all senators unsorted
  populateSenatorDiv(getSimplifiedSenators(senators))
  populateRepresentativeDiv(getSimplifiedRepresentative(representatives))
  
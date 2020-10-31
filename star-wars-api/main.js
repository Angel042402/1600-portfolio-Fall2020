import { films } from '/data/films.js'
/*import { people } from './data/people.js'*/


//console.log(people.length)

//console.log(films[0]) 

/*films.forEach(film => {
    let newParagraph = document.body.appendChild(document.createElement("p"))
    newParagraph.textContent = film.title
    
})
people.forEach(person => {
    let newParagraph = document.body.appendChild(document.createElement("p"))
    newParagraph.textContent = person.name
    
})*/

const main = document.querySelector('main')



for (let step = 0; step < 7; step++) {
    // Runs 7 times, with values of step 0 through 6.
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    let figCaption = document.createElement('figcaption')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg` //set the source of it or nothing will show
    //now append the image to the DOM somehow
    figCaption.textContent = films[step].title

    figure.appendChild(figImg)
    figure.appendChild(figCaption)


    main.appendChild(figure)
    
  }
/*for (const film of films) {
    let newImg = document.createElement('img')
    newImg.src = 'https://starwars-visualguide.com/assets/img/characters/2.jpg' //set the source of it or nothing will show
    //now append the image to the DOM somehow
    main.appendChild(newImg)
    console.log(film.title);
}*/
/*https://starwars-visualguide.com/assets/img/characters/2.jpg*/
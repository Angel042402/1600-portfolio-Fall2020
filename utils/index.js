export function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

export function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

/*function addStarField(element, numStars) {
    for (let i = 0; i< numStars; i++){
  star.style.setProperty('background-color', 'black')
  star.style.setProperty('width', '2px')
  star.style.setProperty('height', '2px')
  star.style.setProperty('background-color', 'white')
  let xy =getRandomPosition()
  star.style.left = `${xy[0]}px`
  star.style.top = `${xy[0]}px`
  .appendChild(star)
}
}
 function getRandomPosition(){
let y =document.body.scrollHeight
let x = document.body.scrollWidth
let randomY = math.floor(math.random() * y)
let randomX = math.floor(math.random() * x)
return [randomY, randomX]


 }
 addStarField(document.querySelector('body'), 1000)*/
const board = document.querySelector('#board')
const colors = ['red', 'Lime', 'DeepPink', 'DeepPink', 'gray', 'yellow', 'Blue', 'Magenta', 'Silver', 'Beige', 'LightPink', 'Salmon']
const SQUARES_NUBMER = 2000

for (let i = 0; i < SQUARES_NUBMER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColor(square))
    
    square.addEventListener('mouseleave',() => 
        removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = gerRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function gerRandomColor () {
const index = Math.floor(Math.random() * colors.length) //округляем рандомное чилсо
return colors[index]
}
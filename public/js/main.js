const socket = io()

const username = 'mohameddiop'
const room = 141

let highlighted = false

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        if(highlighted) {
            card.classList.add('outline')
            card.style.zIndex = 100
        } else {
            card.classList.remove('outline')
            card.style.zIndex = 0
        }
        
        highlighted = !highlighted
    })
})

socket.emit('join', { username, room }, () => {
    console.log('from client')
})
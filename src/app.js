const socketio = require('socket.io')
const server = require('./server')
const io = socketio(server)

io.on('connection', (socket) => {
    console.log('Websocket listening...')

    socket.on('join', ({room, username}, callback) => {
        console.log(room, username)
        callback()
    })
})

server.listen(3000, () => {
    console.log('Server listening on port 3000...')
})
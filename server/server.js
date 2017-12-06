const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
var app = express()
var server = http.createServer(app)
var io = socketIO(server)

app.use(express.static(publicPath))

server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

//Socket methods
io.on('connection', (socket)=> {

    console.log('New user connected')

    //Listeners
    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })

    socket.on('createMessage', (message) => {
        console.log('createMessage', message)
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })
    })
})


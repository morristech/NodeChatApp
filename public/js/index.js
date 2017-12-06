var socket = io();

//Listeners
socket.on('connect', function() {
    console.log('Connected to server.');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server.');
});

//Send data
socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});
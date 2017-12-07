var socket = io();

//Listeners
socket.on('connect', function() {
    console.log('Connected to server.');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

//Jquery send comment button
jQuery('#message-form').on('submit', function(e){
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function(){
        jQuery('#message-form').val('')
    })
});

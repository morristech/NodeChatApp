var expect = require('expect')

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        var from = 'Yigit'
        var text = 'Test Message'
        var message = generateMessage(from,text)
        expect(message).toBeTruthy();
        expect(typeof message.createdAt).toBe('number');
    })
})
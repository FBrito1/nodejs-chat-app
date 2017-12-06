var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var res = generateMessage('Fabio', 'Salve');

        expect(res.from).toBe('Fabio');
        expect(res.text).toBe('Salve');
        expect(res.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location obj', () => {
        var from = 'Admin';
        var latitude = 1;
        var longitute = 1;
        var res = generateLocationMessage(from, latitude, longitute);

        expect(res.from).toBe('Admin');
        expect(res.url).toBe(`https://google.com/maps?q=1,1`);
        expect(res.createdAt).toBeA('number');
    });
});
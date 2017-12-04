var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var res = generateMessage('Fabio', 'Salve');

        expect(res.from).toBe('Fabio');
        expect(res.text).toBe('Salve');
        expect(res.createdAt).toBeA('number');
    });
});
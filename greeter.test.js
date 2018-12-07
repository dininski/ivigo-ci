const greeter = require('./greeter');

describe('greeter', function() {
    it('when we pass awesome it is correct', function() {
        const result = greeter('awesome');
        expect(result).toBe('iVigo is awesome')
    })

    it('when we pass new it is correct', function() {
        const result = greeter('new');
        expect(result).toBe('iVigo is new')
    })
})
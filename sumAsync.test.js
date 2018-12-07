const sumAsync = require('./sumAsync');

describe('symAsync', function() {
    const doneMock = jest.fn();

    it('sums correctly', function() {
        sumAsync(4, 4, doneMock);

        expect(doneMock).toHaveBeenCalled();
        expect(doneMock).toHaveBeenLastCalledWith(8);
    })
})
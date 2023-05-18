const {likeOrDislike} = require("../src/index");

describe('likeOrDislike', () => {
    it('Should return nothing when the list is empty', () => {
        expect(likeOrDislike([])).toBe("Nothing");
    });
});
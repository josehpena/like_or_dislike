const {likeOrDislike} = require("../src/index");

describe('likeOrDislike', () => {
    it('Should return nothing when the list is empty', () => {
        expect(likeOrDislike([])).toBe("Nothing");
    });

    it('Should return like when only a like is sended', () => {
        expect(likeOrDislike(["Like"])).toBe("Like");
    });
});
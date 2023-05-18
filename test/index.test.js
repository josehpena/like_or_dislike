const {likeOrDislike} = require("../src/index");

describe('likeOrDislike', () => {
    it('Should return nothing when the list is empty', () => {
        expect(likeOrDislike([])).toBe("Nothing");
    });

    it('Should return like when only a like is sended', () => {
        expect(likeOrDislike(["Like"])).toBe("Like");
    });
    
    it('Should return Dislike when only a dislike is seded', () => {
        expect(likeOrDislike(["Dislike"])).toBe("Dislike");
    });

    it('Should return nothing when two likes are sended', () => {
        expect(likeOrDislike(["Like", "Like"])).toBe("Nothing");
    });

    it('Should return nothing when two likes are sended', () => {
        expect(likeOrDislike(["Dislike", "Dislike"])).toBe("Nothing");
    });

    it('Should return Dislike when Like and Dislike are sended consecutively.', () => {
        expect(likeOrDislike(["Like", "Dislike"])).toBe("Dislike");
    });

    it('Should return Like when Dislike and Like are sended consecutively.', () => {
        expect(likeOrDislike(["Dislike", "Like"])).toBe("Like");
    });

    it('Should return Nothing when Like, Dislike and Dislike are sended consecutively', () => {
        expect(likeOrDislike(["Like", "Dislike", "Dislike"])).toBe("Nothing");
    });
});
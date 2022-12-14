const middle = require(`../middle.js`);
const assert = require('chai').assert;

describe("#middle", () => {
    it("return [3] for ([1, 2, 3, 4, 5])", () => {
        assert.strictEqual(middle ([1, 2, 3, 4, 5]), 3);
    });
    it("return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
            assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
    });
});

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("return ['Lighthouse', 'labs'] for ['yo yo', 'Lighthouse', 'labs']", () => {
        assert.deepEqual(tail(['yo yo', 'Lighthouse', 'labs']), ['Lighthouse', 'labs']);
    });
    it("return ['2', '3'] for ['1', '2', '3']", () => {
            assert.deepEqual(tail(['1', '2', '3']), ['2', '3']);
    });
    

});

const sum = require('./sumOfNumbers.js');
const {assert} = require('chai');

describe('sum function testing',function(){
    it('checking',()=>{
        assert.equal(Object.is(sum([2,3,4,'text',1]),NaN),true)
    })
    it('checking result ',()=>{
        assert.equal(sum([2,3,5,6]),16)
    })
})
const solve = require('./subSum')
const {assert} = require('chai')

describe('',function(){
    //invalid input
    it('should return Nan if there is string ',()=>{
        assert.equal(solve('text',3,4),NaN)
    })
    it('in case the start index is less than zero',()=>{
        assert.equal(solve([],1,2),0)
    })
    it('in case the end index is outside the bounds of the array',()=>{
        assert.equal(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1),3.3)
    })
    it('return NaN if string in arr',()=>{
        assert.equal(solve([10,'twenty',30,40],0,2),NaN)
    })
    it('it should return a number',()=>{
        assert.equal(solve([10, 20, 30, 40, 50, 60], 3, 300),150)
    })
})
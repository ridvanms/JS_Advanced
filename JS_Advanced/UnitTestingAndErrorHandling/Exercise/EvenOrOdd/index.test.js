const isOddOrEven = require('./index.js')
const {assert}= require('chai')

describe('isOddOrEven',()=>{
    it('check of even ',()=>{
        assert.equal(isOddOrEven('qko'),'even')
    })
})
const isSymmetric = require('./checker.js')
const { assert } = require('chai')

describe('Test isSymmetric function',function(){
    it('checking if it is not text',()=>{
        assert.equal(isSymmetric('text'),false)
    })
    it('checing if it is not a number',()=>{
        assert.equal(isSymmetric(3),false)
    })
    it('checking it it is not a obj',()=>{
        assert.equal(isSymmetric({}),false)
    })
})
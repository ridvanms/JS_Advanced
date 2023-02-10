const lookupChar = require('./charLookup')
const {expect} = require('chai')

describe('testing lookupChair function',function(){
    it('Checking passed values',()=>{
        expect(lookupChar(4,4)).to.equal(undefined)
        expect(lookupChar('4','4')).to.equal(undefined)
        expect(lookupChar([],3)).to.equal(undefined)
        expect(lookupChar(4,[4])).to.equal(undefined)
    })
    it('checking for index correction',()=>{
        expect(lookupChar('love',5)).to.equal('Incorrect index')
        expect(lookupChar('love',-1)).to.equal('Incorrect index')
        expect(lookupChar('love',4)).to.equal('Incorrect index')
    })
    it('returnning the letter in the proper index',()=>{
        expect(lookupChar('love',2)).to.equal('v')
    })
})
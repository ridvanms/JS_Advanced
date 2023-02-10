const mathEnforcer = require('./mathEnforcer')
const { expect } = require('chai')

describe('testing mathEnforcer',function(){
    it('Checking the paramater in addFive',()=>{
        expect(mathEnforcer.addFive('text')).to.be.undefined
        expect(mathEnforcer.addFive([])).to.be.undefined
        expect(mathEnforcer.addFive(true)).to.be.undefined
    })
    it('returning the value of addFive',()=>{
        expect(mathEnforcer.addFive(5)).to.equal(10)
    })
    /////////////
    it('Checking if the parameter for type',()=>{
        expect(mathEnforcer.subtractTen('text')).to.be.undefined
        expect(mathEnforcer.subtractTen(['text'])).to.be.undefined
        expect(mathEnforcer.subtractTen({})).to.be.undefined
    })
    it('returning the result if it is a number',()=>{
        expect(mathEnforcer.subtractTen(20)).to.equal(10)
    })
    //////////////////////////////////////////
    it('Checking if both parameter are numbers',()=>{
        expect(mathEnforcer.sum('text',4)).to.be.undefined
        expect(mathEnforcer.sum(4,'awsome')).to.be.undefined
        expect(mathEnforcer.sum(['text'],4)).to.be.undefined
        expect(mathEnforcer.sum(4,['awsome'])).to.be.undefined
        expect(mathEnforcer.sum({},4)).to.be.undefined
        expect(mathEnforcer.sum(4,{})).to.be.undefined
        expect(mathEnforcer.sum(4,true)).to.be.undefined
        expect(mathEnforcer.sum(true,4)).to.be.undefined
    })
    it('Returning the sum if they are with correct parameters',()=>{
        expect(mathEnforcer.sum(10,10)).to.equal(20)
    })
})
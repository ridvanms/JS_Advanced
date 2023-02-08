const isOddOrEven = require('./index.js')
const {expect}= require('chai')

describe('isOddOrEven function testing',()=>{
    it('cecking for odd ',()=>{
        expect(isOddOrEven('qko') = 'odd')
    });
    it('checking for even',()=>{
        expect(isOddOrEven('nishto') = 'even')});
    it('checking if it is string',()=>{
        expect(isOddOrEven(4).to.undefined)});
    it('checking if it is string 2',()=>{
        expect(isOddOrEven([]) = undefined)});
    it('checking if it is string 3',()=>{
        expect(isOddOrEven({}) = undefined)});
    
})
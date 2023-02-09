const createCalculator = require('./addSubtract')
const {expect} = require('chai')

describe('testing createCalculator function',function(){
    it('Checking for add existing',()=>{
        expect(typeof createCalculator().add).to.equal('function')
    })
    it('Checking for get existing',()=>{
        expect(typeof createCalculator().get).to.equal('function')
    })
    it('Checking for subtract existing',()=>{
        expect(typeof createCalculator().subtract).to.equal('function')
    })
    it('Checking if the result is obj',()=>{
        expect(typeof createCalculator()).to.equal('object')
    })
    it('internal sum can"t be modified',()=>{
        expect(createCalculator().value).to.equal(undefined)
    })
    it('Checking for add method if it adds parsable input',()=>{
        let calc = createCalculator()
        calc.add('1')
        expect(calc.get()).to.equal(1)
    })
    it('substract method ig it substract parseable input',()=>{
        let calc = createCalculator();
        calc.add('2')
        calc.subtract('1')
        expect(calc.get()).to.equal(1)
    })
})
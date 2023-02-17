const rentCar = require("./rentCar");
const { expect } = require('chai')

describe('testing rentCar ',function(){
    describe('testing  searchCar',()=>{
        it('Returning correct result',()=>{
            let shop = ['a','b','c'];
            let model = 'a'
            expect(rentCar(shop,model)).to.equal(`There is 1 car of model a in the catalog!`)
        })
        it('Throwing error',()=>{
            expect(rentCar(['a','b','c'],1)).to.throw(Error)
            expect(rentCar(['a','b','c'],false)).to.throw(Error)
            expect(rentCar(['a','b','c'],[])).to.throw(Error)
            expect(rentCar({},1)).to.throw(Error)
            expect(rentCar([])).to.throw(Error)
            expect(rentCar([],"1")).to.throw(Error)
            expect(rentCar(['a','b','c'],"d")).to.throw(new Error('There are no such models in the catalog!'))
            expect(rentCar(2,2)).to.throw(Error)
        })
    })

})
const rentCar = require("./rentCar");
const { expect } = require('chai')

describe('testing rentCar ',function(){
    describe('testing  searchCar',()=>{
        it('Returning correct result',()=>{
            let shop = ['a','b','c'];
            let model = 'a'
            expect(rentCar.searchCar(shop,model)).to.equal(`There is 1 car of model a in the catalog!`)
        })
        it('Throwing error',()=>{
            expect(()=>rentCar.searchCar(['a','b','c'],1)).to.throw()
            expect(()=>rentCar.searchCar(['a','b','c'],false)).to.throw()
            expect(()=>rentCar.searchCar(['a','b','c'],[])).to.throw()
            expect(()=>rentCar.searchCar({},1)).to.throw()
            expect(()=>rentCar.searchCar([])).to.throw()
            expect(()=>rentCar.searchCar([],"1")).to.throw()
            expect(()=>rentCar.searchCar(['a','b','c'],"d")).to.throw('There are no such models in the catalog!')
            expect(()=>rentCar.searchCar(2,2)).to.throw()
        })
    })
    describe('Testing calculatePriceOfCar',()=>{
        it('Throwing errors',()=>{
            expect(()=>rentCar.calculatePriceOfCar('honda','s')).to.throw()
            expect(()=>rentCar.calculatePriceOfCar('honda',2)).to.throw(`No such model in the catalog!`)
            expect(()=>rentCar.calculatePriceOfCar('Volkswagen',[])).to.throw()
            expect(()=>rentCar.calculatePriceOfCar('BMW','s')).to.throw()
        })
        it('correct values ',()=>{
            expect(rentCar.calculatePriceOfCar('Volkswagen',1)).to.equal(`You choose Volkswagen and it will cost $20!`)
            expect(rentCar.calculatePriceOfCar('Audi',1)).to.equal(`You choose Audi and it will cost $36!`)
            expect(rentCar.calculatePriceOfCar('Toyota',1)).to.equal(`You choose Toyota and it will cost $40!`)
            expect(rentCar.calculatePriceOfCar('BMW',1)).to.equal(`You choose BMW and it will cost $45!`)
            expect(rentCar.calculatePriceOfCar('Mercedes',2)).to.equal(`You choose Mercedes and it will cost $100!`)
        })
    })
    describe('testing checkBudget',()=>{
        it('Returning true values',()=>{
            expect(rentCar.checkBudget(2,2,5)).to.equal(`You rent a car!`)
            expect(rentCar.checkBudget(2,2,4)).to.equal(`You rent a car!`)
            expect(rentCar.checkBudget(2,2,3)).to.equal(`You need a bigger budget!`)
        })
        it('Throwing error',()=>{
            expect(()=>rentCar.checkBudget('s',2,3)).to.throw();
            expect(()=>rentCar.checkBudget(3,'s2s',3)).to.throw();
            expect(()=>rentCar.checkBudget(1,2,'s')).to.throw();
            expect(()=>rentCar.checkBudget(2,3)).to.throw();
            expect(()=>rentCar.checkBudget(2)).to.throw();
        })
    })
})
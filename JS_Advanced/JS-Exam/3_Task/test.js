const findNewApartment = require('./findApartment')
const {expect} = require('chai')

describe('Testing findNewApartment',function(){
    describe('Checking isGoodLocation',()=>{
        it('Returning correct values',()=>{
            expect(findNewApartment.isGoodLocation('Sozopol',true)).to.equal(`This location is not suitable for you.`)
            expect(findNewApartment.isGoodLocation('Sozopol',false)).to.equal(`This location is not suitable for you.`)
           
            expect(findNewApartment.isGoodLocation('Sofia',true)).to.equal(`You can go on home tour!`)
            expect(findNewApartment.isGoodLocation('Plovdiv',true)).to.equal(`You can go on home tour!`)
            expect(findNewApartment.isGoodLocation('Varna',true)).to.equal(`You can go on home tour!`)
            
            expect(findNewApartment.isGoodLocation('Varna',false)).to.equal(`There is no public transport in area.`)
            expect(findNewApartment.isGoodLocation('Plovdiv',false)).to.equal(`There is no public transport in area.`)
            expect(findNewApartment.isGoodLocation('Sofia',false)).to.equal(`There is no public transport in area.`)

        })
        it('Throwing errors',()=>{
            expect(()=>findNewApartment.isGoodLocation(1,true)).to.throw()
            expect(()=>findNewApartment.isGoodLocation([],true)).to.throw()
            expect(()=>findNewApartment.isGoodLocation({},true)).to.throw()
            expect(()=>findNewApartment.isGoodLocation("Sofia",1)).to.throw()
            expect(()=>findNewApartment.isGoodLocation("Varna",'s')).to.throw()
            expect(()=>findNewApartment.isGoodLocation("Plovdiv",[])).to.throw()
            expect(()=>findNewApartment.isGoodLocation("Sofia",{})).to.throw()
        })
    })
    describe('Checking isLargeEnough',()=>{
        it('Returning correct values',()=>{
            expect(findNewApartment.isLargeEnough([20,30],21)).to.equal('30')
            expect(findNewApartment.isLargeEnough([20,30],20)).to.equal('20, 30')
            expect(findNewApartment.isLargeEnough([20,30],21)).to.equal('30')
            expect(findNewApartment.isLargeEnough([30],21)).to.equal('30')
            expect(findNewApartment.isLargeEnough([30],30)).to.equal('30')
            expect(findNewApartment.isLargeEnough([30],31)).to.equal('')
        })
        it('Throwing errors',()=>{
            expect(()=>findNewApartment.isLargeEnough('a',20)).to.throw()
            expect(()=>findNewApartment.isLargeEnough({},20)).to.throw()
            expect(()=>findNewApartment.isLargeEnough(1,20)).to.throw()
            expect(()=>findNewApartment.isLargeEnough([],20)).to.throw()
            
            expect(()=>findNewApartment.isLargeEnough([20],'a')).to.throw()
            expect(()=>findNewApartment.isLargeEnough([20],[20])).to.throw()
            expect(()=>findNewApartment.isLargeEnough([20],{})).to.throw()
            expect(()=>findNewApartment.isLargeEnough([20],true)).to.throw()
            expect(()=>findNewApartment.isLargeEnough([20],false)).to.throw()

        })
    })
    describe('Checking isItAffordable',()=>{
        it('Returning correct values',()=>{
            expect(findNewApartment.isItAffordable(20,20)).to.equal(`You can afford this home!`)
            expect(findNewApartment.isItAffordable(20,21)).to.equal(`You can afford this home!`)

            expect(findNewApartment.isItAffordable(20,19)).to.equal(`You don't have enough money for this house!`)
        })
        it('Throwing errors',()=>{
            expect(()=>findNewApartment.isItAffordable(-1,1)).to.throw()
            expect(()=>findNewApartment.isItAffordable(1,-1)).to.throw()
            expect(()=>findNewApartment.isItAffordable(1,0)).to.throw()
            expect(()=>findNewApartment.isItAffordable(0,1)).to.throw()

            expect(()=>findNewApartment.isItAffordable("a",1)).to.throw()
            expect(()=>findNewApartment.isItAffordable(1,"a")).to.throw()
            expect(()=>findNewApartment.isItAffordable({},1)).to.throw()
            expect(()=>findNewApartment.isItAffordable([],1)).to.throw()
            expect(()=>findNewApartment.isItAffordable(1,{})).to.throw()
            expect(()=>findNewApartment.isItAffordable(1,[])).to.throw()
        })
    })
   
})
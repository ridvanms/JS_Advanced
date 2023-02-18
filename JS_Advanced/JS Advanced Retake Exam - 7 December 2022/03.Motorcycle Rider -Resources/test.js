const motorcycleRider = require('./Motorcycle Rider')
const {expect } = require('chai')

describe('Testing motorcycleRider',function(){
    describe('Testing licenseRestriction',()=>{
        it("should be correct, when category is AM", function () {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
          });
          it("should be correct, when category is A1", function () {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
          });
          it("should be correct, when category is A2", function () {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
          });
          it("should be correct, when category is A", function () {
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
          });
        it('Throwing error',()=>{
            expect(()=>motorcycleRider.licenseRestriction('B')).to.throw()
            expect(()=>motorcycleRider.licenseRestriction('am')).to.throw()
            expect(()=>motorcycleRider.licenseRestriction('a')).to.throw()
            expect(()=>motorcycleRider.licenseRestriction(2)).to.throw()
        })
    })
    describe('Testing motorcycleShowroom',()=>{
        it('Returnin correct values',()=>{    
            expect(motorcycleRider.motorcycleShowroom([50],50)).to.equal(`There are 1 available motorcycles matching your criteria!`)
            expect(motorcycleRider.motorcycleShowroom([20,14,70,123,11,50,51],70)).to.equal(`There are 3 available motorcycles matching your criteria!`)
            expect(motorcycleRider.motorcycleShowroom([99],100)).to.equal(`There are 1 available motorcycles matching your criteria!`)

        })
        it('Throwing Error',()=>{
            it("should throw Error, when engineVolume is not array", function () {
                expect(() => motorcycleRider.motorcycleShowroom(1, 100)).to.throw(Error);
              });
              it("should throw Error, when engineVolume is not array", function () {
                expect(() => motorcycleRider.motorcycleShowroom([], 100)).to.throw(Error);
              });
              it("should throw Error, when maximumEngineVolume is not number", function () {
                expect(() => motorcycleRider.motorcycleShowroom([100], 'a')).to.throw(Error);
              });
              it("should throw Error, when maximumEngineVolume is not number", function () {
                expect(() => motorcycleRider.motorcycleShowroom([100], 1)).to.throw(Error);
              });
        })
    })
    describe('Testing otherSpendings',()=>{
        it('Returning correct values',()=>{
            expect(motorcycleRider.otherSpendings(['helmet','jacked','helmet','helmet'],['engine oil','oil filter'],true)).to.equal(`You spend $900.00 for equipment and consumables with 10% discount!`)
            expect(motorcycleRider.otherSpendings(['helmet','jacked','helmet','helmet'],['engine oil','oil filter'],false)).to.equal(`You spend $1000.00 for equipment and consumables!`)
        })
        it('Throwing some error',()=>{
            expect(()=>motorcycleRider.otherSpendings(1,[],true)).to.throw()
            expect(()=>motorcycleRider.otherSpendings([],[],1)).to.throw()
            expect(()=>motorcycleRider.otherSpendings([],1,true)).to.throw()
            expect(()=>motorcycleRider.otherSpendings([],[],[])).to.throw()
            expect(()=>motorcycleRider.otherSpendings([],[],'sdf')).to.throw()
        })
    })
})
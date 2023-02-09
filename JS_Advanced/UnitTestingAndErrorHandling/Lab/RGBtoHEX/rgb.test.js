const rgbToHexColor = require('./rgbToHex')
const {assert} = require('chai')

describe('testing rgb function',function(){
    describe('testing red color',()=>{
        it('Checking for red value',()=>{
            assert.equal(rgbToHexColor(256,200,200),undefined)
        })
        it('Checking for red value',()=>{
            assert.equal(rgbToHexColor(-4,200,200),undefined)
        })
        it('Checking for red value',()=>{
            assert.equal(rgbToHexColor('text',200,200),undefined)
        })
    })
    describe('testing green color',()=>{
        it('Checking for green value',()=>{
            assert.equal(rgbToHexColor(200,256,200),undefined)
        })
        it('Checking for green value',()=>{
            assert.equal(rgbToHexColor(200,-4,200),undefined)
        })
        it('Checking for green value',()=>{
            assert.equal(rgbToHexColor(200,'text',200),undefined)
        })
    })
    //////////////////////////////////////////////////////////
    ///////////////////////////////////////////////
    describe('testing blue color',()=>{
        it('Checking for blue value',()=>{
            assert.equal(rgbToHexColor(200,200,256),undefined)
        })
        it('Checking for blue value',()=>{
            assert.equal(rgbToHexColor(200,200,-4),undefined)
        })
        it('Checking for blue value',()=>{
            assert.equal(rgbToHexColor(200,200,'text'),undefined)
        })
    })

    describe('testing for missing params',()=>{
        it('checking for missing color',()=>{
            assert.equal(rgbToHexColor(0,0),undefined)
            assert.equal(rgbToHexColor(0),undefined)
            assert.equal(rgbToHexColor(),undefined)
        })
    })
    describe('testing some colors',()=>{
        it('testing white',()=>{
            assert.equal(rgbToHexColor(255,255,255),'#FFFFFF')
        })
        it('testing black',()=>{
            assert.equal(rgbToHexColor(0,0,0),'#000000')
        })
    })
})

// const { expect } = require("chai");
// const { rgbToHexColor } = require("./rgbToHex");

// describe("RGBtoHEXcolor tests", () => {
//     it("Test 1: converts to black", () => {
//         expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
//     });

//     it("Test 2: converts to white", () => {
//         expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
//     });

//     it("Test 3: converts SoftUni blue from site to #234465", () => {
//         expect(rgbToHexColor(35, 68, 101)).to.equal("#234465");
//     });

//     it("Test 4: returns undefined for missing params", () => {
//         expect(rgbToHexColor(0, 0)).to.be.undefined;
//         expect(rgbToHexColor(0)).to.be.undefined;
//         expect(rgbToHexColor()).to.be.undefined;
//     });

//     it("Test 5: returns undefined for out of lower bound", () => {
//         expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
//         expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
//         expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
//     });

//     it("Test 6: returns undefined for out of upper bound", () => {
//         expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
//         expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
//         expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
//     });

//     it("Test 7: returns undefined for floats", () => {
//         expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
//         expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
//         expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;
//     });

//     it("Test 8: returns undefined for string param", () => {
//         expect(rgbToHexColor("1", 0, 0)).to.be.undefined;
//         expect(rgbToHexColor(0, "1", 0)).to.be.undefined;
//         expect(rgbToHexColor(0, 0, "1")).to.be.undefined;
//     });

//     it("Test 9: converts to 15, 15, 15 to #0F0F0F", () => {
//         expect(rgbToHexColor(15, 15, 15)).to.equal("#0F0F0F");
//     });
// });
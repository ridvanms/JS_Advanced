const chooseYourCar = require("./chooseYourCar").chooseYourCar;
const expect = require("chai");

describe("testing ", (type, color, year) => {
  describe("test choosing type", () => {
    it("If the year is less than 1900 and the year is more than 2022", () => {
      expect(chooseYourCar.choosingType("Sedan", "red", "1899")).to.throw(
        new Error("Invalid Year!")
      );
    });
  });
});

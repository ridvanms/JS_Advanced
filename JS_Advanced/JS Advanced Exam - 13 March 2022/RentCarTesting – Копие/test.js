const rentCar = require("./rentCar.js");
const { expect } = require("chai");

describe("testing rentCar", function () {
  describe("testing searchCar", () => {
    it("correct answers", () => {
      expect(rentCar.searchCar(["a", "b", "c"], "a")).to.equal(
        "There is 1 car of model a in the catalog!"
      );
    });
    it("possible errors", () => {
      expect(() => rentCar.searchCar([], "")).to.throw();
      expect(() => rentCar.searchCar(1, "")).to.throw();
      expect(() => rentCar.searchCar({}, "")).to.throw();
      expect(() => rentCar.searchCar(false, "")).to.throw();
      expect(() => rentCar.searchCar(["a", "b", "c"], false)).to.throw();
    });
  });
});

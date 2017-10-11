var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

beforeEach(function () {
  dino1 = new Dinosaur("Dinosaurus", 1);
})

describe("Dinosaur", function() {
  it("should have a type", function() {
    assert.strictEqual(dino1.type, "Dinosaurus");
  });
});

describe("Dinosaur", function() {
  it("should have 1 offspring per year", function() {
    assert.strictEqual(dino1.offspringPerYear, 1);
  });
});

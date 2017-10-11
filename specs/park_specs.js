var assert = require("assert");
var Dinosaur = require("../dinosaur.js");
var Park = require("../park.js");

beforeEach(function () {
  park = new Park();
  dino1 = new Dinosaur("Dinosaurus", 1);
  dino2 = new Dinosaur("Dinosaurus", 1);
  dino3 = new Dinosaur("Alasaurus", 2);
})

describe("Park", function() {
  it("should start with empty enclosure", function() {
    assert.strictEqual(park.enclosure.length, 0);
  });
});

describe("Park", function() {
  it("should add a dino", function() {
    park.addDinosaur(dino1);
    assert.strictEqual(park.enclosure.length, 1);
  });
});

describe("Park", function() {
  it("should add many dinos", function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    assert.strictEqual(park.enclosure.length, 3);
  });
});

describe("Park", function() {
  it("should remove a dino", function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.removeDinosaur(dino1)
    assert.strictEqual(park.enclosure.length, 2);
  });
});

describe("Park", function() {
  it("should remove all of dino type", function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.removeAllOfType("Dinosaurus")
    assert.strictEqual(park.enclosure.length, 1);
  });
});

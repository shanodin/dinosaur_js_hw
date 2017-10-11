var Park = function () {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  var index = this.enclosure.indexOf(dinosaur);
  this.enclosure.splice(index, 1);
};

Park.prototype.removeAllOfType = function (dinoType) {
  for (var i = this.enclosure.length -1; i >= 0; i--) {
    if (this.enclosure[i].type === dinoType) {
      this.enclosure.splice(i, 1);
    };
  };
};


module.exports = Park;

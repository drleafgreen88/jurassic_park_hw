const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    let ducky = new Dinosaur ('ducky', 'herbivore', 25);
    let petrie = new Dinosaur ('petrie', 'herbivore', 30)
    let cera = new Dinosaur ('cera', 'omnivore', 45)
    park = new Park('Littlefoot Land', 20, [ducky, petrie, cera]);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Littlefoot Land');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function () {
    let ducky = new Dinosaur ('ducky', 'herbivore', 25);
    let petrie = new Dinosaur ('petrie', 'herbivore', 30)
    let cera = new Dinosaur ('cera', 'omnivore', 45)
    const actual = park.dinosaurCollection;
    assert.deepEqual(actual, [ducky, petrie, cera]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    let ducky = new Dinosaur ('ducky', 'herbivore', 25);
    let petrie = new Dinosaur ('petrie', 'herbivore', 30)
    let cera = new Dinosaur ('cera', 'omnivore', 45)
    let spike = new Dinosaur ('spike', 'herbivore', 55)
    park.addDinosaur(spike);
    const actual = park.dinosaurCollection;
    assert.deepEqual(actual, [ducky, petrie, cera, spike])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    let ducky = new Dinosaur ('ducky', 'herbivore', 25);
    let petrie = new Dinosaur ('petrie', 'herbivore', 30)
    park.removeDinosaur ();
    const actual = park.dinosaurCollection;
    assert.deepEqual(actual, [ducky, petrie])
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});

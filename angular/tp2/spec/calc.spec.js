describe("A suite", function() {
  var Calc = require("../Calc.js")
  var c = {};

  beforeEach(function(){
      c = new Calc();
  });

  it("test 2+1", function() {
    expect(c.add(1,2)).toBe(3);
  });
});

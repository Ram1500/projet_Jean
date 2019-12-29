// https://mochajs.org/#getting-started

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
  describe("testing async code",function() {
      it("time out code",function (done) {
          setTimeout(function(){
              assert.equal(true,false)
              done()
          }, 1000)
      })
  })
});

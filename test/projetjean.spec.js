// https://mochajs.org/#getting-started
const {getCurrentmmddhh} = require('../src/utils')
// https://www.npmjs.com/package/chai
// https://www.chaijs.com/guide/styles/#assert
var assert = require('chai').assert;
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
  describe("testing async code",function() {
      it("time out code",function (done) {
          setTimeout(function(){
              assert.equal(true,true)
              done()
          }, 10)
      })
  })

describe('.utils', () => {
    describe('.getCurrentmmddhh', () => {
      it('should return a string', ()=> {
        const result = getCurrentmmddhh();
        console.log(result);
        assert.equal(typeof result, 'string')
      })

      it('should return the date', ()=> {
        const date = new Date().getDate();
        const hour = new Date().getHours();
        const result = getCurrentmmddhh();
        assert.isAbove(result.indexOf(date), -1)
        assert.isAbove(result.indexOf(hour), -1)
      })
    })
})


});

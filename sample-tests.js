(function() {
  'use strict';

  describe('tests', function() {
    it('this one will pass', function() {
      expect(true).to.equal(true);
    });

    it('this one will fail', function() {
      expect(true).to.equal(false);
    });

    it('this one will pass too', function() {
      expect(true).to.equal(true);
    });
  });

}());

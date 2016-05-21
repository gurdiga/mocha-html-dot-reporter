(function() {
  'use strict';

  describe('tests', function() {
    it('this one will pass', function() {
      expect(true).to.equal(true);
    });

    it('this one will fail', function() {
      expect(true).to.equal(false,
        'this is a long assertion failure message that should come out in the failure details section and should wrap');
    });

    it('this one will pass too', function() {
      expect(true).to.equal(true);
    });
  });

}());

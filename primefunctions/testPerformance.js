/* eslint-env mocha, chai */
/* global chai, maxPrimeSum */

describe('maxPrimeSum', function () {
  this.slow(0);
  it('maxPrimeSum(10000) should take less than 20 ms', function () {
    this.timeout(20);
    chai.expect(maxPrimeSum(10000)).to.have.all.members([9521, 65]);
  });
  it('maxPrimeSum(100000) should take less than 200 ms', function () {
    this.timeout(200);
    chai.expect(maxPrimeSum(100000)).to.have.all.members([92951, 183]);
  });
});

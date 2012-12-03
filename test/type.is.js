describe('type.is()', function () {
  it('should detect the primatives', function () {
    type.is([], 'array').should.be.true;
    type.is('hello', 'string').should.be.true;
    type.is(1, 'number').should.be.true;
    type.is(true, 'boolean').should.be.true;
    type.is(false, 'boolean').should.be.true;
    type.is([], 'array').should.be.true;
    type.is(/a\//g, 'regexp').should.be.true;
    type.is(undefined, 'undefined').should.be.true;
    type.is(null, 'null').should.be.true;
    type.is(function () {}, 'function').should.be.true;
  });

  it('should detect custom test as regexp', function () {
    type.test('int', /^[0-9]+$/);
    type.is('1', 'int').should.be.true;
    type.is('a', 'int').should.be.false;
  });

  it('should detect custom test as function', function () {
    type.test('bln', function (obj) {
      if ('boolean' === type(obj)) return true;
      if (obj === 'yes'|| obj === 'no') return true;
      return false;
    });

    type.is(true, 'bln').should.be.true;
    type.is(false, 'bln').should.be.true;
    type.is('yes', 'bln').should.be.true;
    type.is('no', 'bln').should.be.true;
    type.is('true', 'bln').should.be.false;
    type.is('false', 'bln').should.be.false;
  });
});

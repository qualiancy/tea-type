describe('type()', function () {
  it('should detect arrays', function () {
    type([]).should.equal('array');
  });

  it('should detect strings', function () {
    type('hello').should.equal('string');
  });

  it('should detect numbers', function () {
    type(1).should.equal('number');
    type(1.23445).should.equal('number');
    type(-1.23445).should.equal('number');
    type(Infinity).should.equal('number');
  });

  it('should detect booleans', function () {
    type(true).should.equal('boolean');
    type(false).should.equal('boolean');
  });

  it('should detect regexps', function () {
    type(/\//g).should.equal('regexp');
    type(new RegExp('/\/')).should.equal('regexp');
  });

  it('should detect undefined', function () {
    type(undefined).should.equal('undefined');
  });

  it('should detect null', function () {
    type(null).should.equal('null');
  });

  it('should detect functions', function () {
    var noop = function () {};
    type(noop).should.equal('function');
  });

  it('should detect objects', function () {
    var Noop = function () {}
    type({}).should.equal('object');
    type(new Noop).should.equal('object');
    type(new String('hello')).should.equal('object');
  });

  it('should detect dates', function () {
    type(new Date).should.equal('date');
  });

  it('should detect arguments', function () {
    (function () {
      type(arguments).should.equal('arguments');
    })();
  })
});

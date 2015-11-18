var expect = require('chai').expect;
var models = require('../models')
var Page = models.Page;
var User = models.User;

describe('page model', function() {
  describe('validations', function() {

    var page;
    beforeEach(function() {
      page = new Page();
    });

    it('does not validate if title is not provided', function() {
      page.content = 'blahblahblah';
      page.save(function(err) {
        expect(err.name).to.be.equal('ValidationError');
      })
    });
    it('does not validate if content is not provided', function(done) {
      page.title = 'HELLO';
      page.save(function(err) {
        expect(err.name).to.be.equal('ValidationError');
        done();
      });
    });
  });

  describe('statics', function() {
    describe('findByTag', function() {
      xit('returns nothing if tag doesnt exist', function() {
        expect()
      });
      xit('tests one tag', function() {
        expect()
      });
      xit('tests multiple tags', function() {
        expect()
      });
    });
    describe('findOrCreate', function() {
      xit('returns user if email exists', function() {
        expect()
      });
      xit('creates a new user if email does not exist', function() {
        expect()
      })
    });
  });

  describe('methods', function() {
    describe('findSimilar', function() {
      xit('returns nothing if page has no tags', function() {
        expect()
      });
      xit('returns nothing if its the only page', function() {
        expect()
      });
      xit('returns nothing if there are no similar pages', function() {
        expect()
      });
      xit('returns similar pages', function() {
        expect()
      });
    });
  });

  describe('virtuals', function() {
    describe('route', function() {
      xit('creates correct url', function() {
        expect()
      });
    });
  });

  describe('hooks', function() {
    xit('url only contains letters and underscores', function() {
      expect()
    });
  });
});

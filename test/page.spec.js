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
   	afterEach(function(done) {
			Page.remove({});
			done();
		});

    it('does not validate if title is not provided', function(done) {
      page.content = 'blahblahblah';
      page.save(function(err) {
        expect(err.name).to.be.equal('ValidationError');
        done();
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
			beforeEach(function(done){
				Page.create({
					title: 'foo',
					content: 'bar',
					tags: ['foo', 'bar']
				}, done )
			});
			afterEach(function(done) {
				Page.remove({}, done)
			});
      it('doesnt return pages because no page has tag', function(done) {
      	Page.findByTag('hello').then(function(pageArr) {
      		expect(pageArr.length).to.be.equal(0);
      		done();
      	}).then(null, done);
      });
      it('finds pages with the tag', function(done) {
      	 Page.findByTag('foo').then(function(pageArr) {
      		expect(pageArr.length).to.be.equal(1);
      		done();
      	}).then(null, done);
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
    	beforeEach(function(done){
				Page.create({
					title: 'foo',
					content: 'bar',
					tags: ['foo', 'bar']
				})
				Page.create({
					title: 'bar',
					content: 'foo',
					tags: ['foo', 'bar']
				})
				Page.create({
					title: 'aalkdfjhg',
					content: 'bafsdfsd',
					tags: ['random', 'shit']
				}, done )
			});
			afterEach(function(done) {
				Page.remove({}, done)
			});
      it('returns nothing if there are no similar pages', function(done) {
      	Page.findOne({ title: 'aalkdfjhg' })
        .then(function (page) {
            return page.findSimilar();
        })
        .then(function(pages) {
        	expect(pages.length).to.be.equal(0);
        	done();
        }).then(null, done);
      });
      it('returns similar pages', function(done) {
      	Page.findOne({ title: 'foo' })
        .then(function (page) {
            return page.findSimilar();
        })
        .then(function(pages) {
        	expect(pages.length).to.be.equal(1);
        	done();
        }).then(null, done);
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

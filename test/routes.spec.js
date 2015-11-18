var supertest = require('supertest');
var expect = supertest.expect;
var app = require('../app');
var agent = supertest.agent(app);

describe('http requests', function() {

  describe('GET /', function() {
  	it('gets 200', function(done) {
    	return agent
	  		.get('/')
    		.expect(200, done)
	  });
  });

  describe('GET /add', function () {
    it('gets 200', function (done) {
    	return agent
    		.get('/wiki/add')
    		.expect(200, done)
    });
  });

  describe('GET /wiki/:urlTitle', function() {
    xit('gets 404 on page that doesnt exist', function() {});
    xit('gets 200 on page that does exist', function() {});
  });

  describe('GET /wiki/search', function() {
    xit('gets 200', function() {});
  });

  describe('GET /wiki/:urlTitle/similar', function() {
    xit('gets 404 for page that doesn\'t exist', function() {});
    xit('gets 200 for similar page', function() {});
  });


  describe('GET /wiki/add', function() {
    xit('gets 200', function() {});
  });


  describe('POST /wiki/add', function() {
    xit('creates in db', function() {});
  });

});
var supertest = require('supertest');
var app = require('../app');
var agent = supertest.agent(app);

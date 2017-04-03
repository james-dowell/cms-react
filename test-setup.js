var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

chai.use(sinonChai);

global.chai = chai;
global.sinon = sinon;

global.expect = chai.expect

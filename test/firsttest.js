var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('https://httpbin.org/');

describe('1.0 Validating the APIs', function(){
it('Website is working as expected',function(done){
  api.get('/ip')
  .set('Accept', 'applications/json')
  .expect(200,done);


});
});

const request = require('supertest');
const app = require('../server');


describe('Server', function() {
	it('respond Hello World!', function(done) {
		request(app)
			.get('/')
            .expect(200)
            .end(function (err, res) {
                if(err) return done.fail(err);
                done()
            });
  	});
});
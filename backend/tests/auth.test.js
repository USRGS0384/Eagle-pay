import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server'; // Import the app to test the endpoints

chai.use(chaiHttp);
const { expect } = chai;

describe('Authentication Tests', function() {
  it('should pass a basic test', function() {
    expect(1 + 1).to.equal(2); // Using expect here instead of assert
  });

  it('should signup a new user', function(done) {
    const user = {
      username: 'testuser',
      password: 'password123',
    };

    chai
      .request(app)
      .post('/api/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('token');
        done(); // Properly call done() to indicate the test is complete
      });
  });
});


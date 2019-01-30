let request = require('supertest');
let app = require('../index.js');

describe('Create office', () => {
  it('Creates political offices', done => {
    request(app)
      .post('/offices')
      .send({
        type: 'federal',
        name: 'president'
      })
      .expect(404)
      .expect(
        {
          id: 1,
          type: 'federal',
          name: 'president'
        },
        done()
      );
  });
});

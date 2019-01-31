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
      .expect(200)
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

describe('Create parties', () => {
  it('Creates political parties', done => {
    request(app)
      .post('/parties')
      .send({
        name: 'PDP',
        hqAddress: 'Kaduna',
        logoUrl: '/api/images/logo.png'
      })
      .expect(200)
      .expect(
        {
          id: 1,
          name: 'PDP',
          hqAddress: 'Kampala Street',
          logoUrl: '/api/images/logo.png'
        },
        done()
      );
  });
});

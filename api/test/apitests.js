'use strict';
let request = require('supertest');
let app = require('../index.js');

describe('Create office', () => {
  it('Creates political offices', done => {
    request(app)
      .post('/offices')
      .send(
        {
          type: 'federal',
          name: 'president'
        },
        {
          type: 'state',
          name: 'councillor'
        }
      )
      .expect(200)
      .expect(
        {
          id: 1,
          type: 'federal',
          name: 'president'
        },
        {
          id: 2,
          type: 'state',
          name: 'councillor'
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

describe('Get a list of parties', () => {
  it('Get list of political parties', done => {
    request(app)
      .get('/parties')
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

describe('Get a single party', () => {
  it('Get a single political party based on ID', done => {
    request(app)
      .get('/parties/:id')
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

describe('Get a list of offices', () => {
  it('Get list of political offices', done => {
    request(app)
      .get('/offices')
      .expect(200)
      .expect(
        {
          id: 1,
          type: 'federal',
          name: 'president'
        },
        {
          id: 2,
          type: 'state',
          name: 'councillor'
        },
        done()
      );
  });
});

describe('Get a single office', () => {
  it('Get a single political office based on ID', done => {
    request(app)
      .get('/offices/:id')
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

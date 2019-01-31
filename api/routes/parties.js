'use strict';

import partyList from '../models/party_list';
import Joi from 'joi';
import express from 'express';

const router = express.Router();

// Create a PARTY
router.post('/', (req, res) => {
  // Declare our request schema
  const schema = {
    name: Joi.string()
      .min(2)
      .required(),
    hqAddress: Joi.string().required(),
    logoUrl: Joi.string().required()
  };

  // validating the body of the request
  const party = Joi.validate(req.body, schema);

  if (party.error) {
    res.status(404).send(party.error.message);
    return;
  }

  const createdParty = {
    id: partyList.length + 1,
    name: req.body.name,
    hqAddress: req.body.hqAddress,
    logoUrl: req.body.logoUrl
  };

  partyList.push(createdParty);
  res.send(createdParty);
});

// GET all PARTIES
router.get('/', (req, res) => {
  res.send(partyList);
});

// GET a single PARTY
router.get('/:id', (req, res) => {
  const party = partyList.find(c => c.id === parseInt(req.params.id));

  // If does not find a match return 404
  if (!party) res.status(400).send('party not found');
  res.send(party);
});

//  DELETE a PARTY
router.delete('/:id', (req, res) => {
  // Look up the course
  const party = partyList.find(c => c.id === parseInt(req.params.id));
  // If not exist return 404
  if (!party) res.status(404).send('Party not found');
  const index = partyList.indexOf(party);
  partyList.splice(index, 1);

  // Return a response to the client
  res.send(party);
});

module.exports = router;

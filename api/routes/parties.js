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

module.exports = router;

'use strict';
import officeList from '../models/office_list';
import Joi from 'joi';
import express from 'express';

const router = express.Router();

// Create an office
router.post('/', (req, res) => {
  // Declare our request schema
  const schema = {
    type: Joi.string().required(),
    name: Joi.string()
      .min(5)
      .required()
  };

  // validating the body of the request
  const office = Joi.validate(req.body, schema);

  if (office.error) {
    res.status(404).send(office.error.message);
    return;
  }

  const createdOffice = {
    id: officeList.length + 1,
    type: req.body.type,
    name: req.body.name
  };

  officeList.push(createdOffice);
  res.send(createdOffice);
});

module.exports = router;

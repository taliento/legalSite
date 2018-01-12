/* jshint node: true */
'use strict';

const express = require('express');
const mailService = require('services/gmail.service');
const router = express.Router();

router.post('/sendMail', sendMail);
module.exports = router;

function sendMail(req, res) {

  //TODO google auth

  mailService.sendMail(req.body)
  .then((doc) => {
    res.send(doc);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
}

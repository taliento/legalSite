/* jshint node: true */
'use strict';

const Q = require('q');
const path = require('path');
const nodemailer = require('nodemailer');

let service = {};
service.sendMail = sendMail;
module.exports = service;

function sendMail(mail) {
  let deferred = Q.defer();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PWD
    }
  });

  const mailOptions = {
    from: mail.from,
    to: process.env.EMAIL,
    subject: mail.name+' '+mail.surname,
    text: mail.text,
    html: '<b>Hello world ?</b>' // html body
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      deferred.reject(error);
    } else {
      console.log('Email sent: ' + info.response);
      deferred.resolve(info.response);
    }
  });

  return deferred.promise;
}

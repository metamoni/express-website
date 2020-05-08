const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    return res.send('Feedback list');
  });

  router.post('/', (req, res) => {
    return res.send(`Feedback form posted`);
  });

  return router;
};

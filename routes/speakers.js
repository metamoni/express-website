const express = require('express');

const router = express.Router();

module.exports = params => {
  const { speakersService } = params;

  router.get('/', async (req, res) => {
    try {
      const speakers = await speakersService.getList();
      return res.json(speakers);
    } catch (err) {
      throw new Error(err.message);
    }
  });

  router.get('/:shortname', (req, res) => {
    return res.send(`Detail page of ${res.params.shortname}`);
  });

  return router;
};

const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  res.send('viewing all posts');
});

router.post('/', (req, res) => {
  res.send('creating a post');
});

router.get('/:id', (req, res) => {
  res.send('viewing a post');
});

router.get('/:id/edit', (req, res) => {
  res.send('editing a post');
});

module.exports = router;

const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');

app.use('/posts', postRoutes);

app.listen(3000, () => {
  console.log('OK');
});

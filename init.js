const catalogController = require('./controllers/catalog');
const homeController = require('./controllers/home');

async function start() {
  const express = require('express');
  const hbs = require('express-handlebars').create({
    extname: '.hbs',
  });
  const mongoose = require('mongoose');
  const connStr = 'mongodb://localhost:27017/CarDatabase';

  const port = 5555;

  const app = express();
  app.engine('.hbs', hbs.engine);
  app.set('view engine', '.hbs');

  await mongoose.connect(connStr, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  app.use(homeController);
  app.use('/catalog', catalogController);
  

  app.listen(port, () => console.log(`App listening on port ${port}`));
}

module.exports = start;

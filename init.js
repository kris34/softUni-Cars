const accessoryController = require('./controllers/accessory');
const authController = require('./controllers/auth');
const catalogController = require('./controllers/catalog');
const createController = require('./controllers/create');
const homeController = require('./controllers/home');

async function start() {
  const express = require('express');
  const cookieParser = require('cookie-parser');
  const hbs = require('express-handlebars').create({
    extname: '.hbs',
  });
  const mongoose = require('mongoose');
  const connStr =
    process.env.DATABASE_CONNECTION_STRING ||
    'mongodb://localhost:27017/CarDatabase';

  const port = 5555;

  const app = express();
  app.engine('.hbs', hbs.engine);
  app.set('view engine', '.hbs');
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  await mongoose.connect(connStr, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  app.use(homeController);
  app.use('/catalog', catalogController);
  app.use('/create', createController);
  app.use('/accessory', accessoryController);
  app.use('/auth', authController);

  app.listen(port, () => console.log(`App listening on port ${port}`));
}

module.exports = start;

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const indexRouter = require('./src/routes/auth.routes.js');
const quotesRouter = require('./src/routes/quotes.routes.js');
const articleRouter = require('./src/routes/article.routes.js');
const userRouter = require('./src/routes/user.routes.js');
const meditationRouter = require('./src/routes/meditation.routes.js');
const favoriteRouter = require('./src/routes/favorite.routes.js');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/images')));


const port = process.env.PORT || 8080;
const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

app.use('/auth', indexRouter);
app.use('/user', userRouter);
app.use('/v1', quotesRouter);
app.use('/v2', articleRouter);
app.use('/v3', meditationRouter);
app.use('/v4', favoriteRouter);


app.listen(port, hostname, async (error) => {
  if (error) {
    console.log(`Error: ${error.message}`);

    return;
  }

  console.log(`Listening on ${hostname}:${port}`);
});
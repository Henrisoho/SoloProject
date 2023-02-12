const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const unusedWordsRouter = require('./routes/unusedwords.router');
const translateRouter = require('./routes/translate.router');
const completeRouter = require('./routes/complete.router');
const languagesRouter = require('./routes/languages.router');
const chosenLangRouter = require('./routes/chosenlang.router');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/unusedwords', unusedWordsRouter);
app.use('/api/translate', translateRouter);
app.use('/api/complete', completeRouter);
app.use('/api/languages', languagesRouter)
app.use('/api/chosenlang', chosenLangRouter)
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5002;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

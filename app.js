const express = require('express');
const mongoose = require('mongoose');
const app = express();

const gameRouter = require('./routes/game')
const botRouter = require('./routes/bot')

mongoose.connect('mongodb+srv://admin_test:this_is_a_password@cluster0.o80rcf6.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/game', gameRouter);
app.use('/api/bot', botRouter);

module.exports = app;
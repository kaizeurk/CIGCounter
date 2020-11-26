
/**
 * Module dependencies.
 */
const express = require("express");
const bodyParser = require('body-parser'); 
const app = express();
const mongoose = require('mongoose');
const counterRoutes = require('./routes/routecounters');

mongoose.connect('mongodb+srv://admin:admin@clustercounter.xejfi.mongodb.net/countersdb?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
 
  app.use(bodyParser.json());

  app.use('/api/counters', counterRoutes);


  module.exports = app;
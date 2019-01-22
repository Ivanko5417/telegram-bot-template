const config = require('config');
const mongoose = require('mongoose');

mongoose.connect(config.mongo.connection, { useNewUrlParser: true });

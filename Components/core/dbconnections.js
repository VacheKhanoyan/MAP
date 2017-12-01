const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.createConnection('localhost:27017/places');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let placesSchema = Schema({
    name: String,
    latitude: Number,
    longitude: Number

});

module.exports = mongoose.model('places', placesSchema);

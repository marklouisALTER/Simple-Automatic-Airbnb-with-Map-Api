const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    name: String,
    latitude: String,
    longitude: String,
    image: String,
    price: String, 
    description: String,
    location: String,
    reviews: String
})

module.exports = mongoose.model('Listing', listingSchema);
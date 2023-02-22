const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const Listing = require('../models/listing');
const { map } = require('./cities');

mongoose.connect('mongodb://localhost:27017/listing');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error..."));
db.once("open", () => {
    console.log("Database connected...");
})

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Listing.deleteMany({});
    for(let i = 0; i <= 50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() *10000) +10;
        const list = new Listing({
            location: `${cities[random1000].city}, ${cities[random1000].admin_name}`,
            latitude:`${cities[random1000].lat}`,
            longitude:`${cities[random1000].lng}`,
            name: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam magni consectetur voluptate earum eum neque unde voluptas repellat placeat!',
            price: price,
            reviews: `No Reviews`
            
        });
        await list.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
});
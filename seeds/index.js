const mongoose = require('mongoose')
const Campground = require('../models/campground')
const cities = require('./cities')
const {descriptors, places} = require('./seedHelpers')


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
    console.log('Hurray')
}


const sample = array => array[Math.floor(Math.random() *   array.length)]

const seedDB = async () =>{
    await Campground.deleteMany({});
    for(let i = 0; i < 300; i++){
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 30) + 5
        const camp = new Campground({
            author: '64d68becb1a345c7139c1afe',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt consequuntur amet veritatis ab ex maiores illum sunt error nam autem laborum eius fugiat dolorem, aliquam dolorum nostrum ut architecto. Maiores excepturi libero tempore numquam doloribus aut in illo placeat magni.',
            price,
            geometry: { type: 'Point', coordinates: [ cities[random1000].longitude, cities[random1000].latitude ] },
            images: [
                {
                  url: 'https://res.cloudinary.com/diixtsyt8/image/upload/v1692732334/YelpCamp/ohbsjycmp8fu5uixguwp.jpg',
                  filename: 'YelpCamp/ohbsjycmp8fu5uixguwp'
                },
                {
                  url: 'https://res.cloudinary.com/diixtsyt8/image/upload/v1692732336/YelpCamp/svumep1ggdp1gkwmkae0.jpg',
                  filename: 'YelpCamp/svumep1ggdp1gkwmkae0',

                }
            ]
        })
        await camp.save()

    }
    
}

seedDB()
.then(()=>{
    mongoose.connection.close()
})

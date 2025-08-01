const mongoose = require('mongoose')

const connectToDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Mongodb connected successfully');
    } catch (e) {
        console.log('Mongodb connection failed',e)
        process.exit(1)
    }
}

module.exports = connectToDb;
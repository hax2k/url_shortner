const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');

const CS = process.env.MONGO_URL;

async function mongoConnect() {
    await mongoose.connect(CS, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database Connection is ready...");
    }).catch((err) => {
        console.log(err);
    });
}


module.exports = { mongoConnect };
const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DBURI);
        console.log('db Connect');
    } catch (error) {
        console.log('db Not Connect', error);
    }
}

dbConnection();

module.exports = dbConnection;
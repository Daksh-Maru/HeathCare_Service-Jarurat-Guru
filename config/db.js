const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI).then(() => {
            console.log("Database connected");
        }).catch((err) => {
            console.log(err);
        });
        // console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(`Error : ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;

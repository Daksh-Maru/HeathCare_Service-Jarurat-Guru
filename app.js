require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();

app.use(express.json());

connectDB();

app.use("/", serviceRoutes);

app.get("/", (req, res) => {
    res.send("API is running....");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "Something Went Wrong" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

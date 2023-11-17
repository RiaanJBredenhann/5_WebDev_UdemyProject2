const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// connecting to database
mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB is Connected"))
.catch((err) => console.log(err));


app.use(express.json());

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log("Server is running"));
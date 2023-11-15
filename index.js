const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log("Server is running"));
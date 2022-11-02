require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const routing = require('./routing/index');
const errorMiddleware = require("./middlewares/error.middleware");
const {port, frontUrl} = process.env || 5000;

app.use(express.json());
app.use(cors({ origin: frontUrl }));

app.use('/api', routing);

app.use(errorMiddleware);

app.listen(port, () => console.log(`App running on port ${port}`));

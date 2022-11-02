require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const routing = require('./routing/index');
const errorMiddleware = require("./middlewares/error.middleware");
const {port } = process.env || 5000;
const {frontUrl} = process.env
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use('/api', routing);


app.use(errorMiddleware);


app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));
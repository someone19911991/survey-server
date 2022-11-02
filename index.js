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
//
app.use('/api', routing);
// app.get('/', (req, res) => {
//     res.send('Hi everyone');
// });
//
app.use(errorMiddleware);
//
// app.listen(port, () => console.log(`App running on port ${port}`));

// const express = require('express');
// const app = express();
// const port = 3000;

app.get('/', (req, res) => res.send('Hello World man!'));

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));
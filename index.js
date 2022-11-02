require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const routing = require('./routing/index');
const errorMiddleware = require("./middlewares/error.middleware");
const {port } = process.env || 5000;
const {frontUrl} = process.env
// app.use(express.json());
// app.use(cors({ origin: "*" }));

// app.use('/api', routing);
app.get('/', (req, res) => {
    res.send('Hi everyone');
});

app.use(errorMiddleware);

app.listen(port, () => console.log(`App running on port ${port}`));

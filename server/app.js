const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const dotenv = require('dotenv')
const routes = require('./routes')

//middleware
app.use(express.json())
app.use(cors());
dotenv.config();
app.use(express.urlencoded({ extended: true }))
app.use(routes)

//routes
app.listen(port, () => { console.log(`Example app listening on port ${port}`) })
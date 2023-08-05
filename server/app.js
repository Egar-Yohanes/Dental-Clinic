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

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001'); // Replace with your frontend URL
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

//routes
app.listen(port, () => { console.log(`Example app listening on port ${port}`) })
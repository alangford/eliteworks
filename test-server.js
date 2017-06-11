'use strict'
const express = require(`express`),
    app = express();

app.use(express.static('build'));

app.listen(3046, ()=>console.log('listening on port 3046'));
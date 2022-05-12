const express = require('express');
const path = require('path');
const ejs = require('ejs');
const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, './templates/views'));

const home = require('./routes/home');

app.use('',home);

app.listen(PORT,()=>{
    console.log('listening on port '+PORT);
})
const path = require('path');
const express = require('express');
const ejs = require('express-ejs-layouts');

const reqRoute = name => require(path.resolve('backend/routes', name));

const PORT = process.env.port || 3000;

const app = express();

app.set('view',path.resolve('frontend/views'));
app.set('layout', 'layouts');

app.set('view engine', 'ejs');
app.use(ejs);

app.get('/',(req,res) => res.render('landing', {judul:'Selamat Datang'}));
app.use('/api', reqRoute('Api'));

app.listen(PORT, () => console.log(`Listening On Port ${PORT}`));
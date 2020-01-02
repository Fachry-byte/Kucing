const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const ejs = require('express-ejs-layouts');

const reqRoute = name => require(path.resolve('backend/routes', name));

const PORT = process.env.port || 3000;

const app = express();
app.use(favicon(path.resolve('frontend/image','favicon.ico')));

app.use('/js', express.static(path.resolve('frontend/js')));
app.use('/css', express.static(path.resolve('frontend/css')));
app.use('/img', express.static(path.resolve('frontend/image')))

app.set('view engine', 'ejs');
app.use(ejs);

app.set('views', path.resolve('frontend/views'));
app.set('layout', 'layouts');

app.get('/',(req,res) => res.render('landing', {judul:'CRUD App'}));
app.use('/api', reqRoute('Api'));

app.listen(PORT, () => console.log(`Listening On Port ${PORT}`));
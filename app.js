const express = require('express')
require('dotenv').config()

const app = express()
const hbs = require('hbs');


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
// Servir contenido estatico;
app.use( express.static('templated-roadtrip/roadtrip'))

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Bastian Rozas',
        titulo: 'Curso de node'
    });
})

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Bastian Rozas',
        titulo: 'Curso de node'
    });
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Bastian Rozas',
        titulo: 'Curso de node'
    });
})

app.listen(process.env.PORT);
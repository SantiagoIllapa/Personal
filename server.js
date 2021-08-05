const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express hbs view enginegg
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(function(req, res, next) {
if ((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
res.redirect(307, 'https://' + req.get('Host') + req.url);
} else
next();
});
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'cArLoS bRaVO'
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
});

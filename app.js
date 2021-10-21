require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estático
// El 'public' es la carpeta donde se sirve
// el contenido en la raiz de la aplicación
// Entonces cuando invoque a '/' voy a estar invocando al index.html
// de la carpeta 'public
app.use( express.static('public') );

app.get('/', function (req, res) {
  // Este render esta levantando el archivo /views/home.hbs
  res.render('home', {
    titulo: 'Webserver con express',
    autor: 'Felipao',
  });
});

app.get('/generic', function (req, res) {
  // Este render esta levantando el archivo /views/generic.hbs
  res.render('generic', {
    titulo: 'Webserver con express',
    autor: 'Felipao',
  });
});

app.get('/elements', function (req, res) {
  // Este render esta levantando el archivo /views/elements.hbs
  res.render('elements', {
    titulo: 'Webserver con express',
    autor: 'Felipao',
  });
});

app.get('*', function (req, res) {
  // Este render esta levantando el archivo /views/error_404.hbs
  res.render('error_404', {
    titulo: 'Webserver con express',
    autor: 'Felipao',
  });
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


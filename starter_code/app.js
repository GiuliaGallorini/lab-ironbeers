
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

// Define the view engine: HBS
app.set('view engine', 'hbs');

// Define the views folder
app.set('views', __dirname + '/views');

// Everything inside `/public` is accessible
app.use(express.static(path.join(__dirname, 'public')));


// Route "/" (http:/localhost:3000)
app.get('/', (req, res, next) => {
    // Render the view "/view/index.hbs"
  res.render('index');
});

// Route "/beers" (http:/localhost:3000/beers)
app.get('/beers', (req, res, next) => {
    // Render the view "/view/beers.hbs"
  res.render('beers');
});

// Route "/random-beer" (http:/localhost:3000/random-beer)
app.get('/random-beer', (req, res, next) => {
    // Render the view "/view/random-beer.hbs"
  res.render('random-beer');
});


app.listen(3000, () => {
  console.log("App running on http://localhost:3000");
});

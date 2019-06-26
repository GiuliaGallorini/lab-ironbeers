
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
  punkAPI
  .getBeers()
  .then(beers => {
    // Render the view "/view/beers.hbs"
      res.render('beers', {
        beers: beers
      });
  })
  .catch(error => {
    console.log(error);
    res.render('error')
  });
});

// Route "/random-beer" (http:/localhost:3000/random-beer)
app.get('/random-beer', (req, res, next) => {
  punkAPI
    .getRandom()
    .then(beersFromApi => {
      // beersFromApi is an array with 1 element (I know it is weird)
      // Render the view "/view/random-beer.hbs"
      res.render("random-beer", {
        beer: beersFromApi[0]
      });
    })
    .catch(error => {
      console.log(error);
      res.render('error')
    });
});


app.listen(3000, () => {
  console.log("App running on http://localhost:3000");
});

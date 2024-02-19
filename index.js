const express = require('express'),
  morgan = require('morgan'),
  fs = require('fs'),
  path=require('path'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override');

const app = express();
app.use(morgan('common'));
// create a write stream (in append mode)
// a ‘log.txt’ file is created in root directory
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}));

app.use(bodyParser.urlencoded({
    extended: true
  }));
  
  app.use(bodyParser.json());
  app.use(methodOverride());

  let myTopTen = 'public/myTopTen.json'


  app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
  });
  app.get('/movies', (req, res) => {
    res.json(myTopTen);
  });
  app.get('/index', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
  });
  app.get('/', (req, res) => {
    res.send('Welcome to myFlix!');
  });
  
//   Error handler
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });


//   CREDITS
//   "Top 100 IMDB Movies" (imdb_data_100.json) by Helena Oliveira, Observable License: [License Type]. Available at: [https://observablehq.com/@btwhelena/top-100-imdb-movies]
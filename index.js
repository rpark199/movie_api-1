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

app.get('/', (req, res) => {
    res.send('Welcome to my app!');
  });
  
  app.get('/secreturl', (req, res) => {
    res.send('This is a secret url with super top-secret content.');
  });
  
//   Error handler
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });
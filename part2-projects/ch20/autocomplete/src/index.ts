import express, { RequestHandler } from 'express';
import { MongoClient } from 'mongodb';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

import bodyParser from 'body-parser';
import compression from 'compression';
import errorhandler from 'errorhandler';
// import hbs from 'hbs';
import logger from 'morgan';
import { body, validationResult } from 'express-validator';

import Autocomplete from './autocomplete';

const PORT = 3000;
const URL = 'mongodb://192.168.99.100:27017/autocomplete';
const app = express();

MongoClient.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
  if (err) {
    console.error('Unable to connect to DB server', err);
    process.exit(1);
  }
  const db = client.db('autocomplete');

  app.set('view engine', 'hbs');

  app.use(compression());
  app.use(logger('dev'));
  app.use(errorhandler());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(express.static('public'));
  
  app.use((req, _, next) => {
    req.rooms = db.collection('rooms');
    next();
  });

  const getRooms: RequestHandler = (req, res, next) => {
    req.rooms
      .find({}, {sort: {_id: -1}})
      .toArray((err, docs) => {
        if (err) return next(err);
        else return res.json(docs);
      });
  };

  const postRooms: RequestHandler = (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(errors);
    }
    req.rooms.insertOne(req.body, (err, result) => {
      if (err) return next(err);
      else return res.json(result.ops[0]);
    });
  };
  
  app.route('/rooms')
    .get(getRooms)
    .post(body('name', 'Invalid name in body').not().isEmpty())
    .post(postRooms);
  
  app.get('/', (req, res, next) => {
    let url = `http://localhost:${PORT}/rooms`;
    req.rooms
      .find({}, {sort: {_id: -1}})
      .toArray((err, rooms) => {
        if (err) return next(err);
        res.render('index', {
          autocomplete: renderToString(createElement(
            Autocomplete, { options: rooms, url }
          )),
          data: `<script>var __autocomplete_data = { rooms: ${JSON.stringify(rooms, null, 2)}, url: "${url}" }</script>`
        });
      });
  });

  app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
  });

});

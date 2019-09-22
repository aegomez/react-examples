import express, { RequestHandler } from 'express';
import { MongoClient } from 'mongodb';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

import bodyParser from 'body-parser';
import compression from 'compression';
import errorhandler from 'errorhandler';
import { body, validationResult } from 'express-validator';
import logger from 'morgan';

import Header from './components/header';
import Footer from './components/footer';
import MessageBoard from './components/board';

const app = express();
const PORT = 3000;
const URL = 'mongodb://192.168.99.100:27017/Board';

MongoClient.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const db = client.db('MessageBoard');
  
  app.set('view engine', 'hbs');
  
  app.use(compression());
  app.use(logger('dev'));
  app.use(errorhandler());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  // app.use(express.json());
  app.use(express.static('public'));
  
  app.use((req, _, next) => {
    req.messages = db.collection('messages')
    next();
  });

  const getMessages: RequestHandler = (req, res, next) => {
    req.messages.find({}, {sort: {_id: -1}}).toArray((err, docs) => {
      if (err) return next(err);
      else return res.json(docs);
    });
  };

  const postMessages: RequestHandler = (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(errors);
    }
    let newMessage = {
      message: req.body.message,
      name: req.body.name
    };
    req.messages.insertOne(newMessage, (err, result) => {
      if (err) return next(err);
      else return res.json(result.ops[0]);
    });
  };
  
  app.route('/messages')
    .get(getMessages)
    .post(body('message').not().isEmpty())
    .post(body('name').not().isEmpty())
    .post(postMessages);
 
  app.get('/', (req, res, next) => {
    req.messages.find({}, {sort: {_id: -1}}).toArray((err, docs) => {
      if (err) return next(err);
      console.log(docs);
      res.render('index', {
        header: renderToString(createElement(Header)),
        footer: renderToString(createElement(Footer)),
        messageBoard: renderToString(createElement(MessageBoard)),
        props: '<script type="text/javascript">var messages='
          + JSON.stringify(docs) + '</script>'
      });
    });
  });
  
  app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
  });

});
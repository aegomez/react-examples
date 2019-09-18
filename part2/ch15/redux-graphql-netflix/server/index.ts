import path from 'path';
import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const {
  PORT = 9000,
  PWD = __dirname
} = process.env;
const app = express();

app.use('/q', graphqlHTTP({
  schema,
  graphiql: true
}));

app.use('*/dist',
  express.static(path.resolve(PWD, 'build', 'public'))
);

app.use('/*', ( _, res) => {
  res.sendFile(path.join(__dirname, 'index.html'),
  {
    root: PWD
  },
  err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});
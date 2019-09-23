const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const rooms = JSON.parse(fs.readFileSync(
  path.join(__dirname, 'rooms.json'), 'utf-8')
);
const url = 'mongodb://192.168.99.100:27017/autocomplete';

MongoClient.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
  if (err) {
    console.error('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('autocomplete');
  db.collection('rooms').insertMany(rooms, err => {
    if (err) {
      console.log('Unable to insert seed data.');
    }
    else
      console.log('Seed data succesfully initiated.');
  });
  client.close();
});

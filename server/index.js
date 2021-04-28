// require express server, mongodb, assert and port
const app = require('./server');
const db = require('./db');
const assert = require('assert');
const PORT = app.get('port');

// response with the main page
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// Add data from join-us form to mongodb and redirect to Homepage when called the endpoint '/insert'
app.post('/insert', (req, res) => {
  let item = {
    name: req.body.name,
    surname: req.body.surname,
    mission: req.body.missions,
    age: req.body.age,
    gender: req.body.gender,
    eye_color: req.body.eyeColor,
    email: req.body.email,
    psw: req.body.password,
    address: req.body.address,
    phone: req.body.phone,
    weight: req.body.weight,
    biography: req.body.bio,
  };
  db.connect((err, data) => {
    assert.strictEqual(null, err);
    data
      .db('Icarus')
      .collection('join-us')
      .insertOne(item, (error) => {
        assert.strictEqual(null, error);
        console.log('Item inserted correctly!');
        data.close();
      });
  });
  res.redirect('/');
});

// Retrieve data from MongoDB and send it to the view page when called the endpoint '/getData'.
app.get('/getData', (req, res) => {
  let result = [];
  db.connect((err, data) => {
    assert.strictEqual(null, err);
    let findData = data.db('Icarus').collection('join-us').find({});
    findData.forEach(
      (doc, error) => {
        assert.equal(null, error);
        result.push(doc);
      },
      () => {
        res.render('candidates', { candidates: result });
      }
    );
  });
});

// Open the port
app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}\nhttp://localhost:8000`);
});

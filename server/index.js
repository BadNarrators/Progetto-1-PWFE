// require express server, mongodb, assert and port
const app = require('./server');
const db = require('./db');
const assert = require('assert');
const PORT = app.get('port');

// main page
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// add data from join-us form to mongodb
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
  // console.log(item);
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

app.get('/getData', (req, res) => {
  let result = [];
  db.connect((err, data) => {
    assert.strictEqual(null, err);
    let findData = data.db('Icarus').collection('join-us').find({});
    findData.forEach(
      (doc, error) => {
        assert.equal(null, error);
        result.push(doc);
        //console.log(doc);
      },
      () => {
        data.close();
        res.render('candidates', { items: result });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}\nhttp://localhost:8000`);
});

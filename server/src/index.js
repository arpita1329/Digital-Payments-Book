const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
mongoose.set('strictQuery', false);

try {
  mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`Mongodb connected successfully`);
} catch (e) {
  console.log('Mongodb connection failed.', e);
}

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  utype: String,
});

const UserModel = mongoose.model('user', UserSchema);

app.post('/login', (req, res) => {
  let { email } = req.body;
  const { password } = req.body;
  email = email.toLowerCase();
  UserModel.findOne({ email }, (err, id) => {
    if (id) {
      if (bcrypt.compareSync(password, id.password)) {
        res.send({ message: { message: 'Login Success', token: { email: id.email, name: id.name, utype: id.utype } } });
      } else {
        res.send({ message: 'Incorrect Password' });
      }
    } else {
      res.send({ message: 'User is not registered' });
    }
  });
});

app.post('/register', (req, res) => {
  let { email } = req.body;
  const { password, name, utype } = req.body;
  email = email.toLowerCase();
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  UserModel.create(
    {
      email,
      password: hash,
      name,
      utype,
    },
    (err, user) => {
      if (user) {
        res.send({ message: 'Registration Successful' });
      } else {
        res.send({ message: 'User already registered' });
      }
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log('Server Started');
});

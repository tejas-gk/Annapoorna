// app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://nishanth:nishanth2003@cluster0.fbotoww.mongodb.net/Hunger', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const hungerSchema = new mongoose.Schema({
  Town: String,
  Need: String,
  Place: String,
});

const Hunger = mongoose.model('Hunger', hungerSchema);

app.get('/HS', (req, res) => {
  Hunger.find({}, (err, foundItems) => {
    if (!err) {
      res.send(foundItems);
    } else {
      console.log(err);
    }
  });
});

app.post('/insert', (req, res) => {
  const town = req.body.data.Town;
  const need = req.body.data.Need;
  const place = req.body.data.Place;
  const newItem = new Hunger({
    Town: town,
    Need: need,
    Place: place,
  });

  newItem.save((err) => {
    if (!err) {
      res.send('Successfully added a new item.');
      console.log("Successfully added a new item.")
    } else {
      console.log(err);
    }
  });
});

app.delete('/HS/:id', (req, res) => {
  const id = req.params.id;

  Hunger.findByIdAndRemove(id, (err) => {
    if (!err) {
      console.log('Successfully deleted item.');
    } else {
      console.log(err);
    }
  });
});

app.put("/HS/:id", (req, res) => {
  const { Town, Need, Place } = req.body.data;
  const id = req.params.id;

  Hunger.findByIdAndUpdate(
    id,
    { Town, Need, Place},
    { new: true },
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log('HS data updated successfully!');
        res.status(200).send("HS data updated successfully!");
      }
    }
  );
});

const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
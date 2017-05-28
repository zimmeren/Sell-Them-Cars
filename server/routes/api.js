const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

const vehicleSchema = new Schema({
    name: String,
    price: Number,
    drive: String,
    miles: Number,
    engine: String,
    transmission: String,
    color: String,
    pictures: Object,
    featured: Number
});

//model name will be appeded with a "s" and that will be the collection it checks
const vehicleData = mongoose.model('vehicle', vehicleSchema);

// Get all car inventory
router.get('/inventory', (req, res) => {
  vehicleData.find(function(err,vehicles){
    if (err){
      res.status(500).send(err)
    } else {
      res.status(200).json(vehicles);
    }
  });
});

module.exports = router;
const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

const tempResponse = [
  {
    id: "12343215432543",
    name: "Jeep Liberty",
    price: 14000,
    drive: "AWD",
    miles: 40000,
    engine: "V6 2.3L",
    transmission: "5 speed Automatic",
    color: "white",
    pictures: [
      "assets/images/cars/jeep1234231.jpeg"
    ],
    featured: 1
  },
  {
    id: "12343215432544",
    name: "Audi A6",
    price: 38900,
    drive: "AWD",
    miles: 13000,
    engine: "V8 2.6L",
    transmission: "5 speed Manual",
    color: "black",
    pictures: [
      "assets/images/cars/audi435662.jpg"
    ],
    featured: 2
  },
  {
    id: "12343215432545",
    name: "Bike",
    price: 5000,
    drive: "rear wheel",
    miles: 4000,
    engine: "V2 1.3L",
    transmission: "clutch",
    color: "black",
    pictures: [
      "assets/images/cars/bike23452.jpeg"
    ],
    featured: 3
  },
  {
    id: "12343215432546",
    name: "Mercedes 12000",
    price: 50000,
    drive: "AWD",
    miles: 40000,
    engine: "V6 2.5L",
    transmission: "5 speed Automatic",
    color: "grey",
    pictures: [
      "assets/images/cars/merc34523.jpeg"
    ],
    featured: 4
  },
  {
    id: "12343215432547",
    name: "Corvette",
    price: 40000,
    drive: "rear wheel",
    miles: 4000,
    engine: "V5 2.8L",
    transmission: "6 speed Manual",
    color: "grey",
    pictures: [
      "assets/images/cars/vette45432.jpg"
    ],
    featured: 5
  }
]

// Get all car inventory
router.get('/inventory', (req, res) => {
    console.log("get request made to api inventory");
    res.status(200).json(tempResponse);
});

module.exports = router;
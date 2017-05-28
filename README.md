# Sell Them Cars

A single page car sales customizable website built on a Angular2 w/ TypeScript frontend, NodeJS Express backend, and a MongoDB database accessed with Mongoose. Built with a responsive design to allow both mobile and desktop viewing using flexbox.

Site can be personalized by modifying strings in the "configuration.service.ts" file. 

VERSION 1.0.0

# Setup 

Required 3rd party:
Node.js for NPM use - https://nodejs.org/en/

1st time setup Instructions:
clone front end project files from github
run "npm install -g @angular/cli" on command line to install angular-cli
in project folder run "npm install" to install all npm dependencies

Setup mongoDB:
setup mongoDB following instructions here: https://docs.mongodb.com/manual/administration/install-community/
Use defaults
be sure to add bin to your path variable
After setup start mongoDB with "mongod"
Then connect to the shell with "mongo"
Create new DB with "use sellthemcars"
Create new collection with "db.createCollection("vehicles");"
Then insert your data.
For example run the following to setup to match the prepopulated assets
db.vehicles.insert([
{
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
]);



Run Instructions:
from anywhere start mongoDB with "mongod"
in project folder run "ng serve" on command line to build the frontend and deploy to dist folder
in project folder run "node server.js" to start the node.js express server
in Browser open "http://localhost:3000/"

Adding Assets:
pictures can be added to src/assets/images
pictures then need to be referenced from "configuration.service.ts" file 
or
add car pictures to src/assets/images/cars
pictures in here need to be reference in database "pictures" array. First image in array will be shown as main image. 

Modifying Database:
connect to database with "mongo" to enter the shell
then use mongo commands to modify as needed. 

# TODO
Vehicle Page - a single page for each vehicle with more information
Image Viewer - scalable image viewer that can be used on both homepage for featured cars and in vehicle inventory to view more pictures
Routes - add angular routes ability so users can load pages via URLs instead of always landing on homepage
PDF - on its vehicle page have a button that allows them to download a PDF document with the details of their vehicle
ADMIN Database and files - create database administration page with password security for opening and every modification
Token security - extend security of admin page to be able to be token based so password does not need to be input everytime
Caching - caching for offline viewing
SEO - search engine optimization
Contact Us Form - on page email contact form
User Analytics - track users on site to gain insights on products and customers
UI Enhancements - picture for nav header, tabs highlight on hover, tabs colored when selected, adjust responsive sizing, etc. 
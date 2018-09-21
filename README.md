# Sell Them Cars

A single page car sales customizable website built on a Angular w/ TypeScript frontend, NodeJS Express backend, Dynano database, and ready for deployment to AWS.  
Built with a responsive design to allow both mobile and desktop viewing using flexbox.

Site can be personalized by modifying strings in the "configuration.service.ts" file. 

VERSION 2.0.0

Angular 6.2.3

# Setup 

Required 3rd party:
Node.js for NPM use - https://nodejs.org/en/

1st time setup Instructions:
clone project files from github
run "npm install -g @angular/cli" on command line to install angular-cli
in project folder run "npm install" to install all npm dependencies

Run Instructions:
in project folder run "ng serve" on command line to build the frontend and deploy to dist folder
in project folder run "node server.js" to start the node.js express server
in Browser open "http://localhost:3000/"

Adding Assets:
pictures can be added to src/assets/images
pictures then need to be referenced from "configuration.service.ts" file 
or
add car pictures to src/assets/images/cars
pictures in here need to be reference in database "pictures" array. First image in array will be shown as main image. 

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
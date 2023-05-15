//set up the server
const express = require( "express" );
const logger = require("morgan");
const app = express();
const port = 3000;

// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
});

// define middleware that logs all incoming requests
app.use(logger("dev"));

// define middleware that serves static resources in the public directory
app.use(express.static(__dirname + '/public'));

// define a route for the default home page
app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/views/index.html" );
});

// define a route for the visualizer list page
app.get( "/visualizer", ( req, res ) => {
    res.sendFile( __dirname + "/views/visualizer.html" );
});

// define a route for the visualizer detail page
app.get( "/visualizer/detail", ( req, res ) => {
    res.sendFile( __dirname + "/views/detail.html" );
});
// 'use strict';
// //We require the http module, which is included as part of Node's standard library.
// var http = require('http');
// //We decide on a port to attach our server to. We're using process.env.PORT. process.env is an object that can read from all of the environment variables in our shell.
// var port = process.env.PORT || 8000;

// //We're creating an instance of a server, using the createServer method of http. This makes a new instance of the class Server. We're passing in a function that will get called later.
// var server = http.createServer(function(req, res) {
//   var guests = ['Mary', 'Don'];
//   var guestsJSON = JSON.stringify(guests);

//   //Using the setHeader method adds a key (the name of the header) and value to the response we'll be sending out.
//   res.setHeader('Content-Type', 'application/json');
//   //The end method is our server's way of saying "ship it!" - it sends the response, and tells the client "there won't be more stuff coming after this".
//   res.end(guestsJSON);
// });

// //We're telling our server to listen for any incoming HTTP Requests on the port we configured earlier.
// server.listen(port, function() {
//   console.log('Listening on port', port);
// });

// //Anytime the server gets a request on that port, the function we defined on line 4 will run. 
// //Once the server attaches successfully to the port, it will run the callback function, 
// //letting you know the server has been set up properly. 
// //The server can fail to attach to the port if the port is already in use. 
// //Similar to how you can't dock two boats in the same port, 
// //you can't attach two servers to the same port!


//EXAMPLE 2
// 'use strict';

// var http = require('http');
// var port = process.env.PORT || 8000;

// var server = http.createServer(function(req, res) {
//   if (req.method === 'GET' && req.url === '/guests') {
//     var guests = ['Mary', 'Don'];
//     var guestsJSON = JSON.stringify(guests);

//     res.setHeader('Content-Type', 'application/json');
//     res.end(guestsJSON);
//   }
//   else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Not found');
//   }
// });

// server.listen(port, function() {
//   console.log('Listening on port', port);
// });

//GUEST LIST NO LONGER HARD-CODED - SEND'S THE GUEST LIST THAT'S READ FROM THE JSON-FORMATTED guests.json file
// 'use strict';

// var fs = require('fs');
// var path = require('path');
// var guestsPath = path.join(__dirname, 'guests.json');

// var http = require('http');
// var port = process.env.PORT || 8000;

// var server = http.createServer(function(req, res) {
//   if (req.method === 'GET' && req.url === '/guests') {
//     fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
//       if (err) {
//         console.error(err.stack);
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'text/plain');
//         return res.end('Internal Server Error');
//       }

//       res.setHeader('Content-Type', 'application/json');
//       res.end(guestsJSON);
//     });
//   }
//   else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Not found');
//   }
// });

// server.listen(port, function() {
//   console.log('Listening on port', port);
// });


//CAN SEND BACK INDIVIDUAL PIECES OF DATA FROM THE DATABASE
// 'use strict';

// var fs = require('fs');
// var path = require('path');
// var guestsPath = path.join(__dirname, 'guests.json');

// var http = require('http');
// var port = process.env.PORT || 8000;

// var server = http.createServer(function(req, res) {
//   if (req.method === 'GET' && req.url === '/guests') {
//     fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
//       if (err) {
//         console.error(err.stack);
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'text/plain');
//         return res.end('Internal Server Error');
//       }

//       res.setHeader('Content-Type', 'application/json');
//       res.end(guestsJSON);
//     });
//   }
//   else if (req.method === 'GET' && req.url === '/guests/0') {
//     fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
//       if (err) {
//         console.error(err.stack);
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'text/plain');
//         return res.end('Internal Server Error');
//       }

//       var guests = JSON.parse(guestsJSON);
//       var guestJSON = JSON.stringify(guests[0]);

//       res.setHeader('Content-Type', 'application/json');
//       res.end(guestJSON);
//     });
//   }
//   else if (req.method === 'GET' && req.url === '/guests/1') {
//     fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
//       if (err) {
//         console.error(err.stack);
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'text/plain');
//         return res.end('Internal Server Error');
//       }

//       var guests = JSON.parse(guestsJSON);
//       var guestJSON = JSON.stringify(guests[1]);

//       res.setHeader('Content-Type', 'application/json');
//       res.end(guestJSON);
//     });
//   }
//   else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Not found');
//   }
// });

// server.listen(port, function() {
//   console.log('Listening on port', port);
// });

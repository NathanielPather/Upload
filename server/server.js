// Require includes a module.
// A module is like a javascript library, it contains a set of functions I want to use in an applicaiton.
const express = require('express')

// server is a method, which is the express function attached to the server object.
// The express function allows usage of the express libraries exports.
/* Alternative explanation
** server is an express application that inherits the express modules methods for http requests, etc.
*/
const server = express()

// cross origin resource sharing library.
const cors = require('cors')

// The folder (upload) acts as a module.
// A folder can be used as a module if it contains either a: package.json, index.js, or a index.node.
const upload = require('./upload')

var corsOptions = {
	// Allow any domain.
	origin: '*',
	
	/* 200 HTTP response code that implies the response from the server contains a payload that represents
	** the status of the requested resources.
	**
	*/
	optionsSuccessStatus: 200,
}

// Allow server to use cors with the specified configuration.
server.use(cors(corsOptions))

/* Route for file upload.
** post(path, callback).
** path is the path that the function is called from.
** The actual function, which is the module specified in the constant on line 17.
*/
server.post('/upload', upload)

// Creates a listener on the specified port.
// Callback function to execute, simply logs "server started!".
server.listen(8000, () => {
	console.log('Server started!')
})
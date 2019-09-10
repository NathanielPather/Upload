// Formidable module is for parsing form data, including file uploads.
// Includes the class Incoming form from the formidable module.
const IncomingForm = require('formidable').IncomingForm

/* module.exports is included in every js file.
 * module is the variable for the current module.
 * exports is an object that will be exposed as a module.
 * the function upload will be the module.
 */
// upload() has a request opbject, and response object.
module.exports = function upload(req, res) {
    var form = new IncomingForm()
    // form.on means form event, specifically when a file has been received.
    // requies a file, and form field, possible name?
    form.on('file', (field, file) => {
        // Do something with the file.
    })

    // Called when entire request has been received,
    // and all contained files have finished flushing to disk.
    // Good place to send the response.
    form.on('end', () => {
        // response as a json object, allowing formatting.
        // calls res.send() silently, which sends the response.
        res.json()
    })
    // Parsing is breaking dating into smaller elements.
    // In this case, the request for the file upload is constructed.
	form.parse(req)
}
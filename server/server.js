const express = require('express')
const server = express()
const cors = require('cors')

server.listen(8000, () => {
	console.log('Server started!')
})
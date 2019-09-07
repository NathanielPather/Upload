const express = require('express')
const server = express()
const cors = require('cors')

var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))

server.listen(8000, () => {
	console.log('Server started!')
})
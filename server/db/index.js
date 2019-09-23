const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let MONGO_URL
const MONGO_LOCAL_URL = 'mongodb://localhost/barterbud'

if (process.env.MONGODB_URI) {
	mongoose.set('useCreateIndex', true),
	// mongoose.set('useFindAndModify', false),
	mongoose.connect(process.env.MONGODB_URI,{useUnifiedTopology: true, useNewUrlParser: true })	
	MONGO_URL = process.env.MONGODB_URI
} else {
	mongoose.set('useCreateIndex', true)
	mongoose.connect(MONGO_LOCAL_URL,{useUnifiedTopology: true, useNewUrlParser: true }) // local mongo url
	MONGO_URL = MONGO_LOCAL_URL
}

// should mongoose.connection be put in the call back of mongoose.connect???
const db = mongoose.connection
db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database: ${MONGO_URL}`
	)
})

module.exports = db
const User = require('../db/models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		// console.log(username);
		User.findOne({ 'local.username': username }, (err, userMatch) => {
			if (err) {
				return done(err)
			}
			if (!userMatch) {
				return done(null, false, { message: 'Incorrect username' })
			}
			console.log(userMatch.checkPassword(password))
			if (!userMatch.checkPassword(password)) {
				console.log("wrong")
				return done(null, false, { message: 'Incorrect password' })
			} else {
			}
			console.log(userMatch);
			return done(null, userMatch)
		})
	}
)

module.exports = strategy
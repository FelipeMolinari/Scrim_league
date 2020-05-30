const passport = require('passport');

require('./passport')(passport);

module.exports = {
	async facebookAuth(req, res, next) {
		passport.authenticate('facebook', async (err, user) => {
			try {
				if (err || !user) {
					return next(err);
				}
				req.user = user;

				return next();
			} catch (error) {
				return next(error);
			}
		})(req, res, next);
	},

	async localAuth(req, res, next) {
		passport.authenticate('local', async (err, user, info) => {
			try {
				if (err || !user) {
					throw new Error(`An Error occured - ${info.message}`);
				}
				req.user = user;
				return next();
			} catch (error) {
				return next(error);
			}
		})(req, res, next);
	}
};

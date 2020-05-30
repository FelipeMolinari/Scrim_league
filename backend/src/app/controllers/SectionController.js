const passport = require('passport');
const jwt = require('jsonwebtoken');

require('../auth/passport')(passport);

class SectionController {
	async store(req, res, next) {
		const { id, email } = req.user;

		req.login({ id, email }, { session: false }, async (error) => {
			if (error) return next(error);

			const token = jwt.sign({ user_id: id }, process.env.JWT_SECRET, {
				expiresIn: process.env.JWT_EXPIRE_IN
			});

			return res.json({ token });
		});
	}
	catch(error) {
		return next(error);
	}
}

module.exports = new SectionController();

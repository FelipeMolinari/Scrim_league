const { Router } = require('express');
const passport = require('passport');

const UserController = require('./app/Controllers/UserController');
const SectionController = require('./app/Controllers/SectionController');
const PlayerController = require('./app/Controllers/PlayerController');
const accesToSecureRoutes = require('./middlewares/accessToSecureRoutes');
const auth = require('./app/auth/auth');
const routes = new Router();

//Public Routes:

routes.get('/user', UserController.index);
routes.post('/user', UserController.store);

//Facebook create account

routes.get(
	'/user/facebook',
	passport.authenticate('facebook', {
		session: false,
		scope: [ 'email' ]
	})
);

// Sections

routes.get('/user/facebook/callback', auth.facebookAuth, SectionController.store);

routes.post('/login', auth.localAuth, SectionController.store);

//Secure Routes:

routes.use(accesToSecureRoutes);

routes.put('/login/update', UserController.update);

routes.post('/player', PlayerController.store);

module.exports = routes;

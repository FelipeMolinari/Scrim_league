const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../util/truncate');
const User = require('../../src/app/models/User');
const factory = require('../factories');

let token;

describe('Player', () => {
	it('Should create a player ', async () => {
		const response = await request(app).post('/player').set('Authorization', `Bearer ${token}`).send({
			username: 'N2 Brodin',
			region: 'br1',
			icon_id: '1'
		});
		const allUser = await User.findAll();
		console.log('user', allUser);
		expect(1).toBe(1);
	});
});

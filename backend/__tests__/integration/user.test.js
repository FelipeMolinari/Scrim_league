const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../util/truncate');
const bcrypt = require('bcrypt');

const factory = require('../factories');

describe('User', () => {
	beforeEach(async () => {
		await truncate();
	});
	it('Should be able to register a user', async () => {
		const response = await request(app).post('/user').send({
			firstName: 'Felipe',
			lastName: 'Molinari',
			password: '123123',
			email: 'asassaassaaasa@gmail.com'
		});
		expect(response.body).toHaveProperty('id');
	});

	it('Should not be able to register with duplicated email', async () => {
		const user = await factory.attrs('User', { password: '123123123' });

		await request(app).post('/user').send(user);
		const response = await request(app).post('/user').send(user);

		expect(response.status).toBe(400);
	});

	it('Should not be able to register without a email', async () => {
		const user = await factory.attrs('User', { email: null });

		const response = await request(app).post('/user').send({
			user
		});
		expect(response.status).toBe(500);
	});

	it('Should not be able to register without a password', async () => {
		const user = await factory.attrs('User', { password: null });
		const response = await request(app).post('/user').send(user);
		expect(response.status).toBe(400);
	});

	it('Should encrypt user password when new user created', async () => {
		const user = await factory.create('User', {
			password: '123123'
		});
		const compareHash = await bcrypt.compare('123123', user.password_hash);

		expect(compareHash).toBe(true);
	});
});

// SECURES

let token;

describe('Secures Routes', () => {
	beforeAll(async (done) => {
		await request(app).post('/user').send({
			firstName: 'Felipe',
			lastName: 'Molinari',
			password: '123123',
			email: 'jaajasj@gmail.com'
		});
		const response = await request(app).post('/login').send({
			email: 'jaajasj@gmail.com',
			password: '123123'
		});

		token = response.body.token;
		done();
	});

	it('Should require authorization', async () => {
		const response = await request(app).get('/login/update').send({ gender: 'male' });

		expect(response.statusCode).toBe(401);
	});

	it('Should update user if authenticated', async () => {
		const response = await request(app).put('/login/update').set('Authorization', `Bearer ${token}`).send({
			gender: 'male'
		});
		expect(response.body.gender).toBe('male');
	});

	it('Should not be possible change password with wrong oldpassword', async () => {
		const response = await request(app).put('/login/update').set('Authorization', `Bearer ${token}`).send({
			password: '123123123',
			confirmPassword: '123123123',
			oldpassword: 'wrongpassword'
		});
		expect(response.statusCode).toBe(401);
	});

	it('Should return validations fail if something wrong', async () => {
		const response = await request(app).put('/login/update').set('Authorization', `Bearer ${token}`).send({
			password: '123123123',
			oldpassword: 'wrongpassword'
		});
		expect(response.statusCode).toBe(401);
	});

	it('Should create a player ', async () => {
		const response = await request(app).post('/player').set('Authorization', `Bearer ${token}`).send({
			username: 'N2 Brodin',
			region: 'br1',
			icon_id: '1'
		});

		expect(response.body).toHaveProperty('user_id');
	});

	it('Should avoid player creation when icons does not match ', async () => {
		const response = await request(app).post('/player').set('Authorization', `Bearer ${token}`).send({
			username: 'N2 Brodin',
			region: 'br1',
			icon_id: '2'
		});

		expect(response.status).toBe(400);
	});
});

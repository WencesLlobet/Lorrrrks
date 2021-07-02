const { app } = require('./app.js');
const request = require('supertest');



test('get persons', async () => {
	const res = await request(app).get('/');

	expect(res.status).toBe(200);
});
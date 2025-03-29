const request = require('supertest');
const app = require('./index');

test('GET / should return JSON response', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual({ message: 'Hello from Node.js!' });
});

import request from 'supertest';
import server from '../src/server';

describe('GET /', () => {
  test('has http status 200', () => request(server)
    .get('/')
    .expect(200));

  test('responds with "Hello World"', async () => {
    const response = await request(server).get('/');
    expect(response.body.message).toBe('Hello World');
  });
});

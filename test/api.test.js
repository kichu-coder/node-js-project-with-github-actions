import request from "supertest";
import app from '../src/app';

describe('API Endpoints', () => {
  it('should return API status', async () => {
    const res = await request(app)
      .get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });

  it('should return list of users', async () => {
    const res = await request(app)
      .get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
import request from 'supertest';
import app from '../../src/app.js';

describe('POST /auth/register ', () => {
  describe('Happy Path: Given all fields', () => {
    it('should return 201 status code', async () => {
      // AAA
      // Arrange
      const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@test.com',
        password: 'secret',
      };

      // Act
      const res = await request(app).post('/auth/register').send(userData);

      // Assert
      expect(res.statusCode).toBe(201);
    });

    it('should return valid JSON response', async () => {
      // AAA
      // Arrange
      const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@test.com',
        password: 'secret',
      };

      // Act
      const res = await request(app).post('/auth/register').send(userData);

      // Assert
      expect((res.headers as Record<string, string>)['content-type']).toEqual(
        expect.stringContaining('json'),
      );
    });

    it('should persist the user in the db', async () => {
      // AAA
      // Arrange
      const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@test.com',
        password: 'secret',
      };

      // Act
      const res = await request(app).post('/auth/register').send(userData);

      //Assert
    });
  });

  describe('Sad Path: Fields are missing', () => {});
});

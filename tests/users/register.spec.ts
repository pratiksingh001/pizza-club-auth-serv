import request from 'supertest';
import app from '../../src/app.js';
import { AppDataSource } from '../../src/config/data-source.js';
import { User } from '../../src/entities/User.js';
import type { DataSource } from 'typeorm';

describe('POST /auth/register ', () => {
  let connection: DataSource;

  beforeAll(async () => {
    connection = await AppDataSource.initialize();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  beforeEach(async () => {
    await connection.dropDatabase();
    await connection.synchronize();
  });

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
      await request(app).post('/auth/register').send(userData);

      //Assert
      const userRepository = connection.getRepository(User);
      const users = await userRepository.find();
      expect(users).toHaveLength(1);
    });
  });

  describe('Sad Path: Fields are missing', () => {});
});

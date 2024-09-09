const request = require('supertest');
const app = require('../../app');

const mockUserData = {
    email: 'hello@test.com',
    password: '123456789',
    name: 'kraisorn',
    dateOfBirth: '2024-01-01',
    gender: 'male',
    address: '12/34 Bkk',
    subscribeNewsletter: true
};

describe('POST - CREATE USER', () => {
    test('should create a new user', async () => {
        const res = await request(app)
            .post('/v1/auth/register')
            .send(mockUserData);

        expect(res.status).toBe(201);
        expect(res.body.message).toEqual('Registered successfully');
    });

    test('should get 400 if required fields are missing', async () => {
        const data = { ...mockUserData };
        delete data.address;
        delete data.name;

        const res = await request(app)
            .post('/v1/auth/register')
            .send(data);

        expect(res.status).toBe(400);
        expect(res.body.errors).toBeDefined();
    });
});

describe('POST - CHANGE PASSWORD', () => {
    test('should change a password', async () => {
        const res = await request(app)
            .post('/v1/auth/change-password')
            .send({
                currentPassword: '123456789',
                newPassword: '987654321',
                confirmPassword: '987654321',
            });

        expect(res.status).toBe(200);
        expect(res.body.message).toEqual('Password changed successfully');
    });

    test('should get 400 if new passwords do not match', async () => {
        const res = await request(app)
            .post('/v1/auth/change-password')
            .send({
                currentPassword: '123456789',
                newPassword: '999888777',
                confirmPassword: '987987987',
            });

        expect(res.status).toBe(400);
        expect(res.body.errors).toBeDefined();
    });
})

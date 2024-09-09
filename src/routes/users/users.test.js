const request = require('supertest');
const app = require('../../app');

const mockUserData = {
    email: 'hello@test.com',
    name: 'kraisorn',
    age: 17,
    gender: 'male',
    subscribeNewsletter: true
};

describe('GET - USER', () => {
    test('should register a user data', async () => {
        const res = await request(app)
            .get('/v1/users/1')
            .set('Authorization', 'Bearer faketoken_user1');

        expect(res.status).toBe(200);
        expect(res.body).toEqual(mockUserData);
    });

    test('should get 401 if unauthorized', async () => {
        const res = await request(app)
            .get('/v1/users/1')

        expect(res.status).toBe(401);
    });

    test('should get 400 if no id provided', async () => {
        const res = await request(app)
            .get('/v1/users')
            .set('Authorization', 'Bearer faketoken_user1');

        expect(res.status).toBe(400);
        expect(res.body.errors).toBeDefined();
    });
});

describe('PUT - EDIT USER', () => {
    test('should edit a user data', async () => {
        const res = await request(app)
            .put('/v1/users/1')
            .set('Authorization', 'Bearer faketoken_user1')
            .send({ name: "test" });

        expect(res.status).toBe(200);
        expect(res.body.message).toEqual('Updated successfully');
    });

    test('should get 401 if unauthorized', async () => {
        const res = await request(app)
            .put('/v1/users/1')

        expect(res.status).toBe(401);
    });

    test('should get 400 if no id provided', async () => {
        const res = await request(app)
            .put('/v1/users')
            .set('Authorization', 'Bearer faketoken_user1');

        expect(res.status).toBe(400);
        expect(res.body.errors).toBeDefined();
    });
});

describe('DELETE - DELETE USER', () => {
    test('should delete a user data', async () => {
        const res = await request(app)
            .delete('/v1/users/1')
            .set('Authorization', 'Bearer faketoken_user1');

        expect(res.status).toBe(204);
    });

    test('should get 401 if unauthorized', async () => {
        const res = await request(app)
            .delete('/v1/users/1')

        expect(res.status).toBe(401);
    });

    test('should get 400 if no id provided', async () => {
        const res = await request(app)
            .delete('/v1/users')
            .set('Authorization', 'Bearer faketoken_user1');

        expect(res.status).toBe(400);
        expect(res.body.errors).toBeDefined();
    });
});
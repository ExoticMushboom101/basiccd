const request = require('supertest');
const app = require('../index');

describe('Calculator API', () => {
    test('adds two numbers', async () => {
        const response = await request(app)
            .post('/add')
            .send({ num1: 5, num2: 3 });
        expect(response.body.result).toBe(8);
    });

    test('subtracts two numbers', async () => {
        const response = await request(app)
            .post('/subtract')
            .send({ num1: 5, num2: 3 });
        expect(response.body.result).toBe(2);
    });
    test('multiplies two numbers', async () => {
        const response = await request(app)
            .post('/multiply')
            .send({ num1: 4, num2: 3 });
        expect(response.body.result).toBe(12);
    });
});
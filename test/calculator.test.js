const request = require('supertest');
const express = require('express');
const { app } = require('../index');

describe('Calculator API', () => {
    let server;

    beforeAll(() => {
        server = app.listen(3001);
    });

    afterAll((done) => {
        server.close(done);
    });

    describe('POST /add', () => {
        it('should add two numbers', async () => {
            const res = await request(server) // Note: using server instead of app
                .post('/add')
                .send({ num1: 5, num2: 3 });
            
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('result', 8);
        });
    });

    describe('POST /subtract', () => {
        it('should subtract two numbers', async () => {
            const res = await request(server)
                .post('/subtract')
                .send({ num1: 5, num2: 3 });
            
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('result', 2);
        });
    });

    describe('POST /multiply', () => {
        it('should multiply two numbers', async () => {
            const res = await request(server)
                .post('/multiply')
                .send({ num1: 4, num2: 3 });
            
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('result', 12);
        });
    });
});
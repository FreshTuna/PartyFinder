const request = require('supertest');
const app     = require('../app');
const Tier    = require('../models/tier');
const User    = require('../models/user');

const tier = {
    name     : "testTier",
    image_url: "http://localhost:3000/",
    duo_tiers: [
        "silver",
        "gold",
        "bronze"
    ]
};

const user = {
    name: "testName",
    icon: "http://localhost:3000/",
    tier: "testTier"
}

beforeEach( async () => {
    await Tier.deleteMany({});
    await User.deleteMany({});
    await Tier(tier).save();
    await User(user).save();
})

describe('User API Test', () => {
    test('should test that ture === true', () => {
        expect(true).toBe(true);
    });

    test('should create new user', async (done) => {
        const response = await request(app).post('/user')
        .send({
            username: "tunaman",
            icon    : "http://localhost:3000/",
            tier    : "testTier"
        });
        
        expect(response.status).toEqual(201);
        expect(response.body.success).toEqual(true);
        done();
    });

    test('should find user', async (done) => {
        const response = await request(app).get('/user')
        .send({
            name:"testName"
        });

        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('testName');
        done();
    });

    test('should submit user', async (done) => {
        const response = await request(app).post('/usercookie')
        .send({
            username:"testSubmit"
        });

        expect(response.status).toEqual(200);
        expect(response.body.success).toEqual(true);
        done();
    })

})


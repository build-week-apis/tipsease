const request = require('supertest');
const server = require('./server.js');

const db = require('./dbConfig.js');


describe('tipease tests', () => {

    describe('home route', () => {
        it('should return a 200 w string on get to home route', () => {
            return request(server)
                .get('/')
                .then(response => {
                    expect(response.status).toBe(200);
                    expect(response.text).toBe('go to https://github.com/lambda-build-tipsease/build-tipsease-be for end point documentation')
                })  
                .catch();
        })
    })
    describe('base users routes', () => {
        it('should return a 200 for users', () => {
            return request(server)
                .get('/auth/users')
                .then(response => {
                    expect(response.status).toBe(200);
                })  
                .catch();
        })
        it('should return a 200 for service workers', () => {
            return request(server)
                .get('/auth/serviceWorkers')
                .then(response => {
                    expect(response.status).toBe(200);
                })  
                .catch();
        })
        it('should return an an array for service workers', () => {
            return request(server)
                .get('/auth/serviceWorkers')
                .then(response => {
                    expect(response.text[0]).toBe("[");
                    expect(response.text[response.text.length-1]).toBe("]");
                })  
                .catch();
        })
        it('should return an an array for users', () => {
            return request(server)
                .get('/auth/users')
                .then(response => {
                    expect(response.text[0]).toBe("[");
                    expect(response.text[response.text.length-1]).toBe("]");
                })  
                .catch();
        })
    })
    describe('login/registrationg',() => {
        it("should register a user", () => {
            let newNameForTest = "ioasdjfoij";
            return request(server)
                    .post('/auth/users/register')
                    .send({
                        username: `${newNameForTest}`,
                        fullName: "tim honnold",
                        password: "password",
                        photoUrl: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/10307386_10202254175141098_2068299452365214926_n.jpg?_nc_cat=109&_nc_ht=scontent.ftpa1-1.fna&oh=30727a8d38494009fa66c990461e6134&oe=5D3517D4"
                    })
                    .then(response => {
                        expect(response.status).toBe(201);
                    })  
                    .catch();
        })
        it("should register a service worker", () => {
            let newNameForTest = "iausdhfiusdhaf";
            return request(server)
                    .post('/auth/serviceWorkers/register')
                    .send({
                        username: `${newNameForTest}`,
                        fullName: "tim honnold",
                        password: "password",
                        photoUrl: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/10307386_10202254175141098_2068299452365214926_n.jpg?_nc_cat=109&_nc_ht=scontent.ftpa1-1.fna&oh=30727a8d38494009fa66c990461e6134&oe=5D3517D4",
                        serviceType: "promoter",
                        timeAtJob: "10 years",
                        tagline: "dont have a tagline!!!",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        workplace: "NYC"
                    })
                    .then(response => {
                        expect(response.status).toBe(201);
                    })  
                    .catch();
        })
    })
    
    describe('shouldnt allow acces to restricted routes', () => {
        it('should return a 500 w string on get to home route', () => {
            return request(server)
                .get('/serviceWorkers')
                .then(response => {
                    console.log(response.text);
                    expect(response.status).toBe(401);
                    expect(response.text).toBe('{"you":"you must be logged in to view this resource."}')
                })  
                .catch();
        })
    })

})
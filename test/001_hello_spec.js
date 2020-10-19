const expect = require('chai').expect;
const rewire = require('rewire');

const app = rewire('../index.js');

describe('sayHello', () => {
    let sayHello = app.__get__("sayHello");

    it('should be a function', () => {
        expect(sayHello).to.be.a('function');
    });

    it('should take an argument and return a greeting', () => {
        expect(sayHello('futureproof')).to.include('Hello, futureproof!');
    })
});
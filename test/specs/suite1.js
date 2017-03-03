const webdriverio = require('webdriverio');
const chai        = require('chai');
const should      = chai.should;
const expect      = chai.expect;
// const assert      = chai.assert;

describe('suite 1 tests', function(){

    this.timeout(99999999);
    let client;

    before(function(){
            client = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
            return client.init();
    });

    it('Furniture test',function() {
        return client
            .url('https://www.1stdibs.com/')
            //more methods here
    });

    it('Fine Art test',function() {
        return client
            .url('https://www.1stdibs.com/')
            //more methods here
    });

    it('Jewelry test',function() {
        return client
            .url('https://www.1stdibs.com/')
            //more methods here
    });

    it('Fashion test',function() {
        return client
            .url('https://www.1stdibs.com/')
            //more methods here
    });

    after(function() {
        return client.end();
    });
});

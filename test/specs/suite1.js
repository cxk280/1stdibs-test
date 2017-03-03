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
            .click('#mainNavLinkFurniture')
    });

    it('Fine Art test',function() {
        return client
            .url('https://www.1stdibs.com/')
            //more methods here
            .click('#mainNavLinkFineArt')
    });

    it('Jewelry test',function() {
        return client
            .url('https://www.1stdibs.com/')
            //more methods here
            .click('#mainNavLinkJewelryWatches')
    });

    it('Fashion test',function() {
        return client
            .url('https://www.1stdibs.com/')
            //more methods here
            .click('#mainNavLinkFashion')
    });

    after(function() {
        return client.end();
    });
});

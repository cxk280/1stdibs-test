const webdriverio = require('webdriverio');
const jquery      = require('jquery');
const chai        = require('chai');
const chaijquery  = require('chai-jquery');
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

    //Create test login, save info in environmental variables, and have each test login beforehand so the modal doesn't pop up then logout afterward

    it('Furniture test',function() {
        return client
            .url('https://www.1stdibs.com/')
            .click('#mainNavLinkFurniture')
            .pause(10000)
            .getText('.browse-header-title').then(function (text) {
                expect(text).to.include('Furniture');
            });
    });

    it('Fine Art test',function() {
        return client
            .url('https://www.1stdibs.com/')
            .click('#mainNavLinkFineArt')
            .pause(10000)
            .getText('.browse-header-title').then(function (text) {
                expect(text).to.include('Fine Art');
            });
    });

    it('Jewelry test',function() {
        return client
            .url('https://www.1stdibs.com/')
            .click('#mainNavLinkJewelryWatches')
            .pause(10000)
            .getText('.browse-header-title').then(function (text) {
                expect(text).to.include('Jewelry & Watches');
            });
    });

    it('Fashion test',function() {
        return client
            .url('https://www.1stdibs.com/')
            .click('#mainNavLinkFashion')
            .pause(10000)
            .getText('.browse-header-title').then(function (text) {
                expect(text).to.include('Fashion');
            });
    });

    after(function() {
        return client.end();
    });
});

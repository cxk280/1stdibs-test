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

    it('Furniture test',function() {
        return client
        .url('https://www.1stdibs.com/')
        .click('#mainNavLinkFurniture')
        .pause(5000)
        .getText('.browse-header-title').then(function (text) {
            expect(text).to.include('Furniture');
        });
    });

    // it('Fine Art test',function() {
    //     return client
    //         .url('https://www.1stdibs.com/')
    //         //more methods here
    //         .click('#mainNavLinkFineArt').then(function (result) {
    //             expect('.browse-header-title').to.equal('Fine Art');
    //         });
    // });

    // it('Jewelry test',function() {
    //     return client
    //         .url('https://www.1stdibs.com/')
    //         //more methods here
    //         .click('#mainNavLinkJewelryWatches').then(function (result) {
    //             expect('.browse-header-title').to.equal('Jewelry & Watches');
    //         });
    // });

    // it('Fashion test',function() {
    //     return client
    //         .url('https://www.1stdibs.com/')
    //         //more methods here
    //         .click('#mainNavLinkFashion').then(function (result) {
    //             expect('.browse-header-title').to.equal('Fashion');
    //         });
    // });

    after(function() {
        return client.end();
    });
});

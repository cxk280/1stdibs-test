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
            .pause(2000)
            .click("span[data-action='login']")
            .pause(3000)
            .setValue('#login_email','1stdibstest@gmail.com')
            .pause(2000)
            .setValue('#login_password','s!HNK6N776&9Rju')
            .pause(2000)
            .click("button[data-tn='auth-modal-login-submit-button']")
            .pause(3000)
            .click("a[data-tn='global-nav-item-link-furniture']")
            .pause(10000)
            .getText('.browse-header-title').then(function (text) {
                expect(text).to.include('Furniture');
            })
    });

    // it('Fine Art test',function() {
    //     return client
    //         .url('https://www.1stdibs.com/')
    //         .pause(2000)
    //         .click("span[data-action='login']")
    //         .pause(3000)
    //         .setValue('#login_email','1stdibstest@gmail.com')
    //         .pause(2000)
    //         .setValue('#login_password','s!HNK6N776&9Rju')
    //         .pause(2000)
    //         .click("button[data-tn='auth-modal-login-submit-button']")
    //         .pause(3000)
    //         .click("a[data-tn='global-nav-item-link-fine art']")
    //         .pause(10000)
    //         .getText('.browse-header-title').then(function (text) {
    //             expect(text).to.include('Fine Art');
    //         })
    // });

    // it('Jewelry test',function() {
    //     return client
    //         .url('https://www.1stdibs.com/')
    //         .pause(5000)
    //         .click("span[data-action='login']")
    //         .pause(10000)
    //         .setValue('#login_email','1stdibstest@gmail.com')
    //         .pause(5000)
    //         .setValue('#login_password','s!HNK6N776&9Rju')
    //         .pause(5000)
    //         .click("button[data-tn='auth-modal-login-submit-button']")
    //         .pause(5000)
    //         .click("a[data-tn='global-nav-item-link-jewelry & watches']")
    //         .pause(10000)
    //         .getText('.browse-header-title').then(function (text) {
    //             expect(text).to.include('Jewelry & Watches');
    //         });
    // });

    // it('Fashion test',function() {
    //     return client
    //         .url('https://www.1stdibs.com/')
    //         .pause(5000)
    //         .click("span[data-action='login']")
    //         .pause(10000)
    //         .setValue('#login_email','1stdibstest@gmail.com')
    //         .pause(5000)
    //         .setValue('#login_password','s!HNK6N776&9Rju')
    //         .pause(5000)
    //         .click("button[data-tn='auth-modal-login-submit-button']")
    //         .pause(5000)
    //         .click("a[data-tn='global-nav-item-link-fashion']")
    //         .pause(10000)
    //         .getText('.browse-header-title').then(function (text) {
    //             expect(text).to.include('Fashion');
    //         });
    // });

    after(function() {
        return client.end();
    });
});

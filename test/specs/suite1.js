const dotenv      = require('dotenv').config();
const webdriverio = require('webdriverio');
const chai        = require('chai');
const should      = chai.should;
const expect      = chai.expect;
const HomePage    = require('../pageobjects/home.page');

describe('suite 1 tests', function(){

    this.timeout(99999999);
    let client;

    before(function(){
            client = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
            return client.init();
    });

    it('Furniture test',function() {

        HomePage.open()
        // return client

        //     //Login
        //     .url('https://www.1stdibs.com/')
        //     // HomePage.open()
        //     .waitForVisible("span[data-action='login']", 10000)
        //     .click("span[data-action='login']")
        //     .waitForVisible('#login_email', 10000)
        //     .setValue('#login_email',process.env.test_email)
        //     .waitForVisible('#login_password', 10000)
        //     .setValue('#login_password',process.env.test_password)
        //     .waitForVisible("button[data-tn='auth-modal-login-submit-button']", 10000)
        //     .click("button[data-tn='auth-modal-login-submit-button']")
        //     .pause(5000)

        //     //Navigate to Furniture
        //     .waitForVisible("a[data-tn='global-nav-item-link-furniture']", 10000)
        //     .click("a[data-tn='global-nav-item-link-furniture']")
        //     .waitForVisible('.browse-header-title', 10000)
        //     .getText('.browse-header-title').then(function (text) {
        //         expect(text).to.include('Furniture');
        //     })
        //     .pause(10000)

        //     //Logout
        //     .url('https://www.1stdibs.com/')
        //     .pause(10000)
        //     .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
        //     .click('.AccountNav-style__accountIcon__cVYjZ')
        //     .pause(10000)
        //     .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
        //     .pause(3000)
        //     .click("span[data-tn='sub-nav-list-item-link-logout']")
        //     .pause(10000)
        //     .url('https://www.1stdibs.com/')
    });

    // it('Fine Art test',function() {
    //     return client

    //         //Login
    //         .url('https://www.1stdibs.com/')
    //         .waitForVisible("span[data-action='login']", 10000)
    //         .click("span[data-action='login']")
    //         .waitForVisible('#login_email', 10000)
    //         .setValue('#login_email',process.env.test_email)
    //         .waitForVisible('#login_password', 10000)
    //         .setValue('#login_password',process.env.test_password)
    //         .waitForVisible("button[data-tn='auth-modal-login-submit-button']", 10000)
    //         .click("button[data-tn='auth-modal-login-submit-button']")
    //         .pause(5000)

    //         //Navigate to Fine Art
    //         .waitForVisible("a[data-tn='global-nav-item-link-fine art']", 10000)
    //         .click("a[data-tn='global-nav-item-link-fine art']")
    //         .waitForVisible('.browse-header-title', 10000)
    //         .getText('.browse-header-title').then(function (text) {
    //             expect(text).to.include('Fine Art');
    //         })
    //         .pause(10000)

    //         //Logout
    //         .url('https://www.1stdibs.com/')
    //         .pause(10000)
    //         .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
    //         .click('.AccountNav-style__accountIcon__cVYjZ')
    //         .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
    //         .pause(3000)
    //         .click("span[data-tn='sub-nav-list-item-link-logout']")
    //         .pause(5000)
    //         .url('https://www.1stdibs.com/')
    //         .pause(5000)
    // });

    // it('Jewelry test',function() {
    //     return client

    //         //Login
    //         .url('https://www.1stdibs.com/')
    //         .waitForVisible("span[data-action='login']", 10000)
    //         .click("span[data-action='login']")
    //         .waitForVisible('#login_email', 10000)
    //         .setValue('#login_email',process.env.test_email)
    //         .waitForVisible('#login_password', 10000)
    //         .setValue('#login_password',process.env.test_password)
    //         .waitForVisible("button[data-tn='auth-modal-login-submit-button']", 10000)
    //         .click("button[data-tn='auth-modal-login-submit-button']")
    //         .pause(5000)

    //         //Navigate to Jewelry & Watches
    //         .waitForVisible("a[data-tn='global-nav-item-link-jewelry & watches']", 10000)
    //         .click("a[data-tn='global-nav-item-link-jewelry & watches']")
    //         .waitForVisible('.browse-header-title', 10000)
    //         .getText('.browse-header-title').then(function (text) {
    //             expect(text).to.include('Jewelry & Watches');
    //         })
    //         .pause(10000)

    //         //Logout
    //         .url('https://www.1stdibs.com/')
    //         .pause(10000)
    //         .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
    //         .click('.AccountNav-style__accountIcon__cVYjZ')
    //         .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
    //         .pause(3000)
    //         .click("span[data-tn='sub-nav-list-item-link-logout']")
    //         .pause(5000)
    //         .url('https://www.1stdibs.com/')
    //         .pause(5000)
    // });

    // it('Fashion test',function() {
    //     return client

    //         //Login
    //         .url('https://www.1stdibs.com/')
    //         .waitForVisible("span[data-action='login']", 10000)
    //         .click("span[data-action='login']")
    //         .waitForVisible('#login_email', 10000)
    //         .setValue('#login_email',process.env.test_email)
    //         .waitForVisible('#login_password', 10000)
    //         .setValue('#login_password',process.env.test_password)
    //         .waitForVisible("button[data-tn='auth-modal-login-submit-button']", 10000)
    //         .click("button[data-tn='auth-modal-login-submit-button']")
    //         .pause(5000)

    //         //Navigate to Fashion
    //         .waitForVisible("a[data-tn='global-nav-item-link-fashion']", 10000)
    //         .click("a[data-tn='global-nav-item-link-fashion']")
    //         .waitForVisible('.browse-header-title', 10000)
    //         .getText('.browse-header-title').then(function (text) {
    //             expect(text).to.include('Fashion');
    //         })
    //         .pause(10000)

    //         //Logout
    //         .url('https://www.1stdibs.com/')
    //         .pause(10000)
    //         .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
    //         .click('.AccountNav-style__accountIcon__cVYjZ')
    //         .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
    //         .pause(3000)
    //         .click("span[data-tn='sub-nav-list-item-link-logout']")
    //         .pause(5000)
    //         .url('https://www.1stdibs.com/')
    //         .pause(5000)
    // });

    // after(function() {
    //     return client.end();
    // });
});

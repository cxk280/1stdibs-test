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
            .waitForVisible("span[data-action='login']", 10000)
            .click("span[data-action='login']")
            .waitForVisible('#login_email', 10000)
            .setValue('#login_email','1stdibstest@gmail.com')
            .setValue('#login_password','s!HNK6N776&9Rju')
            .setValue('#login_password','s!HNK6N776&9Rju')
            .waitForVisible("button[data-tn='auth-modal-login-submit-button']", 10000)
            .click("button[data-tn='auth-modal-login-submit-button']")
            .pause(5000)
            .waitForVisible("a[data-tn='global-nav-item-link-furniture']", 10000)
            .click("a[data-tn='global-nav-item-link-furniture']")
            .waitForVisible('.browse-header-title', 10000)
            .getText('.browse-header-title').then(function (text) {
                expect(text).to.include('Furniture');
            })
            .pause(10000)
            .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
            .click('.AccountNav-style__accountIcon__cVYjZ')
            .pause(10000)
            .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
            .click("span[data-tn='sub-nav-list-item-link-logout']")
            .pause(10000)
            .url('https://www.1stdibs.com/')
    });

    it('Fine Art test',function() {
        return client
            .url('https://www.1stdibs.com/')
            .waitForVisible("span[data-action='login']", 10000)
            .click("span[data-action='login']")
            .waitForVisible('#login_email', 10000)
            .setValue('#login_email','1stdibstest@gmail.com')
            .waitForVisible('#login_password', 10000)
            .setValue('#login_password','s!HNK6N776&9Rju')
            .waitForVisible("button[data-tn='auth-modal-login-submit-button']", 10000)
            .click("button[data-tn='auth-modal-login-submit-button']")
            .pause(5000)
            .waitForVisible("a[data-tn='global-nav-item-link-fine art']", 10000)
            .click("a[data-tn='global-nav-item-link-fine art']")
            .waitForVisible('.browse-header-title', 10000)
            .getText('.browse-header-title').then(function (text) {
                expect(text).to.include('Fine Art');
            })
            .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
            .click('.AccountNav-style__accountIcon__cVYjZ')
            .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
            .click("span[data-tn='sub-nav-list-item-link-logout']")
            .pause(5000)
            .url('https://www.1stdibs.com/')
            .pause(5000)
    });

    it('Jewelry test',function() {
        return client
            .url('https://www.1stdibs.com/')
            .waitForVisible("span[data-action='login']", 10000)
            .click("span[data-action='login']")
            .waitForVisible('#login_email', 10000)
            .setValue('#login_email','1stdibstest@gmail.com')
            .waitForVisible('#login_password', 10000)
            .setValue('#login_password','s!HNK6N776&9Rju')
            .waitForVisible("button[data-tn='auth-modal-login-submit-button']", 10000)
            .click("button[data-tn='auth-modal-login-submit-button']")
            .pause(5000)
            .waitForVisible("a[data-tn='global-nav-item-link-jewelry & watches']", 10000)
            .click("a[data-tn='global-nav-item-link-jewelry & watches']")
            .waitForVisible('.browse-header-title', 10000)
            .getText('.browse-header-title').then(function (text) {
                expect(text).to.include('Jewelry & Watches');
            })
            .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
            .click('.AccountNav-style__accountIcon__cVYjZ')
            .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
            .click("span[data-tn='sub-nav-list-item-link-logout']")
            .pause(5000)
            .url('https://www.1stdibs.com/')
            .pause(5000)
    });

    it('Fashion test',function() {
        return client
            .url('https://www.1stdibs.com/')
            .waitForVisible("span[data-action='login']", 10000)
            .click("span[data-action='login']")
            .waitForVisible('#login_email', 10000)
            .setValue('#login_email','1stdibstest@gmail.com')
            .waitForVisible('#login_password', 10000)
            .setValue('#login_password','s!HNK6N776&9Rju')
            .waitForVisible("button[data-tn='auth-modal-login-submit-button']", 10000)
            .click("button[data-tn='auth-modal-login-submit-button']")
            .pause(5000)
            .waitForVisible("a[data-tn='global-nav-item-link-fashion']", 10000)
            .click("a[data-tn='global-nav-item-link-fashion']")
            .waitForVisible('.browse-header-title', 10000)
            .getText('.browse-header-title').then(function (text) {
                expect(text).to.include('Fashion');
            })
            .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
            .click('.AccountNav-style__accountIcon__cVYjZ')
            .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
            .click("span[data-tn='sub-nav-list-item-link-logout']")
            .pause(5000)
            .url('https://www.1stdibs.com/')
            .pause(5000)
    });

    after(function() {
        return client.end();
    });
});

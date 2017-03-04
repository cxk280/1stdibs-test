const dotenv      = require('dotenv').config();
const webdriverio = require('webdriverio');
const chai        = require('chai');
const should      = chai.should;
const expect      = chai.expect;

describe('suite 1 tests', function(){

    this.timeout(99999999);
    let client;

    before(function(){
            client = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
            return client.init();
    });

    it('Oak Wood Table test',function() {
        return client

            //Login
            .url('https://www.1stdibs.com/')
            .waitForVisible("span[data-action='login']", 10000)
            .click("span[data-action='login']")
            .waitForVisible('#login_email', 10000)
            .setValue('#login_email',process.env.test_email)
            .waitForVisible('#login_password', 10000)
            .setValue('#login_password',process.env.test_password)
            .waitForVisible("button[data-tn='auth-modal-login-submit-button']", 10000)
            .click("button[data-tn='auth-modal-login-submit-button']")
            .pause(10000)

            //Search
            .setValue("input[data-tn='global-header-search-input']","Oak Wood Table")
            .click("div[class='SearchBar-style__icon__umm_r']")
            .pause(7000)
            .getText('.results-header-search-term').then(function (text) {
                expect(text).to.equal('"Oak Wood Table"');
            })

            //Logout
            .pause(10000)
            .url('https://www.1stdibs.com/')
            .pause(10000)
            .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
            .click('.AccountNav-style__accountIcon__cVYjZ')
            .pause(10000)
            .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
            .pause(3000)
            .click("span[data-tn='sub-nav-list-item-link-logout']")
            .pause(10000)
            .url('https://www.1stdibs.com/')
            .pause(5000)
    });

    it('Cat Painting test',function() {
        return client

            //Login
            .url('https://www.1stdibs.com/')
            .waitForVisible("span[data-action='login']", 10000)
            .click("span[data-action='login']")
            .waitForVisible('#login_email', 10000)
            .setValue('#login_email',process.env.test_email)
            .waitForVisible('#login_password', 10000)
            .setValue('#login_password',process.env.test_password)
            .waitForVisible("button[data-tn='auth-modal-login-submit-button']", 10000)
            .click("button[data-tn='auth-modal-login-submit-button']")
            .pause(10000)

            //Search
            .setValue("input[data-tn='global-header-search-input']","Cat Painting")
            .click("div[class='SearchBar-style__icon__umm_r']")
            .pause(7000)
            .getText('.results-header-search-term').then(function (text) {
                expect(text).to.equal('"Cat Painting"');
            })

            //Logout
            .pause(10000)
            .url('https://www.1stdibs.com/')
            .pause(10000)
            .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
            .click('.AccountNav-style__accountIcon__cVYjZ')
            .pause(10000)
            .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
            .pause(3000)
            .click("span[data-tn='sub-nav-list-item-link-logout']")
            .pause(5000)
            .url('https://www.1stdibs.com/')
            .pause(5000)
    });

    it('Gold Engagement Ring test',function() {
        return client

            //Login
            .url('https://www.1stdibs.com/')
            .waitForVisible("span[data-action='login']", 10000)
            .click("span[data-action='login']")
            .waitForVisible('#login_email', 10000)
            .setValue('#login_email',process.env.test_email)
            .waitForVisible('#login_password', 10000)
            .setValue('#login_password',process.env.test_password)
            .waitForVisible("button[data-tn='auth-modal-login-submit-button']", 10000)
            .click("button[data-tn='auth-modal-login-submit-button']")
            .pause(10000)

            //Search
            .setValue("input[data-tn='global-header-search-input']","Gold Engagement Ring")
            .click("div[class='SearchBar-style__icon__umm_r']")
            .pause(7000)
            .getText('.results-header-search-term').then(function (text) {
                expect(text).to.equal('"Gold Engagement Ring"');
            })

            //Logout
            .pause(10000)
            .url('https://www.1stdibs.com/')
            .pause(10000)
            .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
            .click('.AccountNav-style__accountIcon__cVYjZ')
            .pause(10000)
            .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
            .pause(3000)
            .click("span[data-tn='sub-nav-list-item-link-logout']")
            .pause(5000)
            .url('https://www.1stdibs.com/')
            .pause(5000)
    });

    it('Chanel Handbag test',function() {
        return client

            //Login
            .url('https://www.1stdibs.com/')
            .waitForVisible("span[data-action='login']", 10000)
            .click("span[data-action='login']")
            .waitForVisible('#login_email', 10000)
            .setValue('#login_email',process.env.test_email)
            .waitForVisible('#login_password', 10000)
            .setValue('#login_password',process.env.test_password)
            .waitForVisible("button[data-tn='auth-modal-login-submit-button']", 10000)
            .click("button[data-tn='auth-modal-login-submit-button']")
            .pause(10000)

            //Search
            .setValue("input[data-tn='global-header-search-input']","Chanel Handbag")
            .click("div[class='SearchBar-style__icon__umm_r']")
            .pause(7000)
            .getText('.results-header-search-term').then(function (text) {
                expect(text).to.equal('"Chanel Handbag"');
            })

            //Logout
            .pause(10000)
            .url('https://www.1stdibs.com/')
            .pause(10000)
            .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
            .click('.AccountNav-style__accountIcon__cVYjZ')
            .pause(10000)
            .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
            .pause(3000)
            .click("span[data-tn='sub-nav-list-item-link-logout']")
            .pause(5000)
            .url('https://www.1stdibs.com/')
            .pause(5000)
    });

    after(function() {
        return client.end();
    });
});

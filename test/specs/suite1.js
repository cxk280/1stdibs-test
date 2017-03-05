const dotenv      = require('dotenv').config();
const webdriverio     = require('webdriverio');
const chai            = require('chai');
const should          = chai.should;
const expect          = chai.expect;
const PageObject      = require('../pageobjects/page');
const HomePageObject  = require('../pageobjects/home.page');
const MainHeadingPageObject  = require('../pageobjects/main.heading.page');

describe('suite 1 tests', function(){

    this.timeout(99999999);
    let client;
    let Page;
    let HomePage;
    let MainHeadingPage;

    before(function(){
            Page = new PageObject();
            HomePage = new HomePageObject();
            MainHeadingPage = new MainHeadingPageObject();
            client = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
            return client.init();
    });

    it('Furniture test',function() {

        return client

            //Login
            .url(Page.url)
            .waitForVisible(HomePage.loginButton, 10000)
            .click(HomePage.loginButton)
            .waitForVisible(Page.loginEmail, 10000)
            .setValue(Page.loginEmail,process.env.test_email)
            .waitForVisible(Page.loginPassword, 10000)
            .setValue(Page.loginPassword,process.env.test_password)
            .waitForVisible(Page.submitButton, 10000)
            .click(Page.submitButton)
            .pause(5000)

            // Navigate to Furniture
            .waitForVisible(HomePage.furnitureLink, 10000)
            .click(HomePage.furnitureLink)
            .waitForVisible(MainHeadingPage.headerTitle, 10000)
            .getText(MainHeadingPage.headerTitle).then(function (text) {
                expect(text).to.include('Furniture');
            })
            .pause(10000)

            //Logout
            .url(Page.url)
            .pause(10000)
            .waitForVisible(HomePage.accountDropdown, 10000)
            .click(HomePage.accountDropdown)
            .pause(10000)
            .waitForVisible(HomePage.logoutButton, 10000)
            .pause(3000)
            .click(HomePage.logoutButton)
            .pause(10000)
            .url(Page.url)
    });

    it('Fine Art test',function() {
        return client

            //Login
            .url(Page.url)
            .waitForVisible(HomePage.loginButton, 10000)
            .click(HomePage.loginButton)
            .waitForVisible(Page.loginEmail, 10000)
            .setValue(Page.loginEmail,process.env.test_email)
            .waitForVisible(Page.loginPassword, 10000)
            .setValue(Page.loginPassword,process.env.test_password)
            .waitForVisible(Page.submitButton, 10000)
            .click(Page.submitButton)
            .pause(5000)

            //Navigate to Fine Art
    //         .waitForVisible("a[data-tn='global-nav-item-link-fine art']", 10000)
    //         .click("a[data-tn='global-nav-item-link-fine art']")
    //         .waitForVisible('.browse-header-title', 10000)
    //         .getText('.browse-header-title').then(function (text) {
    //             expect(text).to.include('Fine Art');
    //         })
    //         .pause(10000)
            .waitForVisible(HomePage.fineArtLink, 10000)
            .click(HomePage.fineArtLink)
            .waitForVisible(MainHeadingPage.headerTitle, 10000)
            .getText(MainHeadingPage.headerTitle).then(function (text) {
                expect(text).to.include('Fine Art');
            })
            .pause(10000)

            //Logout
            .url('https://www.1stdibs.com/')
            .pause(10000)
            .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
            .click('.AccountNav-style__accountIcon__cVYjZ')
            .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
            .pause(3000)
            .click("span[data-tn='sub-nav-list-item-link-logout']")
            .pause(5000)
            .url('https://www.1stdibs.com/')
            .pause(5000)
    });

    it('Jewelry test',function() {
        return client

            //Login
            .url(Page.url)
            .waitForVisible(HomePage.loginButton, 10000)
            .click(HomePage.loginButton)
            .waitForVisible(Page.loginEmail, 10000)
            .setValue(Page.loginEmail,process.env.test_email)
            .waitForVisible(Page.loginPassword, 10000)
            .setValue(Page.loginPassword,process.env.test_password)
            .waitForVisible(Page.submitButton, 10000)
            .click(Page.submitButton)
            .pause(5000)

            //Navigate to Jewelry & Watches
    //         .waitForVisible("a[data-tn='global-nav-item-link-jewelry & watches']", 10000)
    //         .click("a[data-tn='global-nav-item-link-jewelry & watches']")
    //         .waitForVisible('.browse-header-title', 10000)
    //         .getText('.browse-header-title').then(function (text) {
    //             expect(text).to.include('Jewelry & Watches');
    //         })
    //         .pause(10000)
            .waitForVisible(HomePage.jewelryLink, 10000)
            .click(HomePage.jewelryLink)
            .waitForVisible(MainHeadingPage.headerTitle, 10000)
            .getText(MainHeadingPage.headerTitle).then(function (text) {
                expect(text).to.include('Jewelry & Watches');
            })
            .pause(10000)

            //Logout
            .url('https://www.1stdibs.com/')
            .pause(10000)
            .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
            .click('.AccountNav-style__accountIcon__cVYjZ')
            .waitForVisible("span[data-tn='sub-nav-list-item-link-logout']", 10000)
            .pause(3000)
            .click("span[data-tn='sub-nav-list-item-link-logout']")
            .pause(5000)
            .url('https://www.1stdibs.com/')
            .pause(5000)
    });

    it('Fashion test',function() {
        return client

            //Login
            .url(Page.url)
            .waitForVisible(HomePage.loginButton, 10000)
            .click(HomePage.loginButton)
            .waitForVisible(Page.loginEmail, 10000)
            .setValue(Page.loginEmail,process.env.test_email)
            .waitForVisible(Page.loginPassword, 10000)
            .setValue(Page.loginPassword,process.env.test_password)
            .waitForVisible(Page.submitButton, 10000)
            .click(Page.submitButton)
            .pause(5000)

            //Navigate to Fashion
    //         .waitForVisible("a[data-tn='global-nav-item-link-fashion']", 10000)
    //         .click("a[data-tn='global-nav-item-link-fashion']")
    //         .waitForVisible('.browse-header-title', 10000)
    //         .getText('.browse-header-title').then(function (text) {
    //             expect(text).to.include('Fashion');
    //         })
    //         .pause(10000)
            .waitForVisible(HomePage.fashionLink, 10000)
            .click(HomePage.fashionLink)
            .waitForVisible(MainHeadingPage.headerTitle, 10000)
            .getText(MainHeadingPage.headerTitle).then(function (text) {
                expect(text).to.include('Fashion');
            })
            .pause(10000)

            //Logout
            .url('https://www.1stdibs.com/')
            .pause(10000)
            .waitForVisible('.AccountNav-style__accountIcon__cVYjZ', 10000)
            .click('.AccountNav-style__accountIcon__cVYjZ')
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

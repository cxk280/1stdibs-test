const dotenv      = require('dotenv').config();
const webdriverio     = require('webdriverio');
const chai            = require('chai');
const should          = chai.should;
const expect          = chai.expect;
const PageObject      = require('../pageobjects/page');
const HomePageObject  = require('../pageobjects/home.page');
const SearchResultsPageObject  = require('../pageobjects/search.results.page');

describe('suite 2 tests', function(){

    this.timeout(99999999);
    let client;
    let Page;
    let HomePage;
    let SearchResultsPage;

    before(function(){
            Page = new PageObject();
            HomePage = new HomePageObject();
            SearchResultsPage = new SearchResultsPageObject();
            client = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
            return client.init();
    });

    it('Oak Wood Table test',function() {
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
            .url(Page.url)
            .pause(5000)

            //Search
            .setValue(HomePage.searchInput,"Oak Wood Table")
            .click(HomePage.searchButton)
            .pause(7000)
            .getText(SearchResultsPage.resultsHeader).then(function (text) {
                expect(text).to.equal('"Oak Wood Table"');
            })

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
            .pause(5000)
    });

    it('Cat Painting test',function() {
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
            .url(Page.url)
            .pause(5000)

            //Search
            .setValue(HomePage.searchInput,"Cat Painting")
            .click(HomePage.searchButton)
            .pause(7000)
            .getText(SearchResultsPage.resultsHeader).then(function (text) {
                expect(text).to.equal('"Cat Painting"');
            })

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
            .pause(5000)
    });

    it('Gold Engagement Ring test',function() {
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
            .url(Page.url)
            .pause(5000)

            //Search
            .setValue(HomePage.searchInput,"Gold Engagement Ring")
            .click(HomePage.searchButton)
            .pause(7000)
            .getText(SearchResultsPage.resultsHeader).then(function (text) {
                expect(text).to.equal('"Gold Engagement Ring"');
            })

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
            .pause(5000)
    });

    it('Chanel Handbag test',function() {
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
            .url(Page.url)
            .pause(5000)

            //Search
            .setValue(HomePage.searchInput,"Chanel Handbag")
            .click(HomePage.searchButton)
            .pause(7000)
            .getText(SearchResultsPage.resultsHeader).then(function (text) {
                expect(text).to.equal('"Chanel Handbag"');
            })

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
            .pause(5000)
    });

    after(function() {
        return client.end();
    });
});

"use strict";

const Page = require('./page')

class HomePage extends Page {
    // get username()  { return browser.element('#username'); }
    // get password()  { return browser.element('#password');

    // submit() {
    //     this.form.submitForm();
    // }

    // get loginButton()  { return browser.element("span[data-action='login']"); }
    constructor() {
        super();
        this.loginButton = "span[data-action='login']";
    }

}
module.exports = HomePage;

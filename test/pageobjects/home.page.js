"use strict";

const Page = require('./page')

class HomePage extends Page {

    constructor() {
        super();
        this.loginButton = "span[data-action='login']";
        this.furnitureLink = "a[data-tn='global-nav-item-link-furniture']";
    }

}
module.exports = HomePage;

"use strict";

const Page = require('./page')

class HomePage extends Page {

    constructor() {
        super();
        this.loginButton = "span[data-action='login']";
        this.furnitureLink = "a[data-tn='global-nav-item-link-furniture']";
        this.accountDropdown = '.AccountNav-style__accountIcon__cVYjZ';
        this.logoutButton = "span[data-tn='sub-nav-list-item-link-logout']";
    }

}
module.exports = HomePage;

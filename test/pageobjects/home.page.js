"use strict";

const Page = require('./page')

class HomePage extends Page {

    constructor() {
        super();
        this.loginButton = "span[data-action='login']";
        this.furnitureLink = "a[data-tn='global-nav-item-link-furniture']";
        this.fineArtLink = "a[data-tn='global-nav-item-link-fine art']";
        this.jewelryLink = "a[data-tn='global-nav-item-link-jewelry & watches']";
        this.fashionLink = "a[data-tn='global-nav-item-link-fashion']";
        this.accountDropdown = '.AccountNav-style__accountIcon__cVYjZ';
        this.logoutButton = "span[data-tn='sub-nav-list-item-link-logout']";
        this.searchInput = "input[data-tn='global-header-search-input']";
        this.searchButton = "div[class='SearchBar-style__icon__umm_r']";
    }

}
module.exports = HomePage;

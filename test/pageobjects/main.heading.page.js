"use strict";

const Page = require('./page')

class MainHeadingPage extends Page {

    constructor() {
        super();
        this.headerTitle = ".browse-header-title";
    }

}
module.exports = MainHeadingPage;

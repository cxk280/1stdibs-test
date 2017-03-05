"use strict";

const Page = require('./page')

class SearchResultsPage extends Page {

    constructor() {
        super();
        this.resultsHeader = '.results-header-search-term';
    }

}
module.exports = SearchResultsPage;

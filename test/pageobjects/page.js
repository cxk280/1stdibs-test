"use strict";
class Page {
  constructor() {
    this.title = '1stDibs';
  }
  open() {
    browser.url('https://www.1stdibs.com/');
  }
}
module.exports = Page;

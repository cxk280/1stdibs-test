"use strict";

class Page {

  constructor() {
    this.url        = 'https://www.1stdibs.com/';
    this.loginEmail = '#login_email';
    this.loginPassword  = '#login_password';
    this.submitButton = "button[data-tn='auth-modal-login-submit-button']";
  }

}

module.exports = Page;

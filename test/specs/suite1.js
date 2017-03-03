const webdriverio = require('webdriverio');
const should      = require('should');
const chai        = require('chai');
const assert      = chai.assert;

describe('suite 1 tests', function(){

    this.timeout(99999999);
    let client;

    before(function(){
            client = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
            return client.init();
    });

    it('Furniture test',function() {
        return client
            // .url('https://github.com/')
            // .getElementSize('.header-logo-invertocat .octicon.octicon-mark-github').then(function (result) {
            //     assert.strictEqual(result.height , 32);
            //     assert.strictEqual(result.width, 32);
            // })
            // .getTitle().then(function (title) {
            //     assert.strictEqual(title,'How people build software · GitHub');
            // })
            // .getCssProperty('a[href="/pricing"]', 'color').then(function (result) {
            //     assert.strictEqual(result.value, 'rgba(60,65,70,1)');
            // });
    });

    it('Fine Art test',function() {
        return client
            // .url('https://github.com/')
            // .getElementSize('.header-logo-invertocat .octicon.octicon-mark-github').then(function (result) {
            //     assert.strictEqual(result.height , 32);
            //     assert.strictEqual(result.width, 32);
            // })
            // .getTitle().then(function (title) {
            //     assert.strictEqual(title,'How people build software · GitHub');
            // })
            // .getCssProperty('a[href="/pricing"]', 'color').then(function (result) {
            //     assert.strictEqual(result.value, 'rgba(60,65,70,1)');
            // });
    });

    it('Jewelry test',function() {
        return client
            // .url('https://github.com/')
            // .getElementSize('.header-logo-invertocat .octicon.octicon-mark-github').then(function (result) {
            //     assert.strictEqual(result.height , 32);
            //     assert.strictEqual(result.width, 32);
            // })
            // .getTitle().then(function (title) {
            //     assert.strictEqual(title,'How people build software · GitHub');
            // })
            // .getCssProperty('a[href="/pricing"]', 'color').then(function (result) {
            //     assert.strictEqual(result.value, 'rgba(60,65,70,1)');
            // });
    });

    it('Fashion test',function() {
        return client
            // .url('https://github.com/')
            // .getElementSize('.header-logo-invertocat .octicon.octicon-mark-github').then(function (result) {
            //     assert.strictEqual(result.height , 32);
            //     assert.strictEqual(result.width, 32);
            // })
            // .getTitle().then(function (title) {
            //     assert.strictEqual(title,'How people build software · GitHub');
            // })
            // .getCssProperty('a[href="/pricing"]', 'color').then(function (result) {
            //     assert.strictEqual(result.value, 'rgba(60,65,70,1)');
            // });
    });

    after(function() {
        return client.end();
    });
});

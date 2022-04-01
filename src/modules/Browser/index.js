const ppt = require('puppeteer');

class Browser {
    constructor(){
        this.browser = null; 
        this.page = null; 
    }

    startBrowser = async ()=> this.browser = await ppt.launch({headless: false});

    createNewPage = async url => {
        this.page = await this.browser.newPage();
        await this.navigateTo(url);
    }

    navigateTo = async url => {
        await this.page.goto(url, {waitUntil: "load"});
        await this.acceptAllCookies()
    }

    acceptAllCookies = async () => {
        const hasButtonAceptCookies = await this.page.$("button.js-accept-cookies");
        hasButtonAceptCookies ? await this.page.click("button.js-accept-cookies"): null;
    };
}

module.exports = Browser;
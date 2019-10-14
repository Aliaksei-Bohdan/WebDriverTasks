var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    assert = require('assert'),
    promise = webdriver.promise,
    until = webdriver.until;
    // chrome = require('selenium-webdriver/chrome');
    // var o = new chrome.Options();
    // o.addArguments('disable-infobars');

    promise.USE_PROMISE_MANAGER = false;

    var Page = async () => {
        // this.driver = await new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(o).build(); // launch Chrome with some commands
        this.driver = await new webdriver.Builder().forBrowser('chrome').build();

        var driver = this.driver;

        this.visit = async(theUrl) => {
            return driver.get(theUrl);
        }

        this.quit = async() => {
            return driver.quit();
        }

        this.find = async(el) => {
            await driver.wait(until.elementLocated(By.css(el)),15000);
            return driver.findElement(By.css(el));
        }

        this.FindAll = async(el) => {
            await driver.wait(until.elementLocated(By.css(el)),5000);
            return driver.findElements(By.css(el));
        }

        this.write = async(el, txt) => {
            return this.find(el).sendKeys(txt);
        }
    }


    module.exports = Page;
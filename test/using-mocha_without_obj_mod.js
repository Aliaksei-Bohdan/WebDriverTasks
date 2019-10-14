var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    assert = require('assert'),
    until = webdriver.until;
    var driver;

    describe('library app scenarios', function() {
        this.timeout(50000);
        beforeEach(async () => {
            driver = await new webdriver.Builder().forBrowser('chrome').build();
            await driver.get('https://library-app.firebaseapp.com/');
            // await driver.manage().window().setPosition(600, 0); // Why does not work with selenium-webdriver version 4.0.0 alpha?
        });

        afterEach(async () => {
            await driver.quit();
        });
    
        it('Changes Button opacity upon email being filled out', async () => {
            let submitBtn = await driver.wait(until.elementLocated(By.css('.btn-lg')),15000);
            await driver.findElement(By.css('input')).sendKeys('user@test.com');
            return submitBtn.getCssValue('opacity').then(function(result) {
                assert.equal(result,1);
            });
        });

        it('submitting email shows an alert', async () => {
            await driver.findElement(By.css('input')).sendKeys('user@test.com');
            let submitBtn = await driver.wait(until.elementLocated(By.css('.btn-lg')),5000);
            await submitBtn.click();
            await driver.wait(until.elementLocated(By.css('.alert-success')),15000).getText().then(function(txt){
                console.log("Alert success test is: " + txt);
            });
            await driver.findElements(By.css('.alert-success')).then(function(result) {
                assert.equal(result.length, 1, " alert-success were found");
            });
        });

        it('Shows a navbar element', async () => {
            await driver.findElements(By.css('nav')).then(function(result) {
                assert.equal(result.length,1);
            });
        });
    });
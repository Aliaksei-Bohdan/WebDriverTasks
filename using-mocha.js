var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    var driver;

    describe('library app scenarios', function() {
        this.timeout(50000);
        beforeEach(async () => {
            driver = await new webdriver.Builder().forBrowser('chrome').build();
        });

        afterEach(async () => {
            await driver.quit();
        });

        it('submitting email shows an alert', async () => {
            await driver.get('https://library-app.firebaseapp.com/');
            await driver.findElement(By.css('input')).sendKeys('us@mail.ru');
            let submitBtn = await driver.wait(until.elementLocated(By.css('.btn-lg')),5000);
            await submitBtn.click();
            await driver.wait(until.elementLocated(By.css('.alert-success')),15000).getText().then(function(txt){
                console.log("Alert success test is: " + txt);
            });
        });
    });
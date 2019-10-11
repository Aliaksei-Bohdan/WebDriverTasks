var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    var driver;

    describe('library app scenarios', function() {
        this.timeout(50000);
        beforeEach(function() {
            driver = new webdriver.Builder().forBrowser('chrome').build();
        });

        afterEach(function() {
            driver.quit();
        });

        it('submitting email shows an alert', function() {
            driver.get('https://library-app.firebaseapp.com/');
            driver.findElement(By.css('input')).sendKeys('us@mail.ru');
            let submitBtn = driver.wait(until.elementLocated(By.css('.btn-lg')),5000);
            submitBtn.click();
            driver.wait(until.elementLocated(By.css('.alert-success')),15000).getText().then(function(txt){
                console.log("Alert success test is: " + txt);
            });
        });
    });
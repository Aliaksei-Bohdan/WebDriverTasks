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
        
        /*it('Changes Button opacity ipon email being filled out', function() {
            var submitBtn = driver.findElement(By.css('.btn-lg'));
            driver.findElement(By.css('input')).sendKeys('us@mail.ru');
                
            driver.wait(function(){
                return submitBtn.getCssValue('opacity').then(function(result){
                    return result === '1';
                });
            }, 5000);
        });*/

        it('submitting email shows an alert', function() {
            driver.get('https://library-app.firebaseapp.com/');
            var submitBtn = driver.findElement(By.css('.btn-lg'));
            driver.findElement(By.css('input')).sendKeys('us@mail.ru');
            submitBtn.click();
            driver.wait(until.elementLocated(By.css('.alert-success')),15000).getText().then(function(txt){
                console.log("Alert success test is: " + txt);
            });
        });

        /*it('Shows a navbar', function() {
            driver.findElement(By.css('nav')).getText().then(function(txt) {
                console.log(txt);
            });
        });*/
        
    });
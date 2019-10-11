const {Builder, By, Key, until} = require('selenium-webdriver');

(async function GoogleSearch() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://library-app.firebaseapp.com/');
    
    var submitBtn = await driver.findElement(By.css('.btn-lg'));
    await driver.findElement(By.css('input')).sendKeys('us');
    
    driver.wait(function(){
        return submitBtn.getCssValue('opacity').then(function(result){
            return result === '1';
        });
    }, 15000);

    submitBtn.click();
    // await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.css('.alert-success')),5000).getText().then(function(txt){
        console.log("Alert success test is: " + txt);
    });

    /*let findTxt = await driver.wait(until.elementLocated(By.css('.alert-success')),10000);
    await findTxt.getText().then(function(txt){
        console.log("Alert success test is: " + txt);
    });*/
    
    /*await driver.findElement(By.css('input')); // type
    await driver.findElement(By.css('.btn-lg')).getText().then(function(txt){
        console.log("the text os the button is: " + txt);
    }); // class
    await driver.findElements(By.css('nav li')).then(function(elements){
        elements.map(function(el){
            el.getText().then(function(txt){
                console.log("the text of the navbar element is: " + txt);
            });
        });
    }); // class name and element name*/
    /*await driver.get('https://library-app.firebaseapp.com/');

    await driver.findElement(By.css('input')).then(function(el){
        console.log("success " + el);
    }); // type
    await driver.findElement(By.css('.btn-lg')).then(function(el){
        console.log("found the button " + el);
    }); // class
    await driver.findElement(By.css('nav li')).then(function(array){
        console.log("Found the elements you wanted " + array);
    }); // class name and element name */
  } finally {
    await driver.sleep(1000);
    await driver.quit();
  }
})();




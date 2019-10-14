'use strict';

const {Builder, By, Key, until} = require('selenium-webdriver');

var webDriver = require('selenium-webdriver');
var driver = new webDriver.Builder().withCapabilities(
    webDriver.Capabilities.chrome()
).build();

driver.get('https://telescope.epam.com').then(function() {
    return driver.switchTo().frame(driver.findElement(By.xpath("//iframe[@id='duo_iframe']")));
}).then(function() {
    return driver.findElement(By.css('.positive:nth-child(3)')).click();
}).then(function(){
    /*let msg = driver.findElement(webDriver.By.css('.messages-list'));
    driver.wait(webDriver.until.elementTextContains(msg,'Pushed a login request to your device...'),5000);*/
}).then(function() {
    return driver.switchTo().defaultContent();
}).then(function() {
    let query = driver.wait(until.elementLocated(By.css('.iM4Rv')),15000);
    return query.click();
}).then(function() {
    return driver.findElement(By.css('.iM4Rv')).sendKeys('Aliaksei Bohdan');
}).then(function() {
    return driver.findElement(By.css('._1Xhsi')).click();
}).then(function() {
    let searchMe = driver.wait(until.elementLocated(By.linkText('Aliaksei Bohdan')),5000);
    return searchMe.click();
}).then(function() {
    let items = driver.wait(until.elementLocated(By.xpath('//div/span[contains(@class,"InformersFilterContainer---index---filter")][5]')),5000);
    return items.click();
}).then(function () {
    // scroll by coordinates
    driver.executeScript('window.scrollBy(0,500)');
    // driver.sleep(1000);
    // driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
}).then(function() {
    let HeadOfUnit = driver.wait(until.elementLocated(By.xpath('//div[contains(@class,"InformersContainerView---index---informer")][@data-id][2]')),5000);
    //div[contains(@class,"sectionTitle")][@title]
    return HeadOfUnit;
}).then(function(el) {
    return redLineWithJS(el);
}).then(function() {
    return driver.findElements(By.xpath('//div[contains(@class,"InformersContainerView---index---informer")][@data-id]'));
}).then(function(el) {
    //let el2 = driver.findElement(By.xpath('//div[contains(@class,"InformersContainerView---index---informer")][@data-id][3]'));
    // return driver.actions().mouseDown(el[0]).mouseMove(el[2]).mouseMove({x: 120, y: 0}).mouseUp().perform();
    return driver.actions().dragAndDrop(el[0], el[2]).perform();
}).then(function() {
    // return driver.quit();
});
    
function redLineWithJS(el) {
    var bg;
    return el.getCssValue("color").then(function (col) {
        bg = col;
    }).then(function () {
        return driver.executeScript("arguments[0].style.color = '" + "red" + "'", el)
    }).then(function () {
        return driver.sleep(3000);
    }).then(function () {
        console.log('bg', bg);
        return driver.executeScript("arguments[0].style.color = '" + bg + "'", el);
    }).then(function () {
        return driver.sleep(1000);
    })
}



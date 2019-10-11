'use strict';

const {Builder, By, Key, until} = require('selenium-webdriver');

var webDriver = require('selenium-webdriver');
var driver = new webDriver.Builder().withCapabilities(
    webDriver.Capabilities.chrome()
).build();

driver.get('https://www.guru99.com/').then(function() {
    return driver.executeScript('window.scrollBy(0,1000)');
}).then(function() {
    let HeadOfUnit = driver.wait(until.elementLocated(By.xpath('//section[@id="g-utility"]/div[@class="g-container"]')),5000);
    return HeadOfUnit;
}).then(function(el) {
    return redLineWithJS(el);
});
    
function redLineWithJS(el) {
    var bg;
    return el.getCssValue("background").then(function (col) {
        bg = col;
    }).then(function () {
        return driver.executeScript("arguments[0].style.background = '" + "red" + "'", el)
    }).then(function () {
        return driver.sleep(1000);
    }).then(function () {
        console.log('bg', bg);
        return driver.executeScript("arguments[0].style.background = '" + bg + "'", el);
    })
}
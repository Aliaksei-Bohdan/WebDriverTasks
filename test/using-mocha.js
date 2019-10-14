var Page = require('../lib/home_page');
var page;

describe('library app scenarios', function() {
    this.timeout(50000);

    beforeEach(async () => {
        page = new Page();
        page.visit('https://library-app.firebaseapp.com/');
    });

    afterEach(async () => {
        await page.quit();
    });
   
    it('Typing valid email changes opacity to 1', async () => {
        await page.requestBtn();
    });

    it('Typing valid email enables request button', async () => {
        await page.requestBtn();
    });

    it('Clicking Request invitation triggers a confirmation alert', async () => {
        await page.alertSuccess();
    });
});
const puppeteer = require('puppeteer');

const TEST_URL = 'http://127.0.0.1:8000';
const USER_NAME = ''; // TODO 外だしする
const PASSWORD = '';  // TODO 外だしする

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  await page.goto(TEST_URL);
  await page.screenshot({path: `01-welcome-page.png`});
  await page.click('a[href="/login"]');

  await page.screenshot({path: `02-login.png`});
  await page.type('input[name="user-name"]', USER_NAME);
  await page.type('input[name="password"]', PASSWORD);
  await page.click('input[value="ログイン"]');

  await page.screenshot({path: `03-user-home.png`});
  await browser.close();
})();

const puppeteer = require('puppeteer');
require('dotenv').config();

const TEST_URL = process.env.TEST_URL;
const LOGIN_USER_NAME = process.env.LOGIN_USER_NAME;
const LOGIN_USER_PASSWORD = process.env.LOGIN_USER_PASSWORD;

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto(TEST_URL);
  await page.screenshot({path: `01-welcome-page.png`});
  await page.click('a[href="/login"]');

  await page.screenshot({path: `02-login.png`});
  await page.type('input[name="user-name"]', LOGIN_USER_NAME);
  await page.type('input[name="password"]', LOGIN_USER_PASSWORD);
  await page.click('input[value="ログイン"]');

  await page.screenshot({path: `03-user-home.png`});
  await browser.close();
})();

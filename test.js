const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:8000');
  await page.screenshot({path: 'hello.png'});

  await browser.close();
})();

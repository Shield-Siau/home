const puppeteer = require('puppeteer');

async function scrapeFunds() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.eunittrust.com.my/Home/FundDetail?fcode=026012&fname=Opus-Shariah-Income-Plus-Fund');

  await new Promise(resolve => setTimeout(resolve, 5000));

  const html = await page.evaluate(() => document.body.innerHTML);
  console.log(html);

  await browser.close();
}

scrapeFunds();
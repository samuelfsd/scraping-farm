const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({executablePath: '/usr/bin/google-chrome'});
  const page = await browser.newPage();

  // Navigate the page to a URL.
  await page.goto('https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao');
  await page.screenshot({path: 'farm-site.png'})

  await browser.close()
})();
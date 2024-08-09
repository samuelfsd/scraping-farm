const puppeteer = require('puppeteer-core');

const url = 'https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao';
let googleURL = '/usr/bin/google-chrome';


(async () => {
  const browser = await puppeteer.launch({executablePath: googleURL });
  const page = await browser.newPage();

  await page.goto(url);

  await page.type('#cnpj', '00000000000191')

  await page.click('[type=submit]')

  await delay(4000)
  await page.screenshot({path: 'farm-site.png'})


  await browser.close()
})();

function delay(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time)
  });
}

import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch();
const page = await browser.newPage();
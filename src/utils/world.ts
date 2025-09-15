import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { TestFixtures } from '../fixtures/fixtures';
import { setDefaultTimeout } from '@cucumber/cucumber';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const testFixtures = new TestFixtures();

export async function setup() {
  let browser: Browser;

  if (process.env.LT_USERNAME && process.env.LT_ACCESS_KEY) {
    const capabilities = {
      browserName: 'Chrome',
      browserVersion: 'latest',
      'LT:Options': {
        user: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
        platform: 'Windows 10',
        build: 'Playwright-Cucumber-Build',
        name: 'Cucumber Scenario',
        network: true,
        video: true,
        console: true,
      },
    };

    const wsEndpoint = `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      JSON.stringify(capabilities)
    )}`;

    browser = await chromium.connect(wsEndpoint);
  } else {
    browser = await chromium.launch({ headless: false });
  }

  const context = await browser.newContext();
  const page = await context.newPage();

  page.setDefaultTimeout(800000);
  // page.setDefaultNavigationTimeout(800000);

  testFixtures.setBrowser(browser);
  testFixtures.setContext(context);
  testFixtures.setPage(page);
  testFixtures.initPages();
}

export async function teardown() {
  await testFixtures.browser?.close();
}

// Export shared instances
export const browser = () => testFixtures.browser;
export const context = () => testFixtures.context;
export const page = () => testFixtures.page;
export const allScenariosPage = () => testFixtures.allScenariosPage;
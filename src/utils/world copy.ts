import { chromium } from '@playwright/test';
import { TestFixtures } from '../fixtures/fixtures';
import { setDefaultTimeout } from '@cucumber/cucumber';

const testFixtures = new TestFixtures();

export async function setup() {
  const browser = await chromium.launch({ headless: false });
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

// Export shared instances as functions for up-to-date references
export const browser = () => testFixtures.browser;
export const context = () => testFixtures.context;
export const page = () => testFixtures.page;
export const allScenariosPage = () => testFixtures.allScenariosPage;
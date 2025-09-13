// support/fixtures.ts
import { Browser, BrowserContext, Page } from '@playwright/test';
import { AllScenariosPage } from '../pages/allScenariosPage';

export class TestFixtures {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  allScenariosPage!: AllScenariosPage;

  setBrowser(browser: Browser) {
    this.browser = browser;
  }

  setContext(context: BrowserContext) {
    this.context = context;
  }

  setPage(page: Page) {
    this.page = page;
  }

  initPages() {
    this.allScenariosPage = new AllScenariosPage(this.page);
  }
}

// support/fixtures.ts
import { Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export class TestFixtures {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  loginPage!: LoginPage;

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
    this.loginPage = new LoginPage(this.page);
  }
}

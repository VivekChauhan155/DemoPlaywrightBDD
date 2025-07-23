import { Page, expect } from '@playwright/test';
import { page } from '../utils/world';
export class LoginPage
{
    private page: Page;
    constructor(page: Page) {
        this.page = page;
      }
    async loginWithValidCredentials(){
        console.log("I am in loginwithvalidcredentials method")
        // page().locator(".test").click();
    }
}
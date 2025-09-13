import { Page, expect } from '@playwright/test';
import { page } from '../utils/world';
export class AllScenariosPage
{
    private page: Page;
    constructor(page: Page) {
        this.page = page;
      }
    async clickOnSampleFormDemo(){
     await page().locator("a:text-is('Simple Form Demo')").click();
    
    }
}
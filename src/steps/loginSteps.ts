import { Given, Then, When } from '@cucumber/cucumber';
import { page, loginPage } from '../utils/world';
import * as dotenv from 'dotenv';
const users = require('../testData/users.json');
dotenv.config();




Given('I open the Playwright homepage', async function () {
  console.log("In test steps")
});
Given('Launch application', async function () {
    await page().goto('https://your-app-url.com');
  });

  Then('Verify Login page', async function () {

   await loginPage().loginWithValidCredentials();
  });

  When('Enter credentials and click on login button', async function () {
    const baseUrl = process.env.BASE_URL;
    console.log("test url - "+ baseUrl)
  });


  Then('Verify user logged in successfully', async function () {
    const user = users.validUser.username;

    const { username, password } = users.validUser;
    console.log('Valid user:', username, password);
  });


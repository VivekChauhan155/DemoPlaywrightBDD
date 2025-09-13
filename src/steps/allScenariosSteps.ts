import { Given, Then, When , setDefaultTimeout} from '@cucumber/cucumber';
import { page, allScenariosPage } from '../utils/world';
import * as dotenv from 'dotenv';
import { expect } from '@playwright/test';
const users = require('../testData/users.json');
dotenv.config();

setDefaultTimeout(800000); 
Given('Launch application', async function () {
    await page().goto('https://www.lambdatest.com/selenium-playground/');
  });

When('Click on Simple Form Demo link', async function() {
  await allScenariosPage().clickOnSampleFormDemo();
})

Then('Verify url contain {string}', async function(text) {
  expect(page().url()).toContain(text);
})

When('Enter text {string} in input field', async function(text) {
  await page().locator('input[id="user-message"]').fill(text)
})

When('Click on Get Checked Value button', async function() {
    await page().locator('button[id="showInput"]').click()
     await  page().waitForTimeout(2000);
})

Then('Verify entered text {string} under your message section', async function(text) {
    const actValue = await page().locator('p[id="message"]').innerText();
    console.log("received value = "+ actValue)
    expect (actValue).toBe(text);
  
})

Given('Launch application for Scenario {int}', async function (no:number) {
    await page().goto('https://www.lambdatest.com/selenium-playground/');
})

When('Click on {string} link', async function(text) {
   await page().locator("a:text-is('Drag & Drop Sliders')").click();
   await  page().waitForTimeout(2000);
})

Then('Select default {int} bar and make it {int}',  async function (no:number,no2:number) {
const slider = page().locator('input[value="15"]');
  await expect(slider).toBeVisible();

   const box = await slider.boundingBox();
  if (!box) throw new Error('Slider not visible');

  const min = Number(await slider.getAttribute('min') ?? '0');
  const max = Number(await slider.getAttribute('max') ?? '100');
  const step = Number(await slider.getAttribute('step') ?? '1');
  const targetValue = 95;

  const sliderX = box.x;
  const sliderWidth = box.width;
  const sliderY = box.y + box.height / 2;

  const totalSteps = (max - min) / step;
  const stepWidth = sliderWidth / totalSteps;

  const stepsToTarget = (targetValue - min) / step;
  const targetX = sliderX + stepWidth * stepsToTarget;

  await page().mouse.move(sliderX + 1, sliderY);
  await page().mouse.down();
  await page().mouse.move(targetX, sliderY, { steps: 15 });
  await page().mouse.up();
  const output = page().locator('output[id="rangeSuccess"]'); 
  await expect(output).toHaveText('97');
  
})

When('Click on {string} link for 3rd Scenario', async function(text) {
  await page().locator("a:text-is('Input Form Submit')").click();
   await  page().waitForTimeout(2000);
})

When('Click on Submit button and verify validation message', async function() {
  await page().locator("button[type='submit']:text-is('Submit')").click();
  const input = page().locator('input[required]').nth(5);
  const isValid = await input.evaluate((el) => (el as HTMLInputElement).checkValidity());
  expect(isValid).toBe(false); 
})

When('Fill all required fields', async function() {
     await page().locator("input[id='name']").fill("Vivek")
     await page().locator("input[id='inputEmail4']").fill("Vivektest@gmail.com")
     await page().locator("input[id='inputPassword4']").fill("testpwd")
     await page().locator("input[id='company']").fill("Test Company")
     await page().locator("input[id='websitename']").fill("Test site")
     await page().locator("input[id='inputCity']").fill("Test City")
     await page().locator("input[id='inputAddress1']").fill("Test Address 1")
     await page().locator("input[id='inputAddress2']").fill("Test Address 2")
     await page().locator("input[id='inputState']").fill("Test State")
     await page().locator("input[id='inputZip']").fill("4556666")
     await page().selectOption('select[name="country"]', { label: 'India' });
})

When('Click on Submit button', async function() {
   await page().locator("button[type='submit']:text-is('Submit')").click();
})
Then('Verify Form saved success message',async function() {
     const element = await page().locator('p[class="success-msg hidden"]:text-is("Thanks for contacting us, we will get back to you shortly.")'); 
  const isVisible = await element.isVisible();
  expect(isVisible).toBe(true);
})


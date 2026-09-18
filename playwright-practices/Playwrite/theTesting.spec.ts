import {test, expect} from '@playwright/test';

test('thethestingacdemy', async ({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter", {waitUntil:'load'});
    
    let inputBox = page.locator("//input[@placeholder='student@thetestingacademy.com']");
        await inputBox.click()
        await inputBox.fill("chetan01@gmail.com");
    let pass=page.locator("//input[@type='password']")
    await pass.click();
    await pass.fill("12345");
    await page.locator("//input[@type='checkbox']").click();

    let submit= page.locator("//button[@class='login-btn']")
    await submit.click();
    await page.locator("//a[@data-testid='form-forgot-password']").click()
     console.log("Fill done")
      await page.waitForTimeout(9000);
})
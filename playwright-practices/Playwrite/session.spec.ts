
import {test, expect} from '@playwright/test'
test('session', async({page})=>{
    await page.goto("https://www.saucedemo.com/",)

    let user=page.locator("//input[@placeholder='Username']")

    await user.fill("standard_user")

    let pass = page.locator("//input[@placeholder='Password']")

    await pass.fill("secret_sauce")
    let log = page.locator("//input[@value='Login']")
    await log.click();
    console.log("Done")

    let add = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']")
    await add.click()

    let cart = page.locator("//a[@data-test='shopping-cart-link']")
    await cart.click()

    let conti = page.locator("//button[@id='checkout']")
    await conti.click();

    let checkF =page.locator("//input[@placeholder='First Name']")

    await checkF.fill("Davaid")

    let checkL =page.locator("//input[@placeholder='Last Name']")

    await checkL.fill("Aus")

    let Pin =page.locator("//input[@placeholder='Zip/Postal Code']")

    await Pin.fill("543890")

    let sub = page.locator("//input[@type='submit']")

    await sub.click()

    let fini = page.locator("//button[@id='finish']")
    await fini.click()

    await page.waitForTimeout(9000);
})

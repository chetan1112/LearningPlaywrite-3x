
import { test, expect } from '@playwright/test'

test ('hover test', async ({page})=>{
    await page.goto(
    'https://app.thetestingacademy.com/playwright/widgets/hover-menu',
    { waitUntil: 'load' }
  );

    await page.getByTestId('nav-add-ons').hover();
    const InsuranceOption = page.getByTestId('test-id-Insurance')
    await expect(InsuranceOption).toBeVisible()
    await InsuranceOption.click()
    await page.pause()

    // await page.getByTestId('nav-add-ons').hover();
    // const hotelOption = page.getByTestId('test-id-Hotel');
    // await expect(hotelOption).toBeVisible();
    // await hotelOption.click();
    // await page.pause()
})
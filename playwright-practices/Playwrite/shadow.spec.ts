
import {test,expect, Locator} from '@playwright/test'

test.describe('shadow dom handling', ()=>{

    const URL ="https://app.thetestingacademy.com/playwright/widgets/shadow-dom"

    test.beforeEach(async ({page})=> {
        await page.goto(URL);
    })

    test ('Locate the shadow dom assert visible', async ({page})=>{
     const card = page.getByTestId('card-account-card')

     await card.locator ('input[name="email"]').fill("chetaningle101@gmial.com");

     await card.locator('input[name="password"]').fill('7845');
     //await card.getByTestId('data-testid="card-account-password"')

     await card.getByTestId('card-account-submit').click();

     await expect (page.getByTestId('card-account-status')).toContainText('chetaningle101@gmial.com')

     const count = page.getByTestId('counter-cart')

     await count.getByRole('button', {name : 'Increment'} ).click()
     await expect (page.getByTestId('counter-value'))
     .toHaveText('5')

     await page.pause()
    })
})
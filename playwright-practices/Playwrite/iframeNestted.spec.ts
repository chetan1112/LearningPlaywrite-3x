
import{test,expect} from '@playwright/test'

test('nessted iframe', async ({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/nested_frames")

    // open top frame

    const top = page.frameLocator('[name="frame-top"]')

    // from top open the middle , right, left 
    const left = top.frameLocator('[name="frame-left"]')
    const middle = top.frameLocator('[name="frame-middle"]')
    const right = top.frameLocator('[name="frame-right"]')

    // BOTTOM is separate: only one door from the main page

    const bottom = page.frameLocator('[name="frame-bottom"]')

    //Check the test 

    await expect (left.locator('body')).toHaveText('LEFT')
    await expect (right.locator('body')).toHaveText('RIGHT')
   await expect (middle.locator('body')).toHaveText('MIDDLE')
    await expect (bottom.locator('body')).toHaveText('BOTTOM')

})

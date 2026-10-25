
import {test, expect} from '@playwright/test'

test ('verify iframe', async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/iframe",{waitUntil:'load'})
    //find 1st iframe
    const frame = page.frameLocator('#mce_0_ifr')

    const frame1 = frame.locator('#tinymce')

    await frame1.clear()
    await frame1.fill('Hello chetan playwright')
     await expect(frame1).toHaveText('Hello chetan playwright')


})

// import { test, expect } from '@playwright/test'

// test('verify iframe', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/iframe')

//     // find the iframe
//     const frame = page.frameLocator('#mce_0_ifr')

//     // find the editor body inside the iframe
//     const editor = frame.locator('#tinymce')

//     await editor.clear()
//     await editor.fill('Hello chetan playwright')

//     await expect(editor).toHaveText('Hello chetan playwright')
// })
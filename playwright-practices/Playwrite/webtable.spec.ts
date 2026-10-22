import {test,expect, Locator} from '@playwright/test'

test('verify webtable', async({page})=>{
    await page.goto("https://awesomeqa.com/webtable1.html")

    const rows = page.locator('table[summary="Sample Table"] tbody tr')

    const countRow = await rows.count();

    for(let i=0; i<countRow-1; i++){
        const rowData = await rows.nth(i).locator('td').allInnerTexts()
    }

    await page.pause()
})


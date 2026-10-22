import { test, expect } from '@playwright/test';

test ('veriy web table', async ({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const first = "//table[@id='employees-tbody']/tbody/tr["
    const second = "]/td["
    const third = "]"

    const row = await page.locator ("//table[@id='employees-tbody']/tbody/tr").count();

    const columnCount = await page.locator ("//table[id='employees-tbody']/tbody/tr[1]/td").count();

    for(let i=1; i<=row; i++){
        for(let j=1; j<=columnCount; j++){

            const dynamicPath = `${first}${i}${second}${j}${third}`
            const data = await page.locator(dynamicPath).innerText();

            console.log(data)

            if(data.includes('Aarav Sharma')){
             const contryPath = `${dynamicPath}/following-sibling::td[1]`; 
             const countryText = await page.locator(contryPath).innerText();
             console.log('------');
             console.log(`Aarav Sharma is In - ${countryText}`);
             await expect(page.locator(contryPath)).toHaveText('India');


            }
        }
    }


})
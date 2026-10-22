
import {test, expect} from '@playwright/test'

test('verify example1', async ({page})=>{

    await page.goto("https://awesomeqa.com/webtable.html")

    const first = "//table[@id='customers']/tbody/tr[";

    const second = "]/td";
    const third ="]"

    const row = await page.locator("//table[@id='customers']/tbody/tr").count();

    const row2 = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

    for(let i=2; i<=row; i++){
        for(let j=1; j<=row2; j++){

          const dyanmicPath = `${first}${i}${second}[${j}${third}`;

          const data = await page.locator(dyanmicPath).innerText()

          console.log(data)
          if (data.includes('Helen Bennett')) {
             const countryPath = `${dyanmicPath}/following-sibling::td`; 
             const countryText = await page.locator(countryPath).innerText();
             console.log('------');
             console.log(`Helen Bennett is In - ${countryText}`);
             await expect(page.locator(countryPath)).toHaveText('UK');

        }
    }}
})
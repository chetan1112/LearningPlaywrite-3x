
import{test,expect,Locator} from '@playwright/test'

test ('hover test', async ({page})=>{
    await page.goto(
    'https://app.thetestingacademy.com/playwright/widgets/hover-menu',
    { waitUntil: 'load' }
  );

  const tags = ['Taxi','Hotel','Insurance,Meal']

  for(const tag of tags){
    await page.getByTestId('nav-add-ons').hover()
    await page.getByTestId(`data-testid-${tag}`).click()
  }
})
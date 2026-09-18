import { test, expect } from '@playwright/test';

test('open the page', async({page})=>{
    await page.goto("https://github.com/PramodDutta/LearningPlaywrightFundamentals3x/blob/main/tests/03_Locator_Commands/225_LC.spec.ts#L1")
})
import { test, expect, Locator } from '@playwright/test';

/*test("Handling dynamic elements in playwright using Xpaths", async ({ page }) => {
   await page.goto('https://testautomationpractice.blogspot.com/');

   for(let i=1; i<=5; i++){

    let button:Locator=await page.locator(`//button[text()="STOP" or text()="START"]`);
    
    await button.click();

    await page.waitForTimeout(3000);
   }
});
*/
test("Handling dynamic elements in playwright using Xpaths", async ({ page }) => {
   await page.goto('https://testautomationpractice.blogspot.com/');

   for(let i=1; i<=5; i++){

    const button=page.getByRole('button', { name:/START|STOP/});
    
    await button.click();

    await page.waitForTimeout(3000);
   }
});